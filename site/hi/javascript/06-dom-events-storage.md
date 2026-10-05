# 2.6 DOM, Events & Storage

अब तक आपका code console में रहता था — चलता, print करता, और ग़ायब हो जाता। यह page JavaScript को असली page से जोड़ता है: screen पर जो है उसे पढ़ना और बदलना (**DOM**), user कुछ करे तो react करना (**events**), और page बंद होने के बाद भी चीज़ें याद रखना (**storage**)।

## DOM — page जीवित objects के रूप में

Browser आपका HTML load करते ही **DOM** बनाता है — जीवित objects का एक tree, हर tag का एक object। Object बदलो और screen उसी पल बदल जाती है। अंदर घुसने का रास्ता है `document`:

```html
<button id="partyButton">Celebrate</button>
<p id="message">Waiting...</p>
```

```js
const message = document.querySelector("#message")

message.textContent = "You made it!"
message.style.color = "green"
```

`document.querySelector` पहला matching element ढूँढता है — यहाँ `message` id वाला `<p>`। फिर `textContent` उसका text बदल देता है और `style.color` रंग देता है। Run से पहले predict करो: waiting text किसी के कुछ click करने से पहले ही ग़ायब — code ऊपर से नीचे चला, किसी event की ज़रूरत नहीं पड़ी।

<VideoSlot link="https://youtu.be/hRaDYCHqFQQ" topic="DOM video — watch once for the basic idea, do not memorize" />

## Events — इंतज़ार करने वाला code

ऊपर वाला code तुरंत चल गया। ज़्यादातर देर तक आप code को user का **इंतज़ार** करवाना चाहते हो — एक click, एक टाइप हुआ letter, एक submit हुआ form। वही event है, और `addEventListener` ही इंतज़ार करने का तरीका है:

```js
const partyButton = document.querySelector("#partyButton")

partyButton.addEventListener("click", function () {
  message.textContent = "Party started!"
})
```

इसे एक sentence की तरह पढ़ो: *partyButton पर, जब click हो, तो यह function चलाओ।* Function वहीं बैठा कुछ करते-करते click का इंतज़ार करता है — फिर चल जाता है। Predict करो: page खुलने के उसी पल screen पर क्या है? कुछ नहीं बदला — काम सिर्फ़ click ही शुरू करता है।

वही एक shape हर interaction को cover करती है — `"input"` हर टाइप हुए letter पर चलता है, `"submit"` form के बाहर जाते ही। एक सीखो, तो सब पहचान लोगे।

<VideoSlot link="https://youtu.be/Y3f_ih-2jGk" topic="Events video — watch once for the basic idea, do not memorize" />

## localStorage — browser को याद रहता है

Variables page बंद होते ही मर जाते हैं। `localStorage` browser की छोटी drawer है जो **refresh और browser बंद करने तक भी बची रहती है**:

```js
localStorage.setItem("city", "Pune")
console.log(localStorage.getItem("city"))
```

Predict करो, फिर इसे दो बार चलाओ — एक बार normal, एक बार page refresh कर के। `"Pune"` दोनों बार वापस आएगी। यही तो पूरा point है: drawer में गया चीज़ वहीं टिकी रहती है।

Predict करने के लिए दो बातें। जो key कभी save ही नहीं हुई वो `null` लौटाती है — error नहीं, बस खाली। और drawer में **सिर्फ़ strings रहती हैं** — number, array या object के लिए पहले उसे string बनाओ और पढ़ते वक़्त वापस बदलो:

```js
const marks = [78, 92, 85]

localStorage.setItem("savedMarks", JSON.stringify(marks))
console.log(JSON.parse(localStorage.getItem("savedMarks")))
```

<VideoSlot link="https://www.youtube.com/watch?v=A98SPz5XLwY" topic="localStorage video — watch once for the basic idea, do not memorize" />

## sessionStorage — वही drawer, पर tab भूल जाता है

