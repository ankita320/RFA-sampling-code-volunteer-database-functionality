


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


