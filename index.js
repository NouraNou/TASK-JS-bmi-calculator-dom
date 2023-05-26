function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });
  const BMI = weight / ((height * height) / 100);
  // You are going to write the code here before the curly braces 👇🏻

  if (wieght <= 18.5) {
    alert("your are underwieght");
  } else if (weight >= 18.5 && weight <= 24.9) {
    alert("you are healthy");
  } else if (weight >= 25 && weight <= 29.9) {
    alert("you are overwieght");
  } else {
    alert("you are obisity");
  }

  if (age >= 19 && age <= 24 && BMI >= 19 && BMI <= 24) {
    alert(" you ar healthy");
  } else if (age >= 25 && age <= 34 && BMI >= 20 && BMI <= 25) {
    alert(" you ar healthy");
  } else if (age >= 35 && age <= 44 && BMI >= 21 && BMI <= 26) {
    alert(" you are healthy");
  } else if (age >= 45 && age <= 54 && BMI >= 22 && BMI <= 27) {
    alert("you are healthy");
  } else if (age >= 55 && age <= 64 && BMI >= 23 && BMI <= 28) {
    alert(" you are healthy");
  } else if (age > 65 && BMI >= 24 && BMI <= 24) {
    alert(" you are healthy");
  } else {
    alert(" you are not healthy");
  }

  alert(BMI);
}
