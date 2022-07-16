let overseerChannel = 'https://hooks.slack.com/services/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';

function sendLog() {
  let dest_sheet_name = "Active"

  var sheet = SpreadsheetApp.getActiveSheet()

  message = ""
  var logRow = 1
  var logText = "null";
  while (logText != "") {
    logText = sheet.getRange("Log Queue!A" + logRow).getValue()
    if (logText != "") sendText(logText)
    Utilities.sleep(500)
    logRow = logRow + 1;
  }
  
  var numActs = 0
  //check if teachers are matched properly
  numActs = numActs + compare(dest_sheet_name, 17,"teachers@roboticsforall.net")
  //check if curriculum are matched properly
  numActs = numActs + compare(dest_sheet_name, 27,"curricdev@roboticsforall.net")
  console.log(numActs)
  sendText("Additionally, " + numActs + " users need action on their group membership.")
  
}

function sendText(txt){
  var payload = `{"text": "${txt}", "post_at": 1657515901}`
  var URL = overseerChannel;
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': payload,

  }

  UrlFetchApp.fetch(URL, options);
}

// Called whenever the sheet it edited
function myOnEdit(ev) {
  const rg = ev.range


  if(rg.getHeight() > 1 || rg.getWidth > 1 && rg.getColumn() < colFromA1Notation("BE3") && !rg.isChecked()) { 
    //none
  } else {
    SpreadsheetApp.getActiveSpreadsheet().toast("Moving user, please wait...", "Administrative Action", 3)
    console.log("Column: " + rg.getA1Notation().slice(0,2))

    switch(rg.getA1Notation().slice(0,2)) {
      case "BE":
        moveToSheet("Inactive",rg.getRow(), ev.user.getEmail())
        break;
      case "BF":
        moveToSheet("Teacher Inactive",rg.getRow(), ev.user.getEmail())
        break;
      case "BG":
        moveToSheet("Curriculum Inactive",rg.getRow(), ev.user.getEmail())
        break;
      default:
        //none
    }
  }
}

// function to compare array and google sheet column
function compare(dest_sheet_name, colNum, groupKey){
  var sheet = SpreadsheetApp.getActiveSheet()
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

  var startRow = 3
  var dest_sheet = spreadsheet.getSheetByName(dest_sheet_name)
  var emailColumn = sheet.getRange(startRow,9,dest_sheet.getMaxRows()).getValues().map(String)

  var checkColumn = sheet.getRange(startRow,colNum,dest_sheet.getMaxRows()).getValues().map(String)

  var group = GroupsApp.getGroupByEmail(groupKey);
  
  var users = group.getUsers()

  var listOfMissingPeople = [];
  
  var cntr = 0;
  for(var i = 0; i<emailColumn.length;i++){
    var checkColumnBoolean = (checkColumn[i] === 'true');
    if (!(customInGroup(users,emailColumn[i]) == checkColumnBoolean)) {
      cntr += 1;
      listOfMissingPeople.push([String((i + startRow)), emailColumn[i], groupKey])
    }
  }

  var values = sheet.getRange("Users Needing Action!A1:A500").getValues();
  var emptyRow = 0;
  for (var emptyRow=0; emptyRow<values.length; emptyRow++) {
    if (!values[emptyRow].join("")) break;
  }
  emptyRow = emptyRow+1;

  console.log(emptyRow);
  console.log(listOfMissingPeople);
  console.log(cntr);
  var logRange = sheet.getRange("Users Needing Action!A" + emptyRow + ":C" + (emptyRow -1 + cntr));
  logRange.setValues(listOfMissingPeople)
  return cntr;
}

// this code is like o(n^2) actually horrible 
// Garrett: smh
function customInGroup (users,email){
  for (var i=0;i<users.length;i++){
    if(users[i].getEmail() == email){
      return true
    }
  }
  return false
}




