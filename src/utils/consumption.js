const calcule = (genderType, weight, height, age) => {
  console.log(genderType);
  return 10 * weight + 6.25 * height - 5 * age + genderType;
};

const consumption = (habitData, baseData) => {
  console.log("habidata:", habitData);
  console.log("basedata:", baseData);
  let { weight, height, goal } = habitData;
  let { age, gender } = baseData;
  weight = Number(weight);
  height = Number(height);
  goal = Number(goal);
  age = Number(age);
  let genderType = gender.toLowerCase() === "hombre" ? 5 : -161;

  let cb = calcule(genderType, weight, height, age);
  let cd = calcule(genderType, goal, height, age);
  console.log(cb, cd);
  return { cb, cd };
};

export default consumption;
