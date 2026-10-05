# 2.10 Project — Weather App

आखिरी build — और पहली बार आपका code internet पर बैठे **असली server** से बात करता है, practice वाली API से नहीं। यह page 7 है, असली कपड़ों में: fetch, async/await, try/catch — साथ में वो navigator वाली चाल जिस पर यह page सच में टिका है: **app को एक कदम और कठिन करना**, बिना चलते हुए काम को तोड़े।

## आप क्या बनाते हो

एक weather page, बढ़ती मुश्किल के दो कदमों में:

1. **पहले fixed city** — page खुलते ही **Open-Meteo API** से Pune का current temperature और हालात दिखे — free, ना key, ना signup.
2. **फिर आपकी city** — एक input और एक search button: user कोई भी city टाइप करे, app नाम को **geocoding API** से coordinates में बदले, फिर उसी city का weather मँगाए। दो API calls, आपस में जुड़े हुए।

## कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

वही rule, तीसरी बार: **AI driver है, आप navigator।** आप data का रास्ता plan करते हो, हर मोड़ जानते हो, हर गली check करते हो — कभी मत कहो "AI ने लिखा, मुझे पता नहीं।"

1. **Data का रास्ता काग़ज़ पर plan करो।** Weather के numbers coordinates से आते हैं, नामों से नहीं — तो रास्ता है: *city का नाम → latitude, longitude → temperature*. काग़ज़ पर लिखो हर API को क्या लौटाना है, और आप हर एक से कौन सा एक field पढ़ोगे। वही रास्ता पूरा app है।
2. **AI से कदम एक लिखवाओ — fixed city:**

   > Build a weather app as one HTML page with its CSS and one JavaScript file. Show the current weather for Pune using the free Open-Meteo API — no API key. On screen: the city name, the temperature and the weather conditions. Handle a failed request with try/catch. No frameworks.

   खोलो और पढ़ो — Module 1 वाला HTML और CSS, page 7 वाले fetch और awaits — कुछ भी अनजान नहीं होना चाहिए।
3. **AI से flow करवाओ — हर line नहीं।** पूछो:

   > Walk me through the complete flow: the page loads, fetch goes to Open-Meteo, JSON comes back, and the temperature shows on screen. Which function runs, why there is more than one await, and where try/catch would fire — until the number lands on screen.

   उसे जीते-जी पीछा करो। लिफ़ाफ़ा, चिट्ठी, field — यह चाल आप page 7 से जानते हो।
4. **Driver की जाँच करो:** address जान-बूझ के तोड़ो, DevTools से अपना internet काटो, और हर run से पहले predict करो कि crash की जगह user को क्या दिखेगा।
5. **फिर मुश्किल बढ़ाने का order दो — कदम दो:**

   > Change the app so the user types a city name and presses Search. First call the geocoding API at https://geocoding-api.open-meteo.com/v1/search?name=CITY — it turns the name into a latitude and longitude. Use those in the weather call. If the city is not found, show a message instead of a crash.

   अब flow की चाल लंबी है — चार awaits की chain: geocode लिफ़ाफ़ा, geocode चिट्ठी, weather लिफ़ाफ़ा, weather चिट्ठी। उसे तब तक दोहराओ जब तक वो काना-पोंगी हो जाए। वहीं वो आपकी हो जाती है।

## आप जो बदलाव करवाते हो

1. एक **city not found** का message — geocoding के जवाब में अंदर कुछ नहीं आता; वो एक condition है, crash नहीं. *(null check + condition)*
2. Temperature के पास **wind speed** भी दिखाओ — उसी चिट्ठी से एक और field. *(JSON पढ़ना)*
3. **आखिरी खोजी गई city** refresh के बाद वापस आए. *(localStorage — module अपने आप को जोड़ता है)*
4. Input में **Enter** दबाने से search चल जाए. *(keydown)*

## इसे जानो, copy मत करो

Test से पहले, बिना देखे जवाब दो:

- City search को **चार** awaits क्यों चाहिए और fixed city को सिर्फ़ दो?
- Internet ग़ायब होने पर try/catch ठीक कहाँ चलेगा?
- Geocoding call city के नाम को किसमें बदलती है — और उस जवाब की सबसे पहले ज़रूरत किस API को है?

## पूरा module एक साँस में

JavaScript दिमाग़ है: shapes में data (arrays, objects), decisions और loops, काम जिसका एक बार नाम रखा और बार-बार इस्तेमाल (functions), छूने वाला जीवित page (DOM + events), याद रखने वाली drawers (storage), पूछने वाले दूसरे computers (fetch + await + catch) — और दो builds जिन्होंने यह सब इस्तेमाल किया। अब साबित करो।

## खुद को जाँचो — पूरा module

दस सवाल, लगभग हर page से एक। पहले जवाब दो, फिर पलटो। हर चूक एक page की ओर इशारा करती है जिसकी एक और मुलाक़ात ज़रूरी है — यही test का असली काम है।

<QuizBlock
  :questions="[
    { question: 'const city = Pune, फिर city = Delhi. क्या होगा?', answer: 'Error — const को दोबारा assign नहीं कर सकते। बनाते वक़्त यही सौदा हुआ था। (page 2.2)' },
    { question: 'typeof [4, 8, 15] क्या print करेगा?', answer: 'object — JavaScript में arrays असल में objects हैं। वही prediction जो लगभग हर किसी की एक बार हारती है। (page 2.2)' },
    { question: '[78, 92, 35].filter(function (n) { return n >= 40 }) — क्या लौटेगा?', answer: '[78, 92] — सिर्फ़ वही items बचते हैं जिनका सवाल true होता है। (page 2.3)' },
    { question: 'students objects की list है। पहले student का नाम कैसे पढ़ोगे?', answer: 'students[0].name — पहले position, फिर label. (page 2.3)' },
    { question: 'Function लिखने से क्या होता है — और उसे चलाता क्या है?', answer: 'अपने आप कुछ नहीं — वो सिर्फ़ काम को नाम देता है। Call ही body को चलाता है। (page 2.5)' },
    { question: 'Import के braces में addMarks2 लिखा है पर file addMarks export करती है। क्या होगा?', answer: 'Fail हो जाएगा — braces वाला नाम exported नाम से exactly मिलना चाहिए। (page 2.5)' },
    { question: 'addEventListener के अंदर वाला function कब चलता है?', answer: 'सिर्फ़ तब जब event घटे। Page load करने पर कुछ नहीं चलता — click चलाता है। (page 2.6)' },
    { question: 'localStorage या sessionStorage — browser बंद करने पर कौन बचता है?', answer: 'localStorage। sessionStorage tab के साथ मर जाता है। (page 2.6)' },
    { question: 'Fetch call को बिना await के log करो, तो क्या print होगा?', answer: 'Promise की पर्ची, value नहीं — data अभी आया ही नहीं। (page 2.7)' },
    { question: 'Weather app में city के साथ coordinates ही नहीं आए। User को क्या दिखना चाहिए — और उसकी रखवाली कौन करती है?', answer: 'एक साफ़ message जैसे City not found — condition खाली जवाब को weather call चलने से पहले पकड़ लेती है। (page 2.10)' }
  ]"
/>

<PageNextButton />
