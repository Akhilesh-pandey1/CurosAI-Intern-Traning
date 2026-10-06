# 3.9 npm Packages We Use

अब npm की असली ताक़त देखो: एक app को चाहिए लगभग सब कुछ पहले से एक package के रूप में मौजूद है। Time सँभालना, charts, dashboards, forms, WhatsApp जैसी connectivities — लगभग हर use case के लिए किसी ने एक library बना और जाँच के रखी है, और एक command उसे अंदर ले आती है। आप शायद ही कभी शून्य से शुरू करते हो — अपने use case के लिए चुनो, install करो, use करो।

लगभग हर React project इनमें से दो तक पहुँचता है। आज दोनों से मिलो।

## आदत — बनाने से पहले पूछो

इसे हर नए project या नई feature पर एक आदत बना लो। AI से दो सवाल:

- "Can you make this more flexible, faster, or with less code?"
- "Is a famous library already present for this?"

इस तरह आप पहिया कभी दोबारा नहीं बनाते — आप सिर्फ़ वो बनाते हो जो आपके project को सच में चाहिए। Install से पहले एक जाँच: **मशहूर** packages ही चुनो। मशहूर का मतलब — बहुत users और जीवित maintenance। छोटे, अनजान packages में security की problem छुप सकती है — हमारे लिए वो जुआ नहीं।

## Zustand — state का store

Page 3.6 ने वादा किया था: "Zustand हम इस module में आगे सीखेंगे।" वो आगे यही है। **Zustand** shared state को component tree के बाहर एक store में रखता है, और कोई भी component — कितनी भी गहराई पर — उसे सीधे पढ़ता और बदलता है:

```jsx
import { create } from "zustand"

const useUserStore = create((set) => ({
  user: "Aisha",
  setUser: (newUser) => set({ user: newUser })
}))

function UserCard() {
  const user = useUserStore((state) => state.user)
  return <p>Hello, {user}</p>
}
```

इसे एक बार धीरे पढ़ो: `create` store बनाता है — सादा state plus एक update function। कोई भी component उस hook को call करता है और अपना चाहा हिस्सा नाम देता है। `user` बदलो, और सिर्फ़ वही components redraw होते हैं जो `user` पढ़ते हैं।

**यह useContext से बेहतर क्यों** (page 3.6):

- **कोई Provider wrapper नहीं** — context को पूरे app के चारों ओर `<UserContext.Provider>` चाहिए; Zustand को कुछ नहीं चाहिए।
- **Components सिर्फ़ अपना हिस्सा लेते हैं** — Provider के नीचे value बदलने पर नीचे का हर component redraw होता है। Zustand में component `user` माँगता है और सिर्फ़ `user` — एक छोटा बदलाव, कुछ छोटे redraws।

<VideoSlot link="https://youtu.be/KCr-UNsM3vA" topic="Zustand — the state store — watch once" />

## Axios — fetch, कम मेहनत में

वही काम जो fetch 2.7 में करता था — server को call करो, data लो। आपने उसे 3.7 के hands-on में install भी किया था। फ़र्क़ है वो आपसे क्या बचाता है:

```js
// fetch — दो कदम
const response = await fetch(url)
const data = await response.json()
```

```jsx
import axios from "axios"

// axios — एक कदम, JSON पहले से पिघला हुआ
const { data } = await axios.get(url)
```

दो lines एक हो जाती हैं। और जब कोई request फेल होती है, axios आपको एक साफ़, नाम लगी error थमा देता है बजाय इसके कि आप खुद खुदाई करो — इसीलिए आपके पढ़े जाने वाले ज़्यादातर project codes में `axios` लिखा मिलेगा।

## AI चलाता है, आप रास्ता दिखाते हो

Projects से पहले एक काम की सच्चाई। AI अब code का **98–99% लिखता है**। तो एक intern — एक engineer — के रूप में आपका काम क्या है?

**Navigate करना।** काग़ज़ पर plan करो, AI को कदम-दर-कदम चलाओ, वो जो लिखे वो पढ़ो, उस पर सवाल उठाओ, browser में जाँचो। Driver हमेशा AI है — नक्शा आपके हाथ में है। इसीलिए इस module ने आपको commands रटने की जगह predict, पढ़ना और तोड़ना सिखाया: नेविगेट करने की यही मांसपेशियाँ हैं।

आगे के projects इसी mode में चलेंगे: आप फ़ैसला करते हो, AI टाइप करता है, आप जाँचते हो।

## Hands-on — दोनों packages, पहिया आपके हाथ

1. AI से कहो: "Add zustand to my Vite app with a counter store — count and increment." Code पढ़ने से पहले predict करो: click करने पर कौन से components redraw होंगे?
2. AI से उसी counter को useContext में बदलवाओ। दोनों files बगल में रखो — गिनो context को कितनी extra wrapper lines चाहिए।
3. 3.5 वाला `WeatherNow` लो और AI से fetch की जगह axios लगवाओ। पढ़ने से पहले diff की prediction करो।
4. AI से कहो: "List 5 popular npm packages for charts, dates, and forms." बस ताक़ लो उस शैल्फ पर — "शून्य से कभी नहीं" वाला idea एक screen में यही है।

<QuizBlock
  :questions="[
    { question: 'App को charts, date handling, या chat चाहिए। पहला क़दम?', answer: 'उस use case के लिए npm पर एक जीवित maintenance वाला package ढूँढो — install करो और use करो। लगभग सब पहले से मौजूद है; शून्य से मत बनाओ।' },
    { question: 'Zustand क्या है?', answer: 'एक state management library — component tree के बाहर एक store, जिसे कोई भी component सीधे पढ़ता और लिखता है।' },
    { question: 'Zustand useContext से अच्छा क्यों लगता है?', answer: 'कोई Provider wrapper नहीं, और हर component सिर्फ़ अपना हिस्सा उठाता है — एक छोटा बदलाव कुछ components redraw कराता है, Provider के नीचे का सब कुछ नहीं।' },
    { question: 'useUserStore((state) => state.user) में (state) वाला हिस्सा क्या है?', answer: 'Selector — वो नाम देता है कि इस component को store में से एक कौन सा हिस्सा चाहिए।' },
    { question: 'axios.get fetch की तुलना में क्या थमाता है?', answer: 'पहले से पिघला हुआ data — response.json() वाला क़दम नहीं। छोटा code, और request फेल होने पर साफ़, नाम लगी errors।' },
    { question: 'axios कहाँ से आया — और install ने क्या बदला?', answer: 'npm से — npm install axios। package.json में एक line उतरी, code node_modules में गया, और lock file ने ठीक version लिख लिया।' },
    { question: 'AI अब code का 98 से 99 प्रतिशत लिखता है। आपका काम क्या है?', answer: 'Navigate करना — plan करो, AI को कदम-दर-कदम चलाओ, उसका लिखा पढ़ो, सवाल उठाओ, browser में जाँचो। नक्शा आपके हाथ में।' }
  ]"
/>

<PageNextButton />
