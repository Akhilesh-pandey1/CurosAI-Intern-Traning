# 2.4 Conditions & Loops

दो ideas एक page को script से दिमाग़ बना देते हैं: **conditions** code को decide करने लगाती हैं, **loops** code को repeat करने लगाते हैं। वही method — पहले predict, फिर run, कुछ भी memorize नहीं।

## Conditions — if, else

Condition एक सवाल है जिसका जवाब true या false होता है — बिल्कुल वही जो variables page के comparison operators ने दिए थे। अंदर वाला code सिर्फ़ तब चलता है जब जवाब true हो:

```js
const marks = 72

if (marks >= 40) {
  console.log("Pass")
} else {
  console.log("Fail")
}
```

`marks >= 40` सवाल पूछता है। 72 उसे true कर देता है, तो "Pass" print होता है और `else` block छूट जाता है।

दो से ज़्यादा रास्ते? उन्हें `else if` से chain करो — JavaScript हर सवाल order में पूछता है और **पहले true वाले पर रुक जाता है**:

```js
if (marks >= 80) {
  console.log("Grade A")
} else if (marks >= 60) {
  console.log("Grade B")
} else {
  console.log("Keep trying")
}
```

Run से पहले predict करो: marks हैं 72 — कौन सा block print होगा, और "Grade A" क्यों नहीं?

सवालों को logic operators से जोड़ भी सकते हो — `&&` को दोनों तरफ true चाहिए, `||` को एक:

```js
if (age >= 18 && hasTicket) {
  console.log("You may enter")
}
```

<VideoSlot link="https://www.youtube.com/watch?v=1R4NGtsj7hw" topic="If-else video — watch once for the basic idea, do not memorize" />

## Loops — for, for...of, forEach

"hello" पाँच बार print करने के लिए line पाँच बार लिखना code नहीं — वो बस typing है। Loop काम आपके लिए repeat कर देता है।

**`for` — गिनती वाला loop।** Brackets में तीन हिस्से: कहाँ से शुरू, कब तक चलते रहना है, और हर round के बाद वाला कदम:

```js
for (let i = 1; i <= 5; i = i + 1) {
  console.log(i)
}
```

Run से पहले round-दर-round predict करो: क्या print होगा? (`i = i + 1` का छोटा रूप `i++` है — दोनों दिखेंगे।)

**`for...of` — list में से गुज़रना।** ना गिनती, ना index — हर value का एक round:

```js
const marks = [78, 92, 85]

for (const mark of marks) {
  console.log(mark)
}
```

**`forEach` — list का अपना बना-बनाया loop।** वही चाल, पर आप list के हाथ एक छोटा function दे देते हो जो हर value पर चलेगा:

```js
marks.forEach(function (mark) {
  console.log(mark)
})
```

कैसे चुनें: गिनती चाहिए या rounds की जानी-पहचानी संख्या → `for`। List में से गुज़रना है → `for...of` या `forEach`। यह पहचानना है, memorize नहीं — ऊपर के तीनों prints वही एक जैसी चाल चलते हैं।

Predict करते वक़्त एक चेतावनी: अगर चलते-रहने वाला सवाल कभी false न हो, तो loop कभी खत्म नहीं होता — page जाम हो जाता है। वही infinite loop है, और इस page की वही एक classic गलती है।

<VideoSlot link="https://www.youtube.com/watch?v=y32sWmu-RI4" topic="Loops video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

Module वाला method, अब decisions और repeats पर:

1. AI से कहो: "Give me 8 tiny JavaScript examples mixing if, else if, else, for loops, for...of and forEach — 2 to 5 lines each."
2. हर example के लिए पहले prediction लिखो — कदम-दर-कदम। Loop के लिए **हर round की एक line** लिखो: round 1 यह print करेगा, round 2 वह.
3. Browser console में paste करो (`F12` → Console), run करो, मिलाओ।
4. Mismatch हुआ? AI से पूछो "why is the output this?" — फिर अपनी copy में अपने शब्दों में 1–2 lines लिखो, एक छोटे example के साथ।
5. आखिर में examples खुद मोड़ो — marks बदलो, loop कहाँ रुकता है बदलो — run से पहले फिर predict करो, और देखो आपका trace टिकता भी है या नहीं।

<QuizBlock
  :questions="[
    { question: 'temperature है 35। Chain है: if (temperature > 40) Very hot print करे, else if (temperature > 30) Warm print करे, else Pleasant print करे। क्या print होगा?', answer: 'Warm। पहला सवाल फेल होता है, दूसरा true होता है — और chain वहीं रुक जाती है, else तक पहुँचती ही नहीं।' },
    { question: 'for (let count = 2; count <= 6; count = count + 2) — क्या print होगा?', answer: '2, फिर 4, फिर 6. 2 से शुरू, हर round में दो का छलाँग, और जैसे ही सवाल false हुआ, रुक गया।' },
    { question: 'Loop का सवाल कभी false न हो, तो क्या होगा?', answer: 'Infinite loop — rounds कभी खत्म नहीं होंगे और page जाम हो जाएगा। इस page की वही classic गलती है।' },
    { question: 'List में तीन नाम हैं। for...of कितने rounds चलेगा?', answer: 'तीन — हर value का एक round. List decide करती है; गिनती की ज़रूरत नहीं।' },
    { question: 'for...of की जगह plain for loop कब चुनना है?', answer: 'जब गिनती या rounds की जानी-पहचानी संख्या चाहिए — for...of सिर्फ़ values पर चलता है, गिनता नहीं।' },
    { question: 'isRaining false है, hasUmbrella true है। क्या if (isRaining || hasUmbrella) के अंदर वाला block चलेगा?', answer: 'हाँ। || को सिर्फ़ एक true तरफ चाहिए — एक true काफ़ी है।' },
    { question: 'else if के सवालों का order क्यों मायने रखता है?', answer: 'Chain पहले true वाले सवाल पर रुक जाती है। पहले कोई ढीला check आ गया, तो वो सब कुछ पकड़ लेगा, और उसके बाद के strict checks कभी चलेंगे ही नहीं।' }
  ]"
/>

<PageNextButton />
