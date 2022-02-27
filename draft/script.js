// admindirectory json
{
   "kind": "directory#members",
      
   "members": [
   {
    "kind": "directory#member",
    "id": "group member's unique ID",
    "email": "liz@example.com",
    "role": "MANAGER",
    "type": "GROUP"
   },
   {
    "kind": "directory#member",
    "id": "group member's unique ID",
    "email": "radhe@example.com",
    "role": "MANAGER",
    "type": "MEMBER"
   }
  ],
   "nextPageToken": "NNNNN"
}

//getInactiveUser  --> FUNCTION(?)
// bySheetName


groupMembership = AdminDirectory.user.remove; //(?)

SpreadsheetApp.getActiveSpreadsheet().rg.getRow(), ev.user.getEmail
SpreadsheetApp.getGroups().getInactiveUser().bySheetName 
//(?)
//var group = AdminDirectory.getEmail(dest_sheet_name);

var groups = GroupsApp.getGroups();
var groupMember = groups.getEmail(dest_sheet); 
var groupMembership = groupMember.getRole(); 
//gets group of user from  sheet
console.log("Group Membership:" + " " + groupMembership);
/*if the group member is in the correct group based on role, check, if not, add the group member to the group according to the role. and delete the group meber if they are marked inactive on the  spreadshee*/
//pass on 'roles' from dest-sheet to groups

if (groups.hasMember(groupMember(dest_sheet))) {
   console.log("Correct group.")};

else if (groups.hasMember(groupMember.bySheetName(Inactive))) {
    groups.delete(groupMember.bySheetName(Inactive)};
else {
   groups.insert(groupMember.groupsMembership(dest_sheet));};


update(groups);

//if marked entirely inactive,not part of anymore, remove

//move by name
//if hasmember, update group,member(email);
//elif insert
//update group



//var groupMember = GroupsApp(dest_sheet_range);

//var groups = groups.remove(member);

  //var dest_sheet = spreadsheet.getEmail(dest_sheet_name);
    //var group = spreadsheet.getEmail(dest_sheet_name);

  var dest_range = sheet.getUserKey();*/
//move user to group

/*
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
*/

//not sure if below code is necessary

dest_range.shiftRowGroupDepth();
//-----


var dest_range = dest_sheet.getRange(emptyRow);

// removes group
var dest_range = groups.remove();

AdminDirectory.toast(`Removing user from ${groups} group, please wait...` 2)

//check membership based off of what sheet they were moved to
//getting email of user from destination sheet
