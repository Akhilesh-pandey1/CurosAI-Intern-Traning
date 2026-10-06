# 3.3 Conditional Rendering & Lists

Screen हमेशा एक जैसी नहीं रहती। Logged in हो या नहीं, loading चल रही हो या हो गई, list खाली हो या दस items। JSX में `if` नहीं है — पर JavaScript खुद आपको तीन साफ़ तरीके देता है चुनने के लिए कि क्या दिखे।

## तीन तरीके — कभी-कभी दिखाओ

**1. `&&` — दिखाओ या कुछ मत दिखाओ।** बाईं तरफ सच है, तो दाईं तरफ render होता है:

```jsx
{hasUnread && <p className="badge">New messages</p>}
```

**2. Ternary — ठीक दो शक्लें।** एक condition, यह या वो:

```jsx
{isLoggedIn ? <Dashboard /> : <LoginPage />}
```

**3. सादा `if` — return से पहले।** बड़े branches के लिए फ़ैसला पहले करो और अलग-अलग JSX return करो:

```jsx
function ScoreCard({ marks }) {
  if (marks >= 40) {
    return <p className="pass">Passed with {marks}</p>
  }
  return <p className="fail">Try again — {marks}</p>
}
```

तीनों page 2.4 वाली conditions हैं, JSX के कपड़ों में। एक prediction वाला जाल: `&&` की बाईं तरफ number — जैसे `{items.length && <p>items</p>}` — list खाली होने पर screen पर `0` print कर देता है। `0` false नहीं होता, तो React उसे print कर देता है। Ternary में ऐसा कोई चौंकाव नहीं।

<VideoSlot link="https://youtu.be/96DGjqlAIxs" topic="Conditional rendering and rendering lists — one video for both, watch once" />

## Lists — loops नहीं, map

React में screen बनाने के लिए आप कभी `for` loop नहीं लिखते। आप array को JSX में **map** करते हो — 2.3 वाला `map`, इस बार tags के साथ:

```jsx
const students = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Rohan" },
  { id: 3, name: "Sara" }
]

function StudentList() {
  return (
    <ul>
      {students.map(function (student) {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  )
}
```

`map` हर object को एक `<li>` बना देता है, और पूरी list `<ul>` के अंदर उतर जाती है। Array बदलो, save करो — screen खुद दोबारा बन जाती है। DOM का code कभी नहीं।

**`key`** React का तरीका है हर item को renders के बीच पहचानने का — यह roll number है, seat की जगह नहीं। हर item को data से मिला एक stable `id` दो। List बदलती है तो React items को key से मिलाता है और सिर्फ़ उसे हाथ लगाता है जो सच में बदला। Key छोड़ दो, तो React console में warning देता है — एक warning जो आपके पूरे React जीवन आपका पीछा करेगी।

## Hands-on — एक list जो अपना हाल जानती है

1. AI से कहो: "A React component that maps an array of 5 task objects (id, title, done) to a list, with a strikethrough class on the done ones."
2. Paste करने से पहले screen की prediction लिखो। Run करो, मिलाओ।
3. Array में एक task जोड़ो और एक `done` को `true` करो। Keys की वजह से React ठीक उन्हीं rows को हिलाता और काटता है — बाक़ी कुछ भी नहीं हिलता।
4. "All done 🎉" वाली line सिर्फ़ तब दिखाओ जब हर task done हो — `&&` या ternary में से एक चुनो, और पहले predict करो कि तुम्हारा चुनाव यहाँ सुरक्षित क्यों है।
5. `<li>` से `key` हटाओ, save करो, और console वाली warning पढ़ो। फिर उसे वापस लगाओ — वो warning ignore करने से कभी ठीक नहीं होती।

<QuizBlock
  :questions="[
    { question: 'hasUnread false होने पर {hasUnread && <p>New</p>} क्या दिखाता है?', answer: 'कुछ नहीं — && दाईं तरफ सिर्फ़ तब render करता है जब बाईं तरफ सच हो, तो false का मतलब बिल्कुल कोई output नहीं।' },
    { question: 'Logged-in users को Dashboard दिखे, बाक़ी सबको LoginPage। कौन सा tool, और वो कैसा दिखेगा?', answer: 'Ternary — {isLoggedIn ? <Dashboard /> : <LoginPage />} — एक condition, ठीक दो शक्लें।' },
    { question: 'JSX के साथ सादा if कब खींचते हो?', answer: 'बड़े branches के लिए — return से पहले फ़ैसला करो, और हर branch अपना JSX return करे।' },
    { question: '{items.length && <p>items</p>} खाली list पर 0 print कर देता है। क्यों?', answer: 'खाली list से items.length 0 हो जाता है। && की बाईं तरफ false नहीं है, तो React वो 0 खुद print कर देता है — ternary में ऐसा चौंकाव नहीं।' },
    { question: 'Students के array को screen की list में कैसे बदलो?', answer: 'उसे JSX में map करो — students.map हर student का एक <li> देता है, जो <ul> के अंदर उतरता है। कोई for loop नहीं, कोई DOM code नहीं।' },
    { question: 'List में key किस काम आती है?', answer: 'React उससे हर item को renders के बीच पहचानता है — roll number की तरह — ताकि list बदलने पर वो सिर्फ़ उसे छुए जो सच में बदला।' },
    { question: 'अच्छी key कौन सी होती है?', answer: 'Data से ही मिला एक stable id — roll number, seat की जगह नहीं जो list बदलने पर खिसक जाती है।' },
    { question: 'Li से key हटाओ और save करो। क्या होगा?', answer: 'React console में warning देता है — और वो warning key वापस लगाने तक आपके पूरे React जीवन पीछा करती है।' }
  ]"
/>

<PageNextButton />
