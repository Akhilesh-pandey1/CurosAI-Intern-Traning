# 3.8 React Router

अब तक का हर app एक screen था। असली apps कई रखते हैं — एक home, एक login, एक profile, एक product page — और आप जैसे-जैसे चलते हो, address bar बदलती है: `/`, `/login`, `/products/5`। React में वो नक्शा एक छोटी library बनाती है: **React Router**।

## बड़ा idea — server के बिना routing

Module 1 में बदला हुआ URL एक ही मतलब रखता था: browser server से नया HTML page माँगता है। React app कुछ समझदारी करता है। पूरा app **एक page** है — single-page application, यानी **SPA**। Address बदलता है, पर server का कोई चक्कर नहीं होता। JavaScript नया path पढ़ता है और **screen पर component बदल देता है**। तेज़, मुलायम, कोई reload नहीं।

यही front-end routing है: URL एक bookmark है कि *कौन सा component* दिखे — और उसे देखता हुआ React Router है।

## Routes — app का नक्शा

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/5" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
```

इसे वैसे ही पढ़ो जैसा वो है — एक नक्शा:

- **`BrowserRouter`** — देखने वाली आँख खोलता है। वो पूरे app को घेरता है और address bar की सुनवाई करता है।
- **`Routes`** — paths की list। React Router उसमें से मौजूदा URL से मिलने वाली एक चुन लेता है।
- **`Route`** — नक्शे की एक line: यह path, वो component। Address `/about` है, तो `About` component render होता है।
- **`Link`** — चलने का तरीका। देखने में Module 1 वाले anchor tag जैसा, पर click करने पर page **reload नहीं** होता — सिर्फ़ address बदलता है और नक्शा दोबारा बनने देता है।

"About" पर click करो, address `/about` हो जाता है — बिना refresh, `About` हाज़िर। Back button दबाओ — browser की history भी चलती है, क्योंकि React Router उसे ठीक से use करता है।

<VideoSlot link="https://youtu.be/ZP8QyCIUeIA" topic="React Router — SPA routing, Routes and Link — watch once" />

## Dynamic routes — एक Route, कई pages

`/products/5` और `/products/12` के लिए दो lines क्यों। **Dynamic route** बदलने वाले हिस्से के आगे colon लगाता है:

```jsx
<Route path="/products/:id" element={<Product />} />
```

अब `/products/5`, `/products/12`, कोई भी number — सब एक ही `Product` component पर उतरते हैं, और id उनके साथ यात्रा करती है, अंदर पढ़ने को तैयार। कैसे, वो practice से आएगा — जब किसी असली project में ज़रूरत पड़े, AI से पूछो "how do I read params in React Router"।

बस, यही पूरा mental model है: **URL फ़ैसला करता है कि कौन सा component दिखे।** बाक़ी सब ब्योरा है।

## Hands-on — app को address bar दो

1. AI से कहो: "Add react-router-dom to my Vite React app with two pages, Home and About, and Link navigation." वो आपसे `npm install react-router-dom` करवाएगा — अब आप ठीक जानते हो वो क्या करती है। Predict करो click करने पर URL और screen का क्या होगा।
2. तीसरा route खुद जोड़ो — `/contact` अपने component के साथ। Pattern copy करो, नाम बदलो।
3. जान-बूझ कर बिगाड़ो: एक `Link` को `to="/aboutt"` कर दो। Click से पहले predict करो — क्या दिखेगा? (कुछ match नहीं करता, तो एक खाली जगह। "Page not found" वाली screen दिखाने वाला catch-all `*` route AI से मँगवाओ।)
4. AI से पूछो: "How would a big app like Amazon use routes — what lives at /products/5 there?" वही नक्शा, बस बड़ा।

<QuizBlock
  :questions="[
    { question: 'SPA क्या है?', answer: 'Single-page application — browser एक page load करता है, और JavaScript screen के components बदल देता है। हर चाल पर server से नया page नहीं माँगा जाता।' },
    { question: 'एक Route line क्या कहती है?', answer: 'एक path और एक component — यह URL, तो screen पर वो component।' },
    { question: 'सादे anchor tag की जगह Link क्यों?', answer: 'सादा anchor पूरा page reload कर देता है। Link सिर्फ़ address बदलता है और React Router को दोबारा बनने देता है — कोई reload नहीं।' },
    { question: 'URL देखना कौन चालू करता है?', answer: 'BrowserRouter — वो app को घेरता है और address bar सुनता है।' },
    { question: '/products/:id आपको क्या देता है?', answer: 'एक dynamic route जो किसी भी id से मिलता है — /products/5 और /products/12 दोनों एक ही component पर उतरते हैं, id अंदर पढ़ने को।' },
    { question: 'Address बदल गया पर page reload नहीं हुआ। क्यों?', answer: 'यही front-end routing है — JavaScript ने नया path पढ़ा और component बदल दिया। Server का कोई चक्कर नहीं हुआ।' },
    { question: 'Link पर click किया, कुछ render नहीं हुआ। सबसे ज़्यादा क्या हुआ होगा?', answer: 'कोई Route उस path से नहीं मिला — नक्शे में उसकी कोई line नहीं। Path ठीक करो, या एक catch-all route जोड़ो।' }
  ]"
/>

<PageNextButton />
