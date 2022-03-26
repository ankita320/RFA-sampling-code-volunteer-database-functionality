var groups = GroupsApp.getGroupByEmail();
var groupMember = groups.getEmail(dest_sheet); 
var groupMembership = groupMember.getRole(); 
//gets group of user from  sheet
console.log("Group Membership:" + " " + groupMembership);
/*if the group member is in the correct group based on role, check, if not, add the group member to the group according to the role. and delete the group meber if they are marked inactive on the  spreadshee*/
//pass on 'roles' from dest-sheet to groups

var sheet = SpreadsheetApp.getActiveSheet()

if (AdminDirectory.Members.hasMember("curricdev@roboticsforall.net", "teacher@roboticsforall.net"userDataRaw[6]) && (sheet.getSheetByName('Active').getName() == userDataRaw[6])) {
   console.log("Correct group.");}

else if (sheet.getSheetByName('Teacher Inactive').getRange() == userDataRaw[6]) {
      AdminDirectory.Members.remove("teacher@roboticsforall.net", userDataRaw[6]);}

else if (sheet.getSheetByName('Curriculum Inactive').getRange() == userDataRaw[6]) {
      AdminDirectory.Members.remove("curricdev@roboticsforall.net", userDataRaw[6]);

   }
   AdminDirectory.toast(`Removing user from ${groups} group, please wait...` 2)


   //if you get a member and it's in the spreadsheet for that page inactive, remove them from the gorup

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

  // If statement on dest_sheet_name to define groupEmail
  // dest_sheet_name = Teacher Inactive, groupEmail = teachers@roboticsforall.net
  // dest_sheet_name = Curriculum Inactive, groupEmail = curricdev@roboticsforall.net
  // dest_sheet_name = Inactive, code shouldn't do anything

  // if (AdminDirectory.Members.hasMember(groupEmail, userEmail)) {
  //
  // }
  //AdminDirectory.Members.remove(groupEmail, userEmail);

userEmail = userDataRaw[6];

if (dest_sheet_name === "Teacher Inactive") {
   groupEmail = "teachers@roboticsforall.net";}

else if (dest_sheet_name === "Curriculum Inactive") {
   groupEmail = "curricdev@roboticsforall.net";}

else () {
   //do nothing
}

if (AdminDirectory.Members.hasMember(groupEmail,userEmail))
   AdminDirectory.Members.remove(groupEmail, userEmail);)



if (AdminDirectory.Members.hasMember("curricdev@roboticsforall.net", "teacher@roboticsforall.net", userDataRaw[6]) && (sheet.getSheetByName('Active').getName() == userDataRaw[6])) {
   console.log("Correct group.");}


else if (sheet.getSheetByName('Teacher Inactive').getRange() == userDataRaw[6]) {
      AdminDirectory.Members.remove("teacher@roboticsforall.net", userDataRaw[6]);}

else if (sheet.getSheetByName('Curriculum Inactive').getRange() == userDataRaw[6]) {
      AdminDirectory.Members.remove("curricdev@roboticsforall.net", userDataRaw[6]);

   }
   AdminDirectory.toast(`Removing user from ${groups} group, please wait...` 2)
  // If statement on dest_sheet_name to define groupEmail
  // dest_sheet_name = Teacher Inactive, groupEmail = teachers@roboticsforall.net
  // dest_sheet_name = Curriculum Inactive, groupEmail = curricdev@roboticsforall.net
  // dest_sheet_name = Inactive, code shouldn't do anything

  // if (AdminDirectory.Members.hasMember(groupEmail, userEmail)) {
  //
  // }
  //AdminDirectory.Members.remove(groupEmail, userEmail);



