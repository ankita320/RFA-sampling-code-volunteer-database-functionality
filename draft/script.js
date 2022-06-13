


userEmail = userDataRaw[6];

if (dest_sheet_name === "Teacher Inactive") {
   groupEmail = "teachers@roboticsforall.net";}

else if (dest_sheet_name === "Curriculum Inactive") {
   groupEmail = "curricdev@roboticsforall.net";}

else () {
   //do nothing
}





if (AdminDirectory.Members.hasMember(groupEmail,userEmail).isMember)
   AdminDirectory.Members.remove(groupEmail, userEmail);)



{
  var userEmail = userDataRaw[8];
  Logger.log("User to move: " + userDataRaw[8])
  var groupEmail = ""

  if (dest_sheet_name === "Teacher Inactive") 
  {groupEmail = "teachers@roboticsforall.net"}
  else if (dest_sheet_name === "Curriculum Inactive") 
  {groupEmail = "curricdev@roboticsforall.net"}
 if (groupEmail != "") 
  {

    try 
    {
      
    if (AdminDirectory.Members.hasMember(groupEmail,userEmail).isMember) 
      {
    // SpreadsheetApp.getUi().alert(userEmail + " has been successfully removed from " + groupEmail);
      SpreadsheetApp.getActiveSpreadsheet().toast('User has been successfully removed');
        _msg = "hi"
      } else {
        SpreadsheetApp.getUi().alert("Error: " + userEmail + " is not a member of " + groupEmail);
        _msg = "hi1"
      }

    } catch (err)
    {
      Logger.log(err)

      SpreadsheetApp.getUi().alert("Error: An error occured in trying to update the User's group membership. Please remove " + userEmail + " from " + groupEmail + " manually. The error has been logged in the execution log.");
      _msg = "hello"
    }

  } else {
    SpreadsheetApp.getUi().alert("Please manually make " + userEmail + " inactive.");
    _msg = "hello2"
  }}
      
