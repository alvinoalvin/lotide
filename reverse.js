let stringArgs = process.argv.splice(2);

const reverse_string = (stringArgs) => {
  stringArgs.forEach(word => {
    let tempString = "";
    for (let i = word.length - 1; i >= 0; i--) {
      tempString += word[i];
    }
    console.log(tempString);
  });
};

reverse_string(stringArgs);