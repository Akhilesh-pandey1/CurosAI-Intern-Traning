# 2.5 Functions & ES6 Modules

JavaScript अब decide करना और repeat करना जानता है। यह page उसे एक काम **याद रखना** सिखाता है — काम एक बार लिखो, उसे एक नाम दो, और जब भी ज़रूरत हो बुला लो। फिर modules: real projects code को कई files में कैसे बाँटते हैं।

## Functions — काम को नाम दे दो

Function एक recipe है जिसका नाम है। Recipe लिखने से कुछ नहीं बनता — उसे **call** करने से खाना पकता है:

```js
function greetStudent(name) {
  console.log("Hello " + name)
}

greetStudent("Aisha")
greetStudent("Rohan")
```

`greetStudent` एक बार लिखा गया, पर दो बार चला। Brackets में **parameters** रहते हैं — नाम वाले inputs जिनकी recipe को ज़रूरत होती है। यहाँ `name` parameter है, और `"Aisha"` वो argument है जो आपने अंदर भेजा।

ज़्यादातर functions को सिर्फ़ print नहीं करना चाहिए — उन्हें `return` से **value वापस देनी** चाहिए:

```js
function addMarks(first, second) {
  return first + second
}

const total = addMarks(40, 35)
console.log(total)
```

Run करने से पहले predict करो: क्या print होगा? Call body को चलाता है, `return` वापस `75` भेजता है, और call की जगह अब वही value बन जाती है — इसीलिए वो `total` के अंदर उतरती है।

एक फर्क पकड़ के रखो: `console.log` value को *आपको* screen पर दिखाता है। `return` value *code को वापस* सौंपता है ताकि उसे store करके use किया जा सके। दो अलग काम।

और एक prediction वाला जाल: function लिखने से कुछ नहीं होता। उसे चलाता सिर्फ़ call है।

<VideoSlot link="https://youtu.be/a_gwOwkbhZ0" topic="Functions video — watch once for the basic idea, do not memorize" />

## ES6 Modules — code को files में बाँटो

एक विशाल file गंदी हो जाती है। Modules हर file से एक काम करवाते हैं और उसके हिस्से share करने देते हैं — `export` एक हिस्से को file के बाहर रख देता है, `import` उसे दूसरी file में खींच लाता है।

यह एक file में save करो, नाम `mathTools.js`:

```js
export function addMarks(first, second) {
  return first + second
}
```

यह दूसरी file में save करो, नाम `main.js`:

```js
import { addMarks } from "./mathTools.js"

const total = addMarks(40, 35)
console.log(total)
```

Braces वाला नाम exported नाम से मिलना चाहिए — यहाँ `addMarks`। Browser `main.js` से चल के `mathTools.js` तक जाता है, recipe को ले आता है, और call कर देता है।

एक बात जान लो: modules plain console में नहीं चलते। उन्हें आपस में जुड़ी असली files चाहिए — वही तो नीचे वाला hands-on है।

<VideoSlot link="https://youtu.be/wCkHbaLG5cw" topic="ES6 modules video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

Module वाला method, अब दोबारा इस्तेमाल होने वाले काम पर:

1. AI से कहो: "Give me 8 tiny JavaScript examples mixing functions, parameters and return values — 2 to 5 lines each."
2. हर example के लिए पहले prediction लिखो — कदम-दर-कदम। Value का पीछा करो: क्या अंदर गया, क्या बाहर आया, कहाँ उतरा।
3. Browser console में paste करो (`F12` → Console), run करो, मिलाओ।
4. Modules के लिए AI से कहो: "Give me the smallest HTML page with two JS files using export and import." तीनों files बनाओ, HTML में `<script type="module" src="./main.js"></script>` जोड़ो, page खोलो, और console check करो।
5. Mismatch हुआ? AI से पूछो "why is the output this?" — फिर अपनी copy में अपने शब्दों में 1–2 lines लिखो, एक छोटे example के साथ।
6. आखिर में examples मोड़ो — arguments बदलो, function का नाम बदलो, import के नाम को जान-बूझ के तोड़ो और error पढ़ो — पहले predict, फिर run.

<QuizBlock
  :questions="[
    { question: 'Function लिखने से क्या होता है — और उसे असल में चलाता क्या है?', answer: 'लिखने से कुछ नहीं — वो सिर्फ़ काम को नाम देता है। Call ही body को चलाता है, जैसे greetStudent(Aisha) में असली value के साथ।' },
    { question: 'function double(number) { return number * 2 } — फिर const result = double(6)। result क्या है?', answer: '12. Call body चलाता है, return वापस 12 देता है, और call की जगह 12 बन जाती है — जो result में उतरती है।' },
    { question: 'console.log और return में फर्क क्या है?', answer: 'console.log value आपको screen पर दिखाता है। return value code को वापस सौंपता है ताकि उसे store करके use किया जा सके। दो अलग काम।' },
    { question: 'greetStudent(name) में name क्या है — और greetStudent(Aisha) में Aisha क्या है?', answer: 'name parameter है — brackets में बैठा नाम वाला input। Aisha argument है — call के वक़्त अंदर भेजी गई असली value।' },
    { question: 'export और import अलग-अलग क्या करते हैं?', answer: 'export एक हिस्से को file के बाहर रखता है। import उस हिस्से को दूसरी file में खींच लाता है — और braces वाला नाम exported नाम से exactly मिलना चाहिए।' },
    { question: 'Code modules में बाँटना ही क्यों?', answer: 'एक विशाल file गंदी हो जाती है। हर file एक काम करती है, हिस्से pages में दोबारा इस्तेमाल होते हैं, और कोई भी हिस्सा दोबारा ढूँढना आसान रहता है।' },
    { question: 'mathTools.js addMarks export करता है, पर import के braces में addMarks2 लिखा है। क्या होगा?', answer: 'Fail हो जाएगा — braces वाला नाम exported नाम से exactly मिलना चाहिए। addMarks2 कभी export ही नहीं हुआ, तो browser के पास लाने को कुछ है ही नहीं।' }
  ]"
/>

<PageNextButton />
