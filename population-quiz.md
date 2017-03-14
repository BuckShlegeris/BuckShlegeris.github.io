---
layout: post
title:  "Population quiz"
date:   ""
---

<script src="/quiz.js"></script>
<script src="/jquery.js"></script>
<link rel="stylesheet" href="/quiz.css"/>

This is a quiz about populations of all the nations whose populations are larger than about 50 million!

Select the number closest to the population of the nation. The options are selected by randomly picking a roughly linear sequence of five elements where one of them is close to the real population.

The goal of this quiz is to roughly know the populations of all the large countries.

<div id="target"/>
<script>
var data = {
"Egypt": 93383574,
"Germany": 80682351,
"United Kingdom":  65111143,
"India": 1326801576,
"Italy": 59801004,
"Philippines": 102250133,
"Turkey":  79622062,
  "China": 1382323332,
"Bangladesh":  162910864,
"Mexico":  128632004,
"Ethiopia":  101853268,
"Thailand":  68146609,
"Myanmar": 54363426,
"France":  64668129,
"United States": 324118787,
"Russia":  143439832,
"Democratic Republic of the Congo":  79722624,
"Japan": 126323715,
"Tanzania": 55155473,
"South Africa":  54978907,
"Brazil":  209567920,
"South Korea": 50503933,
"Vietnam": 94444200,
"Indonesia": 260581100,
"Pakistan":  192826502,
"Iran":  80043146,
"Nigeria": 186987563
};

  $("#target").html(Object.keys(data).map((x, idx) => "<div id='target"+idx+"' />").join("\n"));

  var multiples = [2 + Math.random(), 4 + Math.random(), 5 + Math.random(), 8 + Math.random(), 11 + Math.random()]

  var MILLION = 1000000;

  function renderNumber(n) {
    return Math.round(n / MILLION) + " million"
  }

  Object.keys(data).forEach((x, idx) => {
    var answer = data[x];
    var error = 0.95 + Math.random() * 0.1;

    var offset = (Math.random() * 5) | 0;

    var baseAnswer = answer / multiples[offset];

    var allAnswers = multiples.map((x) =>
      renderNumber(x * baseAnswer * error));

    console.log(x, idx);
    renderQuizItem("target" + idx, {
      question: "Population of " + x,
      answers: allAnswers,
      correctAnswer: renderNumber(answer * error),
      afterText: renderNumber(answer)
    });
  })

</script>

Wow!

