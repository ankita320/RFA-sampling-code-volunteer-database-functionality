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
var group = AdminDirectory.getEmail(dest_sheet_name);

var groups = GroupsApp.getGroups().getInactiveUser().bySheetName(dest_sheet_name) 

var groups = GroupsApp.getGroups().getRole(user)

var groupMember = GroupsApp(dest_sheet_range)

  var dest_sheet = spreadsheet.getEmail(dest_sheet_name)
    var group = spreadsheet.getEmail(dest_sheet_name)

  var dest_range = sheet.getUserKey();
//move user to group


date = Utilities.formatDate(new Date(), "GMT-8", "HH:mm:ss MM/dd/yyyy")
dest_range = dest_sheet.getRange(emptyRow, 1, 1, 1)
name_range = dest_sheet.getRange(emptyRow, 1, 1, 2)
console.log("Note: " + note)
if(note != "") note = note.concat("\n\n")
dest_range.setNote(note + "Moved by " + usr + " at " + date + "in PT\n")
name_range.setBackgrounds([[color, color]])
//^^ code for moving to group in spreadsheet(apps script)

var dest_range = groups.remove(user);

//not sure if below code is necessary

dest_range.shiftRowGroupDepth();
//-----


var dest_range = dest_sheet.getRange(emptyRow);

// removes group
var dest_range = groups.remove();

AdminDirectory.toast(`Removing user from ${groups} group, please wait...` 2)

//check membership based off of what sheet they were moved to
//getting email of user from destination sheet