function moveToSheet(dest_sheet_name, rowNum, usr) {

  var sheet = SpreadsheetApp.getActiveSheet()
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

  var dest_sheet = spreadsheet.getSheetByName(dest_sheet_name)
  console.log("Destination Sheet Name: " + dest_sheet.getName())

  var row = sheet.getRange(rowNum, 1, 1, sheet.getMaxColumns()).getValues()
  var note = sheet.getRange(rowNum, 1, 1, 1).getNote()
  var color = sheet.getRange(rowNum, 1, 1, 1).getBackground()
  var rowP1 = row[0].slice(0, colFromA1Notation("AV3"))
  var rowP2 = row[0].slice(colFromA1Notation("BA3"), colFromA1Notation("BC3"))
  var rowCut = rowP1.concat(rowP2)

  var fcol = dest_sheet.getRange(1, 1, dest_sheet.getMaxRows()).getValues()

  for(var i = 0; i < dest_sheet.getMaxRows(); i++) {
    if (fcol[i] == "") {
      var emptyRow = i+1
      break;
    }
  }

  dest_range = dest_sheet.getRange(emptyRow, 1, 1, dest_sheet.getMaxColumns())
  // rowCut = rowCut[0].map((col, c) => rowCut.map((row, r) => rowCut[r][c]));
  dest_range.setValues([rowCut])
  sheet.deleteRow(rowNum)

  date = Utilities.formatDate(new Date(), "GMT-8", "HH:mm:ss MM/dd/yyyy")
  dest_range = dest_sheet.getRange(emptyRow, 1, 1, 1)
  name_range = dest_sheet.getRange(emptyRow, 1, 1, 2)
  if(note != "") note = note.concat("\n\n")
  dest_range.setNote(note + "Moved by " + usr + " at " + date + "in PT\n")
  name_range.setBackgrounds([[color, color]])

  updateGroupMembership(rowCut, dest_sheet_name)

  spreadsheet.toast("User Moved", "Administrative Action", 2)
}

function addLog(message){
  var sheet = SpreadsheetApp.getActiveSheet()
  var values = sheet.getRange("Log Queue!A1:A500").getValues();
  var emptyRow = 0;
  for (var emptyRow=0; emptyRow<values.length; emptyRow++) {
    if (!values[emptyRow].join("")) break;
  }
  emptyRow = emptyRow+1;

  var logRange = sheet.getRange("Log Queue!A" + emptyRow);
  logRange.setValue(message)
}

function updateGroupMembership(userDataRaw, dest_sheet_name)
{


  msg = ""
 
  var userEmail = userDataRaw[8];
  Logger.log("User to move: " + userDataRaw[8])
  var groupEmail = ""

  if (dest_sheet_name === "Teacher Inactive") 
  {
    groupEmail = "teachers@roboticsforall.net"
  }
  else if (dest_sheet_name === "Curriculum Inactive") 
  {
    groupEmail = "curricdev@roboticsforall.net"
  }

  if (groupEmail != "") 
  {

    try 
    {
      
    if (AdminDirectory.Members.hasMember(groupEmail,userEmail).isMember) 
      {
        //SpreadsheetApp.getUi().alert('User can be removed');
        msg = userEmail + " can be removed from " + groupEmail + "."
      } else {
      //SpreadsheetApp.getUi().alert("⚠️ Error: " + userEmail + " is not a member of " + groupEmail);
        msg = "⚠️ Error: " + userEmail + " is not a member of " + groupEmail + "."
      }

    } catch (err)
    {
      //SpreadsheetApp.getUi().alert(userEmail + " can be removed from " + groupEmail + ".");
      msg = userEmail + " can be removed from " + groupEmail + "."
    }

  } else {
    //SpreadsheetApp.getUi().alert("Please manually make " + userEmail + " inactive.");
    msg = "Please manually make " + userEmail + " inactive."
  }

  addLog(msg);

}
/*

/**
 *
 * modified from SOURCE: https://www.labnol.org/convert-column-a1-notation-210601
 * 
 * @param {string} cell -  The cell address in A1 notation
 * @returns {object} The row number and column number of the cell (0-based)
 *
 * @example
 *
 *   colFromA1Notation("A2") returns 3
 *
 */

const colFromA1Notation = (cell) => {
  const [, columnName, row] = cell.toUpperCase().match(/([A-Z]+)([0-9]+)/);
  const characters = "Z".charCodeAt() - "A".charCodeAt() + 1;

  let column = 0;
  columnName.split("").forEach((char) => {
    column *= characters;
    column += char.charCodeAt() - "A".charCodeAt() + 1;
  });

  return column;
}; 