ठीक इसके पास एक और drawer बैठी है: `sessionStorage`। वही calls — `setItem`, `getItem` — पर उसकी हर चीज़ tab बंद होते ही मर जाती है:

```js
sessionStorage.setItem("draft", "Half written message")
console.log(sessionStorage.getItem("draft"))
```

कैसे चुनें: क्या data कल तक बचना चाहिए? → `localStorage`। क्या वो tab के साथ ग़ायब होना चाहिए? → `sessionStorage`।

<VideoSlot link="https://www.youtube.com/watch?v=rfSJeox61vA" topic="sessionStorage video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

DOM को bare console नहीं, एक असली page चाहिए — इसलिए यह hands-on एक page बनाता है:

1. AI से कहो: "Give me the smallest HTML page with a button and a paragraph, plus JavaScript that changes the paragraph text when the button is clicked."
2. दोनों files बनाओ, HTML खोलो, और click करने से पहले predict करो: paragraph अभी क्या कहता है, और एक click के बाद क्या?
3. Click करो और मिलाओ। फिर इसे मोड़ो — text कुछ और कर दो, click पर color भी बदलवाओ, दूसरा button जोड़ो — हर बार पहले predict.
4. `localStorage.setItem("clicks", ...)` जोड़ो ताकि page याद रखे आपने कितनी बार click किया — refresh करो और देखो count बचता है या नहीं।
5. वही save `sessionStorage` पर बदलो — refresh करो और उसे वहीं देखो, फिर tab बंद करो, page दोबारा खोलो, और उसे ग़ायब होते देखो।
6. AI से events और दोनों storages को मिला के 4 छोटे examples और माँगो — predict, run, compare, और surprises अपनी copy में नोट करो।

<QuizBlock
  :questions="[
    { question: 'DOM क्या है?', answer: 'जीवित objects का वह tree जो browser आपके HTML से बनाता है। JavaScript से object बदलो, तो screen उसी पल बदल जाती है।' },
    { question: 'document.querySelector क्या चुनता है — और कई match हों तो कौन सा?', answer: 'Selector से match होने वाला पहला element — जैसे आपने जो tag या id भेजा। एक ही match, हमेशा पहला।' },
    { question: 'addEventListener के अंदर वाला function कब चलता है — तुरंत या बाद में?', answer: 'बाद में — सिर्फ़ तब जब event सच में घटे। Page load करने पर कुछ नहीं चलता; click ही function चलाता है।' },
    { question: 'Form submit होते ही react करना है। कौन से event का नाम सुनोगे?', answer: 'submit — click जैसी ही shape, बस अलग पल। input हर टाइप हुए letter पर चलता है, submit form के बाहर जाते ही।' },
    { question: 'city को localStorage.setItem से save किया, फिर browser बंद कर के page दोबारा खोला। क्या वो अभी भी वहाँ है?', answer: 'हाँ — localStorage refresh और browser बंद करने तक बचा रहता है। यही तो उसका पूरा point है।' },
    { question: 'localStorage.getItem उस key के लिए क्या लौटाता है जो कभी save ही नहीं हुई?', answer: 'null — error नहीं, बस खाली। जहाँ save होना possible न हो, वहाँ यही उम्मीद रखो।' },
    { question: 'marks array को save करने से पहले JSON.stringify में क्यों लपेटते हैं?', answer: 'Storage में सिर्फ़ strings रहती हैं। stringify array को string बना देता है, और JSON.parse पढ़ते वक़्त उसे वापस असली array बना देता है।' },
    { question: 'sessionStorage और localStorage में फर्क क्या है?', answer: 'वही calls, अलग उम्र — localStorage refresh और browser बंद करने तक बचता है, sessionStorage tab बंद होते ही मर जाता है।' },
    { question: 'आधा लिखा हुआ message user के tab बंद करते ही ग़ायब होना चाहिए। कौन सी storage चुनोगे?', answer: 'sessionStorage — वो उतनी ही जीती है जितना tab। जो कल तक बचना चाहिए, वो localStorage में जाता है।' }
  ]"
/>

<PageNextButton />
