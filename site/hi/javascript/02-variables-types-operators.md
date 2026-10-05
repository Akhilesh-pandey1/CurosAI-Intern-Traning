# 2.2 Variables, Types & Operators

तीन छोटे ideas पूरे JavaScript को उठा लेते हैं: data कहाँ रहता है (variables), data किस शक्ल में आता है (types), और उसके साथ क्या कर सकते हो (operators)। हमेशा वाला ही rule — पहले predict, फिर run, कुछ भी memorize नहीं।

## Variables — let और const

Variable एक नाम लगा हुआ डब्बा है। Value डालो, डब्बे को एक नाम दो, और जब भी value चाहिए उसी नाम से बुलाओ:

```js
let score = 0
const maxScore = 100
```

दो शब्द, एक फर्क:

- `let` — value बाद में **बदल सकती है**। Scores, counts, user input — कुछ भी जो हिलता-डुलता है।
- `const` — value **हमेशा के लिए fixed** है। Maximums, fixed settings, वो नाम जो कभी नहीं बदलते।

```js
let score = 0
score = 10           // ठीक — let बदल सकता है
score = score + 5    // score अब 15 है

const maxScore = 100
maxScore = 200       // TypeError — const कभी नहीं बदलता
```

Run करने से पहले predict करो: ऊपर कौन सी line फटेगी, और क्यों?

एक पुराना शब्द जो पुराने code में मिलेगा: `var`। वो दोनों काम करता था, पर चौंकाने वाले behavior के साथ। Modern code `let` और `const` कहता है — `var` को पहचानो, कभी लिखो मत।

## Data types — रोज़ के पाँच शक्लें

JavaScript की हर value का एक शक्ल होता है। यही पाँच लगभग सब कुछ cover कर देते हैं जिसे आप छुओगे:

```js
const studentName = "Riya"                 // String  — quotes में text
const age = 21                             // Number  — 21 और 3.14, एक ही type
const isPresent = true                     // Boolean — true या false
const marks = [78, 92, 85]                 // Array   — कई values, order में
const student = { name: "Riya", age: 21 }  // Object  — नाम लगी values साथ में
```

- **Array** — एक डब्बा जो कई values एक line में रखता है। `marks[0]` है 78 — गिनती 0 से शुरू होती है।
- **Object** — एक डब्बे में कई नाम लगी values। `student.age` है 21। जब values आपस में जुड़ी हों तब use करो — एक student, एक order, एक user।

किसी भी value से `typeof` से पूछो वो क्या है:

```js
console.log(typeof age)    // "number"
console.log(typeof marks)  // "object"  — surprise!
```

Run करने से पहले वो दूसरी line predict करो। Arrays `"object"` print होते हैं — JavaScript में arrays *असल में* objects हैं। लगभग हर किसी की prediction एक बार इस पर गलत होती है। Predict करने का यही तो मज़ा है।

## Operators — रोज़ की चालें

**Math:** `+ - * /` और `%` — `%` remainder देता है, तो `10 % 3` है 1.

**Plus की double ज़िंदगी है।** Numbers जुड़ते हैं। पर जैसे ही एक तरफ String आई, वो numbers जोड़ने की जगह text जोड़ने लगता है:

```js
console.log(5 + 5)    // 10
console.log("5" + 5)  // "55" — 10 नहीं!
```

**Comparison — वो सवाल जिसका जवाब true या false होता है:**

- `===` बराबर, `!==` बराबर नहीं
- `>`, `<`, `>=`, `<=`

हमेशा तीन वाला `===` लिखो, दो वाला कभी नहीं। `===` value *और* type दोनों check करता है; `==` चुपचाप बदल-बदल के मिला देता है और असली bugs छुपा देता है।

**Logic — true और false को जोड़ना:**

- `&&` (and) — दोनों तरफ true होना चाहिए
- `||` (or) — कम से कम एक तरफ true
- `!` (not) — पलट देता है

```js
const canEnter = age >= 18 && isPresent   // true और true → true
```

<VideoSlot link="https://youtu.be/xv82yODVXqo" topic="Variables, types and operators video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

Module वाला method, अब असली topics पर:

1. AI से कहो: "Give me 8 tiny JavaScript examples mixing let, const, strings, numbers, arrays, objects and operators — 2 to 4 lines each."
2. हर example के लिए पहले prediction लिखो — कदम-दर-कदम, हर line क्या करती है, और आखिरी output क्या है।
3. Browser console में paste करो (`F12` → Console), run करो, मिलाओ।
4. Mismatch हुआ? AI से पूछो "why is the output this?" — फिर अपनी copy में अपने शब्दों में 1–2 lines लिखो, एक छोटे example के साथ।
5. आखिर में 2–3 examples खुद बनाओ — एक value बदलो, फिर predict करो, फिर run करो। एक number बदल के फिर predict करना concept को अपना बनाने का सबसे तेज़ रास्ता है।

<QuizBlock
  :questions="[
    { question: 'city को const से बनाया, फिर code चलता है city = Delhi. क्या होगा?', answer: 'Error आएगा — const वाले डब्बे कभी नहीं बदलते। अगर value बदलनी चाहिए थी, तो वो let होना चाहिए था।' },
    { question: 'let lives = 3, फिर lives = lives - 1. अब lives में क्या है?', answer: '2. दाईं तरफ पहले चलता है (3 - 1), फिर result वापस डब्बे में जाता है।' },
    { question: 'typeof [4, 8, 15] क्या print करेगा?', answer: 'object — JavaScript में arrays असल में objects हैं। लगभग हर किसी की prediction array होती है और यह एक बार गलत होती है।' },
    { question: 'Text 7 (quotes में) plus number 3 — क्या बनेगा?', answer: '73, 10 नहीं — जैसे ही एक तरफ string आई, + numbers जोड़ने की जगह text जोड़ने लगता है।' },
    { question: '=== क्यों और == कभी क्यों नहीं?', answer: '=== value और type दोनों check करता है। == चुपचाप बदल के मिला देता है — वो text 5 और number 5 को बराबर कह देता है, जो असली bugs छुपा देता है।' },
    { question: 'order में { item: Book, price: 250 } है। सिर्फ़ price कैसे निकालोगे?', answer: 'order.price — dot object में से एक नाम लगी value चुन लाता है।' },
    { question: 'false || true और false && true क्या देंगे?', answer: 'true और false। || को कम से कम एक true तरफ चाहिए; && को दोनों चाहिए।' }
  ]"
/>

<PageNextButton />
