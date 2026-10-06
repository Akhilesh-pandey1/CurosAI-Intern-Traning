# 3.7 npm & package.json

3.1 में आपने चार commands टाइप कीं और पूरा project हाज़िर हो गया। भारी काम उठाने वाला शब्द था **npm** — अब उसका ढक्कन खोलते हैं। हर React project दो files और एक folder से चलता है, और इस page के बाद उनमें से कोई रहस्य वाली file नहीं लगेगी।

## npm — package manager

**npm** का मतलब **Node Package Manager** — एक नाम में दो चीज़ें:

- Ready-made JavaScript code की एक विशाल online **दुकान**। हर टुकड़े को **package** कहते हैं।
- आपकी machine पर बैठा वो **tool** जो ये packages download और manage करता है।

React खुद भी एक package है — npm ने उसे पहले ही दिन आपके project में उतारा था। Vite भी वैसा ही है, और अगले page पर मिलने वाला axios भी। एक install करने के लिए एक ही command:

```bash
npm install axios
```

3.1 में भी यही हुआ था: `npm create vite@latest` ने Vite का template मँगाया, और `npm install` ने template की लिखी हर package download कर ली। आप npm का नाम जानने से पहले ही उसे use कर रहे थे।

## package.json — project का ID card

हर project अपने साथ एक छोटी file रखता है जो उसे describe करती है। अपनी वाली खोलो:

```json
{
  "name": "my-first-react",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
}
```

दो हिस्से सबसे काम के:

- **scripts** — आपकी commands। `npm run dev` इसलिए चलता है कि इस file में लिखा है: dev का मतलब vite। नई command यहाँ की एक नई line है।
- **dependencies** — उन packages की list जिनकी project को ज़रूरत है, versions के साथ। हर install command यहाँ अपनी line जोड़ देती है।

और वो चुपचाप चलने वाली superpower: यह file किसी दोस्त को भेज दो — बिना किसी downloaded code के — और उसके एक `npm install` पर उसका पूरा setup खड़ा हो जाता है। npm list पढ़ता है और ठीक उतना ही मँगाता है जितना missing है। ID card यात्रा करता है; भारी folder नहीं।

## package-lock.json — ठीक-ठीक receipt

package.json कहती है "react, यह version।" उसके पास बैठी file — **package-lock.json** — receipt है: जो version असल में install हुआ, plus उस package के अपने सारे packages के ठीक versions।

दोनों क्यों? List version की इजाज़त देती है; receipt एक गाँठ बाँध देती है। npm पहले receipt पढ़ता है, तो आपकी machine और आपके teammate की machine एक जैसा project चलाती हैं। एक rule: यह file npm की है — हाथ से इसे कभी edit मत करो।

## node_modules — downloads का घर

एक folder, जान-बूझ कर विशाल: आपका हर package, और हर package के अपने packages। दो rules:

- अंदर कुछ भी edit मत करो।
- इसे कभी copy या share मत करो — `npm install` पूरा folder कभी भी दोबारा बना देता है।

<VideoSlot link="https://youtu.be/nSFe1-kpfbQ" topic="npm, package.json and package-lock.json — watch once" />

## एक बार घुमाओ — तीन files जो matter करती हैं

- `index.html` — एक मात्र असली HTML page, जिसमें एक खाली `<div>` बैठा है। React उसे भरता है।
- `src/main.jsx` — entry point। वो `App` को import करता है, उस दिव में render करता है, और सबकुछ **`<StrictMode>`** में लपेटता है — एक सिर्फ़-dev वाला checker जो आपके components को दो बार render करके छुपी गलतियाँ बाहर लाता है। कोई log दो बार print होता दिखा? वो StrictMode का काम है, bug नहीं।
- `src/App.jsx` — वो component जिसे आपने 3.1 में edit किया था।

## हर file एक module है

npm projects के बीच packages बाँटता है। आपकी अपनी files भी code उसी तरह बाँटती हैं — **हर file एक module है** — mechanics आपको 2.5 से याद हैं। Code बाहर देने के दो तरीके:

**Default export** — file की वो एक मुख्य चीज़, जिसे बिना braces import करते हैं:

```jsx
export default function UserCard() {
  return <div>...</div>
}
```

```jsx
import UserCard from "./UserCard.jsx"
```

**Named exports** — किनारे के helpers, हर file में कितने भी, braces और ठीक नाम से import होते हैं:

```jsx
export function toTitleCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
```

```jsx
import { toTitleCase } from "./formatTools.js"
```

React की रीति: **हर file में एक component, default export के रूप में** — helpers named exports बन के यात्रा करते हैं।

<VideoSlot link="https://www.youtube.com/watch?v=BjU-Y2cRsMQ" topic="Import and export — default vs named, watch once" />

## Hands-on — अपना project खुद पढ़ो

1. `package.json` खोलो। वो line ढूँढो जो `npm run dev` को चलाती है।
2. `npm install axios` चलाओ। `package.json` फिर खोलो — एक नई line। `package-lock.json` खोलो — ठीक version वाला एक axios entry। आपने अभी दोनों files को अपना काम करते देखा।
3. `node_modules` का size देखो। अब आप जानते हो वो सफ़र क्यों नहीं करता।
4. भरोसे वाली चाल: `node_modules` folder delete करो, `npm install` चलाओ, और पूरा folder लौटता देखो। ID card और receipt ने सब कुछ फिर बना दिया।

<QuizBlock
  :questions="[
    { question: 'npm क्या है?', answer: 'Node Package Manager — ready-made packages की एक विशाल दुकान, plus आपकी machine पर बैठा वो tool जो उन्हें install और manage करता है।' },
    { question: 'React खुद एक क्या है?', answer: 'एक package — npm ने उसे पहले ही दिन आपके project में उतारा था, किसी और की तरह ही।' },
    { question: 'npm run dev कहाँ से आता है?', answer: 'package.json के scripts section से — file कहती है dev का मतलब vite।' },
    { question: 'Dependencies list क्या करती है?', answer: 'Project को चाहिए हर package का नाम और version लिखती है। npm install उसे पढ़ता है और ठीक उतना ही मँगाता है जितना missing है।' },
    { question: 'package-lock.json exist क्यों करती है?', answer: 'वो असल में install हुए ठीक versions को गाँठ बाँधती है — ताकि आपकी machine और बगल वाली machine एक जैसा project चलाएँ।' },
    { question: 'Project दोस्त को भेजना है। क्या यात्रा करेगा — node_modules या package.json?', answer: 'package.json, lock file के साथ। node_modules विशाल है और npm install उसे कभी भी दोबारा बना देता है।' },
    { question: 'StrictMode क्या है?', answer: 'main.jsx में बैठा सिर्फ़-dev वाला wrapper जो components को दो बार render करके छुपी गलतियाँ बाहर लाता है — double logs का मतलब वो काम कर रहा है, bug नहीं।' },
    { question: 'Default export बनाम named export?', answer: 'Default — बिना braces, file की वो एक मुख्य चीज़। Named — braces और ठीक नाम, हर file में कितने भी।' }
  ]"
/>

<PageNextButton />
