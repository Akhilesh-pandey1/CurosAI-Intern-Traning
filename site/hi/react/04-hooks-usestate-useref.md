# 3.4 Hooks — useState & useRef

असली apps से पहले एक खाई बाक़ी है। Component एक function है — वो ऊपर से नीचे चलता है, और हर re-render उसे शून्य से दोबारा बनाता है। तो component **याद** कैसे रखता है कुछ भी? जवाब है hooks।

## Hooks exist क्यों करते हैं

Hook एक खास function है जो component को एक ख़ूबी देता है जो वो अकेले पा नहीं सकता:

- `useState` — एक value जिसे component **याद रखता है**। उसे बदलो, और screen update हो जाती है।
- `useRef` — वो भी एक value जिसे component **याद रखता है**। उसे बदलो, और screen वैसी ही रहती है।

`use` वाला नाम क्यों? वही उन्हें hooks के रूप में निशान लगाता है। Hooks का एक rule है: उन्हें component के **सबसे ऊपर** call करो — कभी भी `if` के अंदर, loop में, या किसी और function के अंदर नहीं। React हर hook को उसकी value से call के order से मिलाता है। हर render में वही order, तो कुछ नहीं उलझता।

<VideoSlot link="https://youtu.be/zHoWgJD0jw4" topic="What hooks are — watch once for the basic idea, do not memorize" />

## useState — वो याददाश्त जो screen हिलाती है

```jsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

एक line, दो चीज़ें: `useState(0)` लौटाता है मौजूदा value (`count`) और वो function जो उसे बदलता है (`setCount`)। वो `0` शुरुआती value है।

Click दो काम करता है: value बदलता है, और React को बोलता है "data बदल गया — screen फिर से बनाओ।" आप `<p>` को कभी छूते नहीं। नया `count` अंदर बहता है और screen पीछे-पीछे चलती है — page 3.1 ने यही वादा किया था।

वो एक गलती जो हर कोई एक बार करता है: `count = count + 1` या `count++`। कुछ नहीं होता — setter नहीं चला, तो redraw नहीं हुआ। **State को कभी सीधे नहीं लिखो; हमेशा setter call करो।**

## useRef — useState जैसा, पर screen चुप रहती है

`useRef` बहुत सीधा है। वो वही काम करता है जो `useState` — component के लिए एक value थामे रहता है। फ़र्क़ सिर्फ़ एक:

- `useState` — value बदलो → screen **update** होती है।
- `useRef` — value बदलो → screen **जगह नहीं हिलती**।

Value हमेशा `.current` के अंदर रहती है:

```jsx
import { useRef } from "react"

function QuietCounter() {
  const countRef = useRef(0)

  function handleAddClick() {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  }

  return (
    <div>
      <button onClick={handleAddClick}>Add one</button>
    </div>
  )
}
```

पाँच बार click करो। Console print करता है 1, 2, 3, 4, 5 — और screen पर कुछ नया नहीं। Value बढ़ी, screen चुप रही। यही `useRef` का पूरा idea है।

State या ref? एक सवाल फ़ैसला कर देता है: **क्या इस value के बदलने पर screen को भी बदलना चाहिए?** हाँ — `useState`। नहीं — `useRef`।

<VideoSlot link="https://youtu.be/VlSNiL_x4mo" topic="useRef — element handles and quiet values, watch once" />

## Hands-on — फ़र्क़ महसूस करो

1. useState वाला `Counter` बनाओ। Predict करो: कौन सी ठीक-ठीक line redraw कराती है?
2. useRef वाला ref counter बनाओ। पहले predict करो: click करने पर screen क्या करती है? Console क्या print करता है? Screen की यह चुप्पी *ही* असली सबक़ है।
3. AI से कहो: "5 tiny React examples mixing useState and useRef, one idea each, 5 to 10 lines." हर एक की prediction करो, हर एक run करो, मिलाओ।
4. अब बड़ा सोचो। AI से पूछो: "Where do useState and useRef get used in a big real app like Amazon or Spotify? Give real examples." बदलता हुआ cart total, एक search box, एक video player जो अपना time बिना redraw के जानता है — देखो ये दो hooks रोज़ चलने वाली apps में कहाँ-कहाँ निकलते हैं।
5. अपनी copy में 1–2 lines लिखो: state और ref, अपने शब्दों में, हर एक का एक example।

<QuizBlock
  :questions="[
    { question: 'useState कौन सी problem सुलझाता है?', answer: 'Component function हर render पर ऊपर से नीचे चलता है, तो वो सब भूल जाता है। useState उसे एक value देता है जो renders के बीच याद रहती है।' },
    { question: 'const [count, setCount] = useState(0) आपको क्या देता है?', answer: 'एक जोड़ी — मौजूदा value count और उसका setter setCount। वो 0 शुरुआती value है।' },
    { question: 'Button click हुआ और count बढ़ना चाहिए। count = count + 1 क्यों नहीं लिखते?', answer: 'कुछ नहीं होता — setter नहीं चला, तो redraw नहीं हुआ। हमेशा setter call करो: setCount(count + 1)।' },
    { question: 'setCount चलने पर React के अंदर क्या होता है?', answer: 'दो चीज़ें — value बदलती है और React component दोबारा बनाता है, तो नया count बिना आप किसी element को छुए screen तक पहुँच जाता है।' },
    { question: 'Hooks कहाँ call करने का एक rule क्या है?', answer: 'Component के सबसे ऊपर — कभी if के अंदर, loop में, या nested function में नहीं। React को हर render में वही call order चाहिए।' },
    { question: 'useRef लगभग useState जैसा ही है — फ़र्क़ कहाँ है?', answer: 'दोनों renders के बीच एक value थामे रहते हैं। फ़र्क़: ref बदलने से screen दोबारा नहीं बनती। Value .current में रहती है।' },
    { question: 'एक value बदलती है — क्या screen को भी बदलना चाहिए? Hook कैसे चुनोगे?', answer: 'हाँ, screen पीछे-पीछे चले — useState। नहीं, चुपचाप रहे — useRef।' }
  ]"
/>

<PageNextButton />
