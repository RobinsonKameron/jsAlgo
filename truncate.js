/*
Truncate a string (first argument) if it is longer than the given maximum string *length (second argument). Return the truncated string with a '...' ending.
*/
function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num)
  {
  return str.slice(str[0],num-3) + "...";
  }
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);

