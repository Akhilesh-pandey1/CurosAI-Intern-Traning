# 3.2 Components & Props

पिछले page पर आपने एक file edit की और उसे बदलते देखा। अब मिलिए उन दो हिस्सों से जिनसे React की हर screen बनती है: **JSX** — वो HTML-जैसा code जिसमें screen लिखी जाती है — और **components** — छोटे नाम वाले टुकड़े जो एक बार लिखो और हर जगह reuse करो।

## JSX actually है क्या

React के pages **JSX** में लिखे जाते हैं — JavaScript जो HTML जैसा दिखता है:

```jsx
const city = "Pune"

function App() {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <p>City: {city}</p>
    </div>
  )
}
```

यह HTML जैसा दिखता है, पर HTML नहीं है। तीन फ़र्क़ तुरंत पकड़ो:

- **Curly braces `{}`** markup के अंदर कोई भी JavaScript गिरा देते हैं — एक variable, एक हिसाब, एक function call। जो निकले, वही वहाँ print होता है।
- **`class` की जगह `className`** — क्योंकि यह JavaScript है, और वहाँ `class` एक reserved word है।
- **सिर्फ़ एक parent** — component एक ही wrapping element लौटाता है (या खाली `<>...</>`), दो अलग-अलग tags कभी साथ-साथ नहीं।

## Component एक function है जो JSX लौटाता है

```jsx
function Greeting() {
  return <h2>Hello, intern!</h2>
}

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}
```

`Greeting` एक सादा JavaScript function है। सिर्फ़ दो rules: नाम **बड़े अक्षर** से शुरू हो (छोटे अक्षर का मतलब React के लिए "HTML tag" है), और वो JSX लौटाता है। `<Greeting />` उसे call करता है — तीन calls, तीन hello, एक recipe। वही सौदा जो 2.5 के functions में था: एक बार लिखो, कहीं भी call करो।

असली pages इनका एक tree होते हैं: `App` के अंदर `Navbar`, `Sidebar`, `PasswordList` — और `PasswordList` के अंदर कई `PasswordRow`। बड़ी screen, कई छोटे टुकड़े — हर टुकड़ा ढूँढना और ठीक करना आसान।

<VideoSlot link="https://youtu.be/S4VH8hddg8c" topic="Components, props and JSX — one video for all three, watch once" />

## Props — अंदर भेजा गया data

हमेशा "intern" कहने वाला `Greeting` एक photocopy है। **Props** component में data भेजते हैं — tag पर attributes की तरह:

```jsx
<UserCard name="Aisha" batch={6} />
<UserCard name="Rohan" batch={7} />
```

Component एक object पाता है जिसका नाम `props` है:

```jsx
function UserCard(props) {
  return <div>{props.name} — batch {props.batch}</div>
}
```

ज़्यादातर लोग उसे brackets में ही खोल लेते हैं — वही data, पढ़ने में साफ़:

```jsx
function UserCard({ name, batch }) {
  return <div>{name} — batch {batch}</div>
}
```

Text quotes में जाता है, numbers और variables braces में। और एक क़ानून: **props read-only हैं।** Component अपने props कभी नहीं बदलता — data उस parent का है जिसने भेजा। Data बदलने का अपना अलग tool page 3.4 पर आता है।

## Hands-on — एक card, तीन लोग

1. AI से एक `UserCard` component माँगो जो `name`, `role`, और `city` ले और उन्हें एक छोटे card में दिखाए।
2. उसे तीन अलग लोगों के साथ तीन बार render करो। एक component, तीन cards — यही reuse है जिसके लिए React exist करता है।
3. Predict करो, फिर check करो: अगर `city` सिर्फ़ दो को भेजो तो क्या होगा? खाली जगह ढूँढो — missing prop बस print नहीं होता।
4. `UserCard` के अंदर `name` बदलने की कोशिश करो। Rule फिर से पढ़ो — props read-only हैं, और React warning देने में बिल्कुल नहीं झिझकता।

<QuizBlock
  :questions="[
    { question: 'एक line में React component क्या है?', answer: 'एक सादा JavaScript function जो JSX लौटाता है। नाम बड़े अक्षर से शुरू होता है, और <Greeting /> लिखना ही उसे call करना है।' },
    { question: 'Component का नाम बड़े अक्षर से क्यों शुरू होना चाहिए?', answer: 'छोटे अक्षर का मतलब React के लिए सादा HTML tag है — बड़ा अक्षर ही है जिससे React आपके component को असली tag से अलग पहचानता है।' },
    { question: 'UserCard tag पर name quotes में जाता है पर batch braces में — क्यों?', answer: 'Quotes text रखते हैं। Braces का मतलब है यह JavaScript है — batch={6} number 6 भेजता है, text 6 नहीं।' },
    { question: 'Component भेजा गया data कैसे पाता है?', answer: 'props नाम के एक object के रूप में — props.name, props.batch — या brackets में ही खोल के: function UserCard({ name, batch })।' },
    { question: 'क्या UserCard अपना name prop बदल सकता है? क्यों नहीं?', answer: 'नहीं — props read-only हैं। Data उस parent का है जिसने भेजा; child सिर्फ़ दिखाता है।' },
    { question: 'JSX में class की जगह className क्यों?', answer: 'JSX JavaScript है, और वहाँ class एक reserved word है — इसलिए attribute का नाम className है।' },
    { question: 'JSX का one-parent rule क्या है?', answer: 'Component एक ही wrapping element लौटाता है — या खाली <>...</> — दो अलग-अलग tags कभी साथ-साथ नहीं।' }
  ]"
/>

<PageNextButton />
