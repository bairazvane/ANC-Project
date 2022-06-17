const btn = document.querySelector("#calculate");

let underweight = `<p class="underweight"><span>Risks associated with being underweight:</span>
<br>
<br>
<ul>
<li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li>
<li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone</li>
<li>A decrease in immune function</li>
<li>Growth and development issues, particularly in children and teenagers</li>
<li>Possible reproductive issues for women due to hormonal imbalances that can disrupt the menstrual cycle. Underweight women also have a higher chance of miscarriage in the first trimester</li>
<li>Potential complications as a result of surgery</li>
<li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
<br>
</ul>
In some cases, being underweight can be a sign of some underlying condition or disease such as anorexia nervosa, which has its own risks. Consult your doctor if you think you or someone you know is underweight, particularly if the reason for being underweight does not seem obvious.
</p>`;

let healthy = `There are no risks at your current BMI. <br>
Keep up the good work 💪`;

let overweight = `<p class="overweight"><span>Risks associated with being overweight</span>
<br>
<br>
<ul>
<li>High blood pressure</li>
<li>Higher levels of LDL cholesterol, which is widely considered "bad cholesterol," lower levels of HDL cholesterol, considered to be good cholesterol in moderation, and high levels of triglycerides</li>
<li>Type II diabetes</li>
<li>Coronary heart disease</li>
<li>Stroke</li>
<li>Gallbladder disease</li>
<li>Osteoarthritis, a type of joint disease caused by breakdown of joint cartilage</li>
<li>Sleep apnea and breathing problems</li>
<li>Certain cancers (endometrial, breast, colon, kidney, gallbladder, liver)</li>
<li>Low quality of life</li>
<li>Mental illnesses such as clinical depression, anxiety, and others</li>
<li>Body pains and difficulty with certain physical functions</li>
<li>Generally, an increased risk of mortality compared to those with a healthy BMI</li>
</ul>
<br>
As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI below 25 kg/m2, but ideally should consult their doctor to determine whether or not they need to make any changes to their lifestyle in order to be healthier.
</p>`;

// Alert for empty fields
btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill the Height and Weight fields!");
    return;
  }

  //Conversion of height from cm to m
  height = height / 100;

  //Formula
  let bmiValue = weight / (height * height);
  bmiValue = bmiValue.toFixed(2);

  document.querySelector(".value").innerHTML = bmiValue;

  let status = "";
  let description = document.querySelector(".infoText");

  if (bmiValue < 18.5) {
    status = "Underweight";
    description.innerHTML = underweight;
  } else if (bmiValue >= 18.5 && bmiValue < 25) {
    status = "Healthy";
    description.innerHTML = healthy;
  } else if (bmiValue >= 25 && bmiValue < 30) {
    status = "Overweight";
    description.innerHTML = overweight;
  } else {
    status = "Obese";
    description.innerHTML = overweight;
  }

  document.querySelector("#comment").innerHTML = `You are ${status}`;
});
