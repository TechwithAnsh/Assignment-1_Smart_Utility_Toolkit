const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");

fs.writeFile(fileName, "Hello Node.js\n", (err) => {
  if (err) {
    console.log("Error creating file:", err.message);
    return;
  }

  console.log("File Created");

  
  console.log("Reading File...");

  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error reading file:", err.message);
      return;
    }

    console.log(data);

    
    fs.appendFile(fileName, "Learning FS Module\n", (err) => {
      if (err) {
        console.log("Error updating file:", err.message);
        return;
      }

      console.log("File Updated");

      
      fs.readFile(fileName, "utf8", (err, updatedData) => {
        if (err) {
          console.log("Error reading updated file:", err.message);
          return;
        }

        console.log(updatedData);


        fs.unlink(fileName, (err) => {
          if (err) {
            console.log("Error deleting file:", err.message);
            return;
          }

          console.log("File Deleted");
        });
      });
    });
  });
});
