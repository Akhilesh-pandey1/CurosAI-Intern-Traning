# 1.2 HTML Essentials

एक page, चार चीज़ें: सही mindset, tags जो actually use होते हैं, structure जो हर page share करता है, और forms। आप memorize करने नहीं आए — पहचानने आए हो।

## पहले: क्या करना है और क्या नहीं

**करो:**

- बस HTML के साथ खेलो। कोई tag बदलो, page reload करो, देखो क्या हिला।
- हर चीज़ का basic idea ले लो। बस इतना ही काफ़ी है।

**मत करो:**

- Memorize करने की कोशिश मत करो। HTML बहुत बड़ा है, और कोई भी उसे रटता नहीं।
- इसे ज़्यादा time मत दो। अब AI code लिखता है — आपका काम है उसे पढ़ना, उसे guide करना, और check करना।

यही इस पूरे module का main motto है, और यह CSS पर भी लागू होता है: पहले basic idea, details सिर्फ़ तब जब actually ज़रूरत हो।

## Tags जो actually use होते हैं

Common वाले सीखो, बाकी ज़रूरत पड़ने पर search करो। हर tag को देखने और उसके साथ खेलने के लिए अच्छी जगह है [142elements.com](https://www.142elements.com/) — खोलो, click करते रहो, और महसूस करो कि क्या-क्या exist करता है।

रोज़ इस्तेमाल होने वाले tags:

- `h1` से `h6` — headings, सबसे important पहले। एक page पर एक ही `h1`।
- `p` — text का paragraph।
- `a` — दूसरे page का link।
- `img` — image दिखाता है।
- `ul` + `li` — bullet list और उसके items।
- `button` — जिसे user click करता है।
- `div`, `section`, `header`, `nav`, `main`, `footer` — content group करने वाले डब्बे। `div` plain डब्बा है; बाकी मतलब वाले डब्बे हैं।

<VideoSlot link="https://youtu.be/Ut4RpySLM6Y" topic="HTML video — watch once for the basic idea, do not memorize" />

## Structure जो हर page share करता है

आपके बनने वाले ज़्यादा तर pages ऐसे दिखेंगे:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Browser tab में दिखने वाला page title</title>
  </head>
  <body>
    <header>ऊपर की पट्टी जिसमें site का नाम</header>
    <nav>Site में घूमने के links</nav>
    <main>
      <section>Page का असली content</section>
    </main>
    <footer>नीचे की पट्टी जिसमें छोटा print</footer>
  </body>
</html>
```

`head` में वो settings होती हैं जो visitor पढ़ता नहीं — जैसे tab का title। `body` में वो सब होता है जो visitor देखता है।

## Forms — page input कैसे लेता है

Form वही रास्ता है जिससे user आपको data देता है: login, registration, search box.

```html
<form>
  <label for="full-name">पूरा नाम</label>
  <input id="full-name" type="text" required />

  <label for="email">ईमेल</label>
  <input id="email" type="email" required />

  <button type="submit">Register</button>
</form>
```

तीन ideas ज़्यादातर वज़न उठा लेते हैं:

- `label` + `input` की जोड़ी — हर input का एक label होना चाहिए, `for` और `id` से जुड़ा हुआ।
- `type` — browser को बताता है कि ये कैसा data है (`text`, `email`, `password`, `number`)। फिर browser आपके लिए free में check कर सकता है।
- Validation attributes जैसे `required` — बिना किसी code के free checking।

## Hands-on — अपना portfolio page बनाओ, हिस्सा-हिस्सा में

AI से पूरा page एक साथ माँगना नहीं है। एक-एक हिस्सा करके बढ़ो — हर हिस्से के बाद उसे समझो और कुछ खुद बदलो। हर ask पर एक strict rule: **AI से कहो सिर्फ़ HTML, कोई CSS नहीं** — CSS हमारा अगला module है। अभी सिर्फ़ HTML है।

1. AI से कहो: "मेरे लिए एक छोटा portfolio page बनाओ — बस header में मेरा नाम और एक छोटी about line। सिर्फ़ HTML, कोई CSS नहीं।" उसे browser में चलाओ।
2. Code पढ़ो। जो tag पहचाना नहीं, AI से explain करवाओ।
3. खुद एक चीज़ बदलो — अपना नाम, heading, कोई शब्द — page reload करो, और देखो क्या हिला।
4. फिर अगला हिस्सा माँगो: skills list, फिर projects section, फिर contact form।
5. हर हिस्से के बाद: पढ़ो, जो नहीं आता उसके बारे में पूछो, और आगे बढ़ने से पहले खुद एक चीज़ बदलो।

<QuizBlock
  :questions="[
    { question: 'HTML tags memorize करना ज़रूरी है?', answer: 'नहीं। कोई भी नहीं रटता। अब AI code लिखता है — आपको common tags का basic idea चाहिए, और बाकी ज़रूरत पड़ने पर search करते हो।' },
    { question: 'रिया ने <h1>My Portfolio</h1> को body की जगह head के अंदर लिख दिया। page पर visitor क्या देखेगा?', answer: 'कुछ नहीं। head में वो settings होती हैं जो visitor कभी नहीं देखता। heading तभी दिखती है जब वो body के अंदर हो।' },
    { question: 'एक input का id email है, पर उसका label for mail कहता है। क्या गड़बड़ होगी?', answer: 'label पर click करने से अब input focus नहीं होगा, और screen readers उन्हें आपस में जोड़ नहीं पाएँगे — for और id बिल्कुल same होने चाहिए।' },
    { question: 'आपने एक email input को number input बना दिया, hello लिखा, और Register दबा दिया। क्या होगा?', answer: 'browser submit रोक देगा और warning दिखाएगा — type browser को बताता है कि वहाँ कैसा data आता है, इसलिए वो कुछ भेजने से पहले free में check कर लेता है।' },
    { question: 'आपने हर input से required हटा दिया और खाली form submit कर दिया। क्या होगा?', answer: 'form खाली ही submit हो जाएगा — required free checking कर रहा था; उसके बिना खाली submit कोई नहीं रोकता।' },
    { question: 'paragraph tag misspell करके <pv>Hello</pv> लिख दिया। page क्या दिखाएगा?', answer: 'बस सादा text Hello — browser जो tags नहीं जानता, उन्हें ignore कर देता है।' },
    { question: 'आपने हर section को div से बदल दिया। page में क्या बदलेगा?', answer: 'दिखने में लगभग कुछ नहीं — दोनों डब्बे हैं। मतलब जाता है, look नहीं।' }
  ]"
/>

<PageNextButton />
