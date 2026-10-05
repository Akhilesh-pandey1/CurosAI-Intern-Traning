# 2.3 Arrays & Objects

असली data कभी एक value बन के नहीं आता। वो कई values की **list** बन के आता है — students, marks, tasks — या **नाम लगी चीज़ों के डब्बे** बन के — एक student जिसका एक नाम है, marks हैं, एक city है। Arrays lists रखते हैं, objects नाम लगे डब्बे रखते हैं, और तीन methods — map, filter, find — lists पर रोज़ का ज़्यादातर काम कर देते हैं।

## Arrays — नंबर वाली list

Arrays पिछले page पर एक type के तौर पर देखे थे। अब दो बातें जो रोज़ use होंगी: positions की गिनती **0** से शुरू होती है, और `.length` बताता है अंदर कितने items हैं:

```js
const marks = [78, 92, 85]

console.log(marks[0])
console.log(marks[2])
console.log(marks.length)
```

पहले predict करो: क्या print होगा? `78` पहले — position 0 में पहला item बैठता है। फिर `85` — position 2, दूसरा item नहीं। फिर `3` — तीन items, क्योंकि `.length` गिनती करता है, positions से उसे कोई मतलब नहीं।

Position के रास्ते से item बदल भी सकते हो:

```js
marks[1] = 95
```

## Objects — नाम वाला डब्बा

Array चीज़ें position से ढूँढता है। Object चीज़ें **नाम** से ढूँढता है:

```js
const student = {
  name: "Aisha",
  marks: 78,
  city: "Pune"
}

console.log(student.name)
console.log(student.marks)
```

`student.name` उस value को पढ़ता है जो `name` label पर बैठी है। उसी तरीके से बदलो — `student.marks = 95` — और नया label सिर्फ़ assign करके जुड़ जाता है।

वो shape जो हर जगह मिलेगी — real projects में भी — वो है **objects की list**:

```js
const students = [
  { name: "Aisha", marks: 78 },
  { name: "Rohan", marks: 92 },
  { name: "Meera", marks: 35 }
]

console.log(students[0].name)
```

Predict करो: क्या print होगा? Position 0 में पहला object बैठता है, और `.name` उसका label पढ़ता है — तो `Aisha`।

<VideoSlot link="https://youtu.be/-oVdqCaL3DQ" topic="Arrays and objects video — watch once for the basic idea, do not memorize" />

## map, filter, find — तीन रोज़ वाले methods

तीनों को एक list और एक छोटा function मिलता है, और हर एक का जवाब एक अलग रोज़ वाले सवाल का होता है।

**`map` — हर item की एक नई value दो।** वो हर item पर function चलाता है और **उतनी ही size की नई list** लौटाता है:

```js
const marks = [78, 92, 85]

const bumped = marks.map(function (mark) {
  return mark + 2
})

console.log(bumped)
```

Predict करो: `[80, 94, 87]` — तीन अंदर, तीन बाहर। Original list को कुछ नहीं होता।

**`filter` — सिर्फ़ वही items रखो जो सवाल पास करें।** Function एक true-या-false सवाल है; सिर्फ़ वही items बचते हैं जिनका जवाब true होता है:

```js
const passing = marks.filter(function (mark) {
  return mark >= 40
})

console.log(passing)
```

यहाँ तीनों marks पास होते हैं, तो list पूरी लौटती है। एक mark 35 कर दो और फिर predict करो — अब दो बचेंगे।

**`find` — पहला item दो जो पास हो।** Filter जैसा ही सवाल, पर वो पहले match पर रुक जाता है और **वही एक item** लौटाता है — या `undefined` अगर कोई पास न हो:

```js
const topper = marks.find(function (mark) {
  return mark > 90
})

console.log(topper)
```

कैसे चुनें: हर item बदलना हो → `map`। जो qualify करें वही रखना हो → `filter`। एक item निकालना हो → `find`। पहचानना है, memorize नहीं — तीनों एक ही list में एक ही तरह से चलते हैं।

<VideoSlot link="https://www.youtube.com/watch?v=bAUMuuRH99o" topic="Map, filter and find video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

Module वाला method, अब असली data shapes पर:

1. AI से कहो: "Give me 8 tiny JavaScript examples mixing arrays, objects, lists of objects, and map, filter, find — 2 to 5 lines each."
2. हर example के लिए पहले prediction लिखो — line by line। तीनों methods के लिए **हर item की एक output line** लिखो, कि वो क्यों बचा या क्यों बदला।
3. Browser console में paste करो (`F12` → Console), run करो, मिलाओ।
4. Mismatch हुआ? AI से पूछो "why is the output this?" — फिर अपनी copy में अपने शब्दों में 1–2 lines लिखो, एक छोटे example के साथ।
5. आखिर में examples को मोड़ो — passing mark बदलो, कोई और label पढ़ो, ऐसे सवाल से find चलाओ जिसमें कोई पास न हो — पहले predict, फिर run.

<QuizBlock
  :questions="[
    { question: 'marks है [78, 92, 85]। marks[1] क्या है — और 78 क्यों नहीं?', answer: '92. Positions 0 से शुरू होती हैं, तो position 1 में दूसरा item बैठता है। 78 position 0 पर बैठा है।' },
    { question: 'उस list के लिए marks.length क्या देगा?', answer: '3 — length items की गिनती करता है, positions की तरफ नहीं देखता।' },
    { question: 'Array की जगह object कब चुनना है?', answer: 'जब हर value का एक नाम हो — object label से पढ़ता है, जैसे student.marks, जबकि array position से पढ़ता है, जैसे marks[0]।' },
    { question: 'students objects की list है। पहले student का नाम कैसे पढ़ोगे?', answer: 'students[0].name — पहले position, फिर label.' },
    { question: '[1, 2, 3].map(function (n) { return n * 10 }) — क्या लौटेगा?', answer: '[10, 20, 30] — हर item की एक नई value, तो नई list उतनी ही size की है।' },
    { question: '[12, 45, 8, 67].filter(function (n) { return n > 30 }) — क्या लौटेगा?', answer: '[45, 67] — सिर्फ़ वही items बचते हैं जिनका सवाल true हो; 12 और 8 गिर जाते हैं।' },
    { question: 'find क्या लौटाता है जब कोई item उसका सवाल पास न हो?', answer: 'undefined — वो पहले match पर रुकता है, और match ही न हो तो देने को कुछ नहीं।' },
    { question: 'map और filter दोनों list लौटाते हैं। उनकी size में फर्क क्या है?', answer: 'map हमेशा उतनी ही गिनती लौटाता है — हर input का एक output। filter उतनी ही या कम लौटाता है — items सिर्फ़ हटते हैं, बढ़ते नहीं।' }
  ]"
/>

<PageNextButton />
