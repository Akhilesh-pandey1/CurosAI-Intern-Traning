# 3.6 More Hooks

React में **10 से ज़्यादा hooks** हैं। पहले तीन जो आपने सीखे — `useState`, `useRef`, `useEffect` — सबसे काम के हैं: आप उन्हें लगभग हर project में देखोगे। यह page अगली कतार रखता है — hooks जो कभी-कभी निकलते हैं। और उनके पार और भी बैठे हैं जो हम अभी नहीं सीख रहे — कल को आप या AI किसी तक पहुँचे, तो उसी दिन देख लो; वो शायद ही कभी दिखते हैं।

## Problem — props पाँच मंज़िल नीचे तक

एक component के पास वो data है जिसकी दूसरे को ज़रूरत है — पर दोनों tree में बहुत दूर बैठे हैं:

```jsx
function App() {
  const user = "Aisha"
  return <Layout user={user} />
}

function Layout({ user }) {
  return <Sidebar user={user} />
}

function Sidebar({ user }) {
  return <UserCard user={user} />
}

function UserCard({ user }) {
  return <p>Hello, {user}</p>
}
```

`user` — `Layout` और `Sidebar` से होकर गुज़रता है, जो उसे कभी use ही नहीं करते। वो बस दरवाज़ा खोले रखते हैं। इस सफ़र को **prop drilling** कहते हैं — और असली app में मंज़िलें गहरी होती हैं।

## useContext — एक value, हर मंज़िल

`useContext` value को एक जगह रख देता है, और नीचे का कोई भी component उसे सीधे पढ़ लेता है — बीच की कोई मंज़िल नहीं:

```jsx
import { createContext, useContext } from "react"

const UserContext = createContext(null)

function App() {
  return (
    <UserContext.Provider value="Aisha">
      <Sidebar />
    </UserContext.Provider>
  )
}

function UserCard() {
  const user = useContext(UserContext)
  return <p>Hello, {user}</p>
}
```

`App` "Aisha" को context में रखता है, और `UserCard` — कई मंज़िल नीचे — उसे सीधे उठा लेता है। `Sidebar` से कोई prop नहीं गुज़रा। Theme के रंग, logged-in user, चुनी हुई भाषा — values जिन्हें एक साथ कई components चाहते हैं — context में आराम से रहती हैं।

<VideoSlot link="https://youtu.be/jIbXtgL0qrg" topic="useContext — watch once" />

## State management — जब context भी कम पड़ जाए

Context एक value बाँटता है। पर बड़े app में state कई जगहों से एक साथ बदलती है — cart, filters, logged-in user, notifications — और context की लंबी chains भी उलझने लगती हैं। इलाज: एक **state management library** — tree के बाहर एक store, जिसे हर component सीधे पढ़ता और लिखता है।

जानने वाला नाम: **Zustand** — छोटा, सीधा, और हमारे बनाए वाले apps के लिए उससे ज़्यादा की ज़रूरत नहीं। इस module में हम इसे आगे सीखेंगे।

## useMemo — मिल लो, आगे बढ़ो

एक line में: **`useMemo`** किसी भारी हिसाब का result याद रखता है, ताकि React उसे हर render पर दोबारा न करे।

यह एक **performance tool** है — धीमी screen की दवा, रोज़ की रोटी नहीं। अभी बस पढ़ो और आगे बढ़ो — module में यह आगे दिखेगा, तब पूरी तरह समझ आ जाएगा।

<VideoSlot link="https://youtu.be/rRiBpNhFgoM" topic="useMemo — watch once" />

## useCallback — मिल लो, आगे बढ़ो

एक line में: **`useCallback`** एक function को renders के बीच याद रखता है, ताकि child component बेवजह re-render न हो।

वही कहानी — एक **performance tool**। अभी पढ़ लो, module में आगे जब दिखे तब पूरी तरह समझो।

<VideoSlot link="https://youtu.be/M1ELG5Wgtdo" topic="useCallback — watch once" />

<QuizBlock
  :questions="[
    { question: 'React में कितने hooks हैं — और कौन से सबसे काम के?', answer: '10 से ज़्यादा। useState, useRef और useEffect वो हैं जो लगभग हर project में दिखते हैं; बाक़ी ज़्यादातर कभी-कभी या शायद ही कभी निकलते हैं।' },
    { question: 'Prop drilling क्या है?', answer: 'एक ही prop को उन components से गुज़ारना जो उसे कभी use नहीं करते — सिर्फ़ इसलिए कि tree में गहरे बैठे एक component तक पहुँच जाए।' },
    { question: 'useContext क्या ठीक करता है?', answer: 'Prop drilling — value एक जगह बैठती है, और नीचे का कोई भी component उसे सीधे पढ़ लेता है, बीच की कोई मंज़िल नहीं।' },
    { question: 'Child component context की value कैसे पढ़ता है?', answer: 'const user = useContext(UserContext) — ऊपर बैठे Provider ने जो रखा था, वही; props का कोई काम नहीं।' },
    { question: 'Theme का रंग, logged-in user, चुनी हुई भाषा — कहाँ सबसे ठीक बैठेंगे?', answer: 'Context में — values जिन्हें tree में बिखरे कई components एक साथ चाहते हैं।' },
    { question: 'useMemo क्या याद रखता है?', answer: 'किसी भारी हिसाब का result — ताकि React उसे हर render पर दोबारा न करे।' },
    { question: 'useCallback क्या याद रखता है?', answer: 'Renders के बीच एक function — ताकि child component बेवजह re-render न हो।' },
    { question: 'क्या useMemo और useCallback आज ही master कर लेने चाहिए?', answer: 'नहीं — ये धीमी screen वाले performance tools हैं। अभी पढ़ो और आगे बढ़ो — module में आगे जब दिखें, तब पूरी तरह समझ आएँगे।' }
  ]"
/>

<PageNextButton />
