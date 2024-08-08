// Description:
//     Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//
//     Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

const remove = (string) => {
  if (string[string.length - 1] === "!") {
    const newString = string.split("");

    newString.pop();

    return newString.join("");
  }

  return string;
};

console.log(remove("!Hi"));
