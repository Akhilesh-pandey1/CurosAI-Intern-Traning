# 3.1 Start Here

Module 3 में आपका स्वागत है। JavaScript ने आपको page को हाथ से छूना सिखाया — element ढूँढो, text बदलो, event जोड़ो। React वो काम आपसे छीन लेता है। जान-बूझ कर।

## React कौन सी problem सुलझाता है

Plain JavaScript में (page 2.6) नया data दिखाना पूरा हाथ का काम है:

```js
document.querySelector("#city-name").textContent = weather.city
document.querySelector("#temp").textContent = weather.temperature
```

इसमें problem क्या है:

- हर element आप खुद ढूँढते हो।
- हर value आप खुद update करते हो — हर field के लिए एक line।
- एक छूट गई, तो screen चुपचाप पुराना data दिखाती रहती है।
- असली app में screen पर दर्जनों values होती हैं — कोई इंसान हाथ से नहीं टिक सकता।

React का एक ही idea: **screen आपके data की तस्वीर है।**

- आप एक function लिखते हो जो मौजूदा data के लिए screen को describe करता है।
- Data बदलता है → React उसे दोबारा चलाता है और page खुद update कर देता है।

एक line पकड़ के रखो: *आप screen describe करते हो। छूना React करता है।*

<VideoSlot link="https://youtu.be/cJ6v-0hY00A" topic="What React is and the problem it solves — the video also shows the installation; watch once, do not memorize" />

## आपका पहला React app — दस मिनट

React को console नहीं, एक असली project चाहिए। Node आपकी machine पर पहले से है — यह site खुद उसी पर चलती है। Terminal में:

```bash
npm create vite@latest my-first-react -- --template react
cd my-first-react
npm install
npm run dev
```

**Command में `vite` क्यों?** React सिर्फ़ एक library है — वो अकेले project बना या चला नहीं सकता। वो काम एक अलग tool करता है। पुराना tool Create React App था: शुरू होने में धीमा, update में धीमा। आज का standard **Vite** है — project सेकंडों में बनता है, और hot reload लगभग तुरंत उतरता है। React वही normal React है — Vite सिर्फ़ उसे जोड़ने और serve करने का आधुनिक, तेज़ तरीका है।

Print हुआ address खोलो (आम तौर पर `http://localhost:5173`)। आप एक React app देख रहे हो। अब वो loop जिस पर पूरा module चलेगा:

1. `src/App.jsx` खोलो, screen पर दिख रहा text ढूँढो, बदलो, save करो।
2. Browser **बिना refresh** update हो जाता है। यही hot reload है — React सिर्फ़ जो बदला है वही दोबारा बनाता है।
3. कुछ और बदलाव करो। Screen हमेशा file के कहने जैसी दिखती है।

`App.jsx` के सबसे ऊपर वो `import` lines? आप उन्हें page 2.5 से जानते हो — ES6 modules। React में **हर file एक module है**; components `export` और `import` से files के बीच यात्रा करते हैं। आगे वाले page पर और।

## Hands-on — app को अपना बनाओ

हमेशा की तरह पहले prediction:

1. `App.jsx` में बड़ी heading को अपने text से बदलो। Predict करो screen क्या दिखाएगी, save करो, मिलाओ।
2. उसके नीचे अपनी lines जोड़ो — आपका नाम, आपका batch, इस module का एक goal। ऊपर मौजूद lines का pattern copy करो।
3. उनमें से एक line delete करो। Predict करो, save करो, check करो।
4. Server को `Ctrl+C` से रोको, `npm run dev` से फिर चलाओ। App बिल्कुल वहीं से लौट आता है जहाँ छोड़ा था — यही start, edit, save वाला loop पूरा module है।

कहीं mismatch हुआ? AI से पूछो "why does React do this?" — फिर अपनी copy में अपने शब्दों में 1–2 lines, एक छोटे example के साथ।

<PageNextButton />
