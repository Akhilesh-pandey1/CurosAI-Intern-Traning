# 2.1 Start Here

Module 2 में आपका स्वागत है। HTML ने page को कंकाल दिया, CSS ने उसे कपड़े पहनाए। अब वो हिस्सा आता है जो page को जीवित करता है — JavaScript, browser में logic की भाषा।

## JavaScript actually करता क्या है

Module 1 वाला इंसान वाला idea ही रखो: HTML कंकाल है, CSS त्वचा और कपड़े हैं, और **JavaScript मांसपेशियाँ और दिमाग़ है।** यही page को *काम* करने लगाता है:

- User button click करे या form submit करे, तो react करना।
- भेजने से पहले check करना — "यह email गलत लग रहा है।"
- Server से fresh data लाना — weather, आपके notifications.
- जब तक site use कर रहे हो, चीज़ें याद रखना — आपके cart के items.

एक line पकड़ के रखो: *HTML कहता है page पर क्या है, CSS कहता है वो कैसा दिखता है, JavaScript कहता है वो कैसे बर्ताव करता है।* और Module 1 के दो sides भी याद रखो — तीनों **user side** पर चलते हैं, visitor के browser के अंदर। Server side बाद में आएगा, Python module में।

<VideoSlot link="https://youtu.be/0vL_EhRMFN0" topic="JavaScript intro video — watch once for the basic idea, do not memorize" />

## पूरे module का एक method — पहले predict करो, फिर run करो

किसी भी topic से पहले, वो method सीखो जो इस module के हर page पर चलेगा। हर concept के लिए — function, loop, array method — हर बार यही चाल है:

1. AI से उस topic के 5–10 छोटे examples माँगो।
2. **हर example run करने से पहले, कदम-दर-कदम लिखो कि code कैसे चलेगा और आखिरी output क्या होना चाहिए।** यही आपकी prediction है।
3. Code run करो और prediction से मिलाओ।
4. Match हो गया — आपने समझ लिया। Match नहीं हुआ — और भी अच्छा: वही खाई है जो आपने अभी तक समझी नहीं थी। पता करो क्यों।

Predict क्यों? क्योंकि code *पढ़ना* समझने जैसा feel होता है, पर अक्सर होता नहीं। पहले prediction लिखना दिमाग़ को code सच में trace करने पर मजबूर करता है — और आखिर में वो mismatch दस बार दोहराने से ज़्यादा सिखाता है।

साथ में, quick revision के लिए एक copy बनाते रहो: हर important concept, function, loop, या array method के लिए **अपने शब्दों में 1–2 lines और एक छोटा example।** Revise करने और समझने के लिए — कभी memorize करने के लिए नहीं।

## अभी, इसी वक़्त आज़माओ — browser console

JavaScript चलाने के लिए कोई setup नहीं चाहिए। आपका browser पहले से console साथ लेके चलता है — ऐसी छोटी चीज़ों के लिए perfect:

1. कोई भी page खोलो, `F12` दबाओ (या right-click → Inspect), और **Console** tab खोलो।
2. `console.log("hello")` लिखो और Enter दबाओ। Page वापस hello कह देगा।
3. अब असली बात। पहले predict करो — यह क्या print करेगा, और क्यों?

```js
let a = 5
let b = 2
console.log(a + b * 10)
```

अपनी prediction लिखो, run करो, मिलाओ। अगर कहा था 25 — सही: JavaScript `+` से पहले `*` करता है। अगर कहा था 70 — आप left से right गए, और अब आपने खुद discover कर लिया कि prediction वाला step क्यों है।

<PageNextButton />
