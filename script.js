function palindrome(str) {
  
    // Variable to store the parameter string with no alphanumeric characters
    let filteredString = str.replace(/[^a-z0-9+]+/gi, "");
  
    // Variable to convert and store the original string with all lower case letters
    let originalString = filteredString.toLowerCase();
  
    // Variable to convert and store the lowercase string as an array
    let originalStringArray = originalString.split("");
  
    // Variable to reverse and store the original string as an array
    let reversedStringArray = originalStringArray.reverse();
  
    // Variable to convert and store the reversed array back into a string
    let reversedString = reversedStringArray.join("");
  
    // If else condition to test if the original string and reversed version are the same
    if (originalString == reversedString){
      return true;
    }else{
      return false;
    }
  }
  
  palindrome("eye");