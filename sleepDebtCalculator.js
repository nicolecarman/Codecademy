// This is a sleep debt calculator!
// Made my Nicole Carman on Codecademy



// My actual sleep hours for the past week
function getSleepHours(day) {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 4;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 7;
  } else if (day === "saturday") {
    return 9;
  } else if (day === "sunday") {
    return 5;
  } else {
    return "Error.";
  }
}

// Total actual sleep for the week
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};



// My ideal amount of sleep
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};



// Calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got "(actualSleepHours - idealSleepHours) +
        " hour(s) more sleep than you needed."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. You should get some rest."
    );
  }
};



// Start the program
calculateSleepDebt();



