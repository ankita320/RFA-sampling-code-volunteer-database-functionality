groupMembership.delete.user.getEmail

groupMembership = AdminDirectory.Members.remove(member, groupEmail);

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
var dest_sheet = spreadsheet.getSheetByName(dest_sheet_name)

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

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Removes this group
var range = group.remove();

get.userEmail(dest_sheet_name)
userEmail.remove()
//check membership based off of what sheet they were moved to
//getting email of user from destination sheet
