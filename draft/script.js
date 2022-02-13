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
GroupsApp.getGroups().getInactiveUser().bySheetName //<-- grabbing user from group
var dest_sheet = spreadsheet.getEmail(dest_sheet_name)
var dest_range = sheet.getEmail();
//not sure if below code is necessary
dest_range.shiftRowGroupDepth();
//-----
var group = AdminDirectory.getEmail(dest_sheet_name);


var dest_range = dest_sheet.getRange(emptyRow);

// removes group
var dest_range = group.remove();

AdminDirectory.toast(`Removing user from ${dest_range} group, please wait...` 2)

//check membership based off of what sheet they were moved to
//getting email of user from destination sheet
