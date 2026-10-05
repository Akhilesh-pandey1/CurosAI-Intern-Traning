# 2.7 Async & APIs

अब तक सब कुछ उसी पल खत्म हो जाता था — एक line, एक result। यह page अलग है: अब आपका code दुनिया के दूसरे छोर बैठे **server** से data माँगता है, और जवाब आने में time लगता है। तीन ideas यह सँभालते हैं: **fetch** सवाल भेजता है, **async/await** जवाब का इंतज़ार करता है, और **try/catch** network के फेल होने के पल को पकड़ लेता है।

## एक API — दूसरे computer से data माँगना

API दो programs के बीच का menu है: आपका code कुछ माँगता है, server वापस data भेजता है — लगभग हमेशा **JSON** में, वो text shape जो बिल्कुल JavaScript objects जैसा दिखता है। उससे आप storage page पर मिल चुके हो: `JSON.stringify` objects को strings बनाता है, `JSON.parse` उन्हें वापस पढ़ता है।

Practice के लिए हम एक free test server use करते हैं, JSONPlaceholder — ना key, ना signup:

```
https://jsonplaceholder.typicode.com/users/1
```

कुछ भी run करने से पहले वह address browser के एक tab में खोल के देखो: एक JSON object जिसमें `name`, `email`, `address` है। बिल्कुल यही आपके code को मिलेगा।

## fetch + async/await — पूछो, फिर इंतज़ार करो

`fetch` request शुरू करता है और वापस एक **promise** देता है — एक पर्ची जिस पर लिखा है *आपका data अभी यहाँ नहीं, बाद में आना*। `await` keyword उसी पर्ची पर इंतज़ार करने का तरीका है, function को छोड़े बिना:

```js
async function showUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const user = await response.json()
  console.log(user.name)
}

showUser()
console.log("I print first")
```

Run करने से पहले predict करो — दो बातें सही बिठानी हैं। पहली, कौन सी line पहले print होगी? `"I print first"` — function पहले `await` पर **रुक** जाता है, और network काम करते देर तक page जीता रहता है। दूसरी, **दो** awaits क्यों? पहला response लाता है — लिफ़ाफ़ा। `response.json()` उसे खोल के body parse करता है — चिट्ठी — और उस कदम का अपना इंतज़ार है।

`function` से पहले लिखा `async` ही शब्द है जो अंदर `await` की इजाज़त देता है। हर async function खुद भी एक promise लौटाता है — इसीलिए उसे call करना कभी instant feel नहीं होता।

<VideoSlot link="https://www.youtube.com/watch?v=gRLdHSabW3o" topic="Fetch and async-await video — watch once for the basic idea, do not memorize" />

## try/catch — जब request फेल हो

इंतज़ार करने वाले code में एक failure mode है जो पिछले pages में कहीं नहीं था: सामने वाला पहुँच से बाहर हो सकता है — internet नहीं, address में गलती, मरा हुआ server। `try` risky हिस्से को लपेटता है, और `catch` **सिर्फ़** तब चलता है जब अंदर कुछ फेल हो:

```js
async function showUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const user = await response.json()
    console.log(user.name)
  } catch (error) {
    console.log("Could not reach the server")
  }
}
```

जब तक भरोसा न हो, इसे मोड़ के देखो: address जान-बूझ के तोड़ो — पहले predict करो — और run करो। लाल crash की जगह catch वाला message print होगा। Page बचा रहता है, और यही पूरा point है: फेल होती requests normal हैं, तो normal failures को handling वाला code मिलता है।

<VideoSlot link="https://www.youtube.com/watch?v=WRNBQCl_cPU" topic="Try-catch video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

1. AI से कहो: "Give me 6 tiny JavaScript examples using fetch with async/await against https://jsonplaceholder.typicode.com — one single user, one list of users, one with try/catch — 3 to 6 lines each."
2. हर example के लिए पहले prediction लिखो: कौन सी shape आएगी, क्या print होगा — और कौन सी log line data से **पहले** print होगी।
3. हर एक browser console में चलाओ (`F12` → Console), मिलाओ, और timing देखो — पर्ची value से बहुत पहले वापस आती है।
4. Mismatch हुआ? AI से पूछो "why is the output this?" — फिर अपनी copy में अपने शब्दों में 1–2 lines लिखो, एक छोटे example के साथ।
5. Examples मोड़ो — address तोड़ो, कोई और field पढ़ो, दस users की list पर चलो और हर नाम print करो — हर बार पहले predict.
6. एक बार जान-बूझ के बिना `await` के fetch call को log करो। अपनी copy में नोट करो क्या print हुआ: पर्ची, value नहीं।

<QuizBlock
  :questions="[
    { question: 'fetch को call करते ही वो क्या लौटाता है — data, या कुछ और?', answer: 'एक promise — पर्ची जिस पर लिखा है data अभी यहाँ नहीं। असली value बाद में आती है, और await उसका इंतज़ार करने का तरीका है।' },
    { question: 'await असल में अपने function का क्या करता है?', answer: 'उस एक function को तब तक रोक देता है जब तक promise settle न हो — बाकी page चलता रहता है।' },
    { question: 'Example में दो awaits क्यों — response और response.json()?', answer: 'पहला इंतज़ार लिफ़ाफ़ा लाता है — response। json() उसे खोल के body parse करता है, और उस कदम का अपना इंतज़ार है।' },
    { question: 'Function पर async शब्द क्या allow करता है — और function खुद क्या लौटाता है?', answer: 'अंदर await की इजाज़त देता है। और हर async function खुद भी promise लौटाता है — कभी instant value नहीं।' },
    { question: 'Catch block कब चलता है?', answer: 'सिर्फ़ तब जब try के अंदर कुछ फेल हो — internet नहीं, गलत address, मरा server। सब ठीक रहा, तो catch कभी नहीं चलता।' },
    { question: 'आपने address जान-बूझ के तोड़ा। User को क्या दिखेगा — crash, या catch वाला message?', answer: 'Catch वाला message। Failure को सँभाल लिया गया, तो page जीता रहता है — फेल होती requests normal हैं, app के लिए कोई exception नहीं।' },
    { question: 'JSON क्या है, और आप उससे पहले कहाँ मिले थे?', answer: 'Servers का जवाब देने वाला text shape — वो JavaScript objects जैसा दिखता है। Storage page पर: save करने के लिए stringify, पढ़ने के लिए parse।' },
    { question: 'Fetch call को बिना await के log करो, तो क्या print होगा?', answer: 'Promise की पर्ची, value नहीं — data अभी आया ही नहीं। Await भूलना इस page की वही classic गलती है।' }
  ]"
/>

<PageNextButton />
