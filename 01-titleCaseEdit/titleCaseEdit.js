function titleCaseEdit(title) {
  // Insert code here;
    title=title.toLowerCase();
    title=title.split(' ');
  for (var i=0; i<title.length; i++)
    {
      title[i]=title[i].charAt(0).toUpperCase()+title[i].slice(1);
    }
      console.log(title.join(' '));
      return title;
}

// Do not edit this line;
//module.exports = titleCaseEdit;
 titleCase("the cow jumped over the moon");
