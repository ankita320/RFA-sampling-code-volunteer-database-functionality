

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
        SpreadsheetApp.getActiveSpreadsheet().toast('User will be removed');
        msg = userEmail + " can be removed from " + groupEmail + "."
      } else {
      SpreadsheetApp.getUi().alert("Error: " + userEmail + " is not a member of " + groupEmail);
        msg = "⚠️ Error: " + userEmail + " is not a member of " + groupEmail + "."
      }

    } catch (err)
    {
      SpreadsheetApp.getUi().alert("Error: An error occured in trying to update the User's group membership. Please remove " + userEmail + " from " + groupEmail + " manually. The error has been logged in the execution log.");
      msg = userEmail + " can be removed from " + groupEmail + "."
    }

  } else {
    SpreadsheetApp.getUi().alert("Please manually make " + userEmail + " inactive.");
    msg = "Please manually make " + userEmail + " from " + groupEmail + " inactive."
  }

  sendSlack(overseerChannel, `{"text": "${msg}", "post_at": 1657339200}`);

}
/*
