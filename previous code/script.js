// Called whenever the sheet it edited
function myOnEdit(ev) {
  SpreadsheetApp.getActiveSpreadsheet().toast("Moving user, please wait...", "Administrative Action", 3)
  const rg = ev.range


  if(rg.getHeight() > 1 || rg.getWidth > 1 && rg.getColumn() < colFromA1Notation("BE3") && !rg.isChecked()) { 
    //none
  } else {
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
``
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
  console.log("Row: " + rowCut)
  console.log("Row Length: " + rowCut.length)

  var fcol = dest_sheet.getRange(1, 1, dest_sheet.getMaxRows()).getValues()

  for(var i = 0; i < dest_sheet.getMaxRows(); i++) {
    if (fcol[i] == "") {
      var emptyRow = i+1
      break;
    }
  }
  console.log("emptyRow: " + emptyRow)

  dest_range = dest_sheet.getRange(emptyRow, 1, 1, dest_sheet.getMaxColumns())
  // rowCut = rowCut[0].map((col, c) => rowCut.map((row, r) => rowCut[r][c]));
  dest_range.setValues([rowCut])
  sheet.deleteRow(rowNum)
  console.log("Deleting Row " + rowNum)

  date = Utilities.formatDate(new Date(), "GMT-8", "HH:mm:ss MM/dd/yyyy")
  dest_range = dest_sheet.getRange(emptyRow, 1, 1, 1)
  name_range = dest_sheet.getRange(emptyRow, 1, 1, 2)
  console.log("Note: " + note)
  if(note != "") note = note.concat("\n\n")
  dest_range.setNote(note + "Moved by " + usr + " at " + date + "in PT\n")
  name_range.setBackgrounds([[color, color]])

  updateGroupMembership(rowCut)

  spreadsheet.toast("User Moved", "Administrative Action", 2)
}

function updateGroupMembership(userDataRaw){
  // https://developers.google.com/admin-sdk/directory/reference/rest
  //
  // Get the user object from the Admin Directory
  // -- Research name/email is needed to find user
  // Check what group(s) they belong to
  // -- Functions to move to/from groups, how to check membership of the group
  // Remove them from relavent groups based on the destiation sheet



}

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
