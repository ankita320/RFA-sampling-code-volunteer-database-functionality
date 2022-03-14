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

var groups = GroupsApp.getGroupByEmail();
var groupMember = groups.getEmail(dest_sheet); 
var groupMembership = groupMember.getRole(); 
//gets group of user from  sheet
console.log("Group Membership:" + " " + groupMembership);
/*if the group member is in the correct group based on role, check, if not, add the group member to the group according to the role. and delete the group meber if they are marked inactive on the  spreadshee*/
//pass on 'roles' from dest-sheet to groups

if (groups.hasMember(groupMember)) {
   console.log("Correct group.");}

else if (groups.hasMember(groupMember.bySheetName(Inactive))) {
    groups.delete(groupMember.bySheetName(Inactive, Active);}

else if (groups.hasMember(groupMember.bySheetName( Teacher Inactive, Curriculum Inactive))) {
    groups.delete(groupMember.bySheetName(Active);}
else {
   groups.insert(groupMember.groupsMembership);
   }


update(groups);

function addUsertoGroup(userEmail) {
  var userEmail = userEmail.toLowerCase();
  var groupId = "My-Group@example.com";
  var group = GroupsApp.getGroupByEmail(groupId);
  try { 
    var hasMember = group.hasUser(userEmail); 
    if (!hasMember){
          var newMember = {email: userEmail, role: "MEMBER"};
          var mStatus=AdminDirectory.Members.insert(newMember, groupId); 
          Logger.log(" inserted: "+mStatus.email+"\n");
          return true; 
    }else{
          Logger.log(userEmail+" exists\n"); 
          return false;
    }
  } catch(e) {
          Logger.log(userEmail + " error"+e+"\n");
          return false; 
  }
}

AdminDirectory.Members.remove("teacher@roboticsforall.net", userDataRaw[6]);

//userDataRaw[6]
//if they are moved to inactive(teacher), remove fro teacher group
//not remove from whole thing, just for removing b4 adding to new group(?)

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
