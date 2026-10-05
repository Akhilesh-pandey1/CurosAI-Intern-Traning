# 2.9 Project — To-Do List

दूसरा build। Calculator एक बार में **एक value** रखता था — यह वाला एक **list** सँभालता है जो बढ़ती है, घटती है, और refresh में बचनी चाहिए। हर हिस्सा module से आता है: tasks objects के array में रहते हैं, clicks events हैं, screen DOM से फिर बनती है, और localStorage की वजह से कल भी आपके tasks वहीं होंगे।

## आप क्या बनाते हो

एक चलता-फिरता to-do page:

- एक input और एक **Add** button — टाइप हुआ task list में जुड़ जाता है।
- हर task के साथ उसका अपना **delete** button दिखता है।
- **Task पर click** उसे done कर देता है, और दोबारा click वापस.
- सब कुछ **localStorage** में save — refresh करो, tab बंद करो, कल आओ: list वहीं है।

## कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

Calculator जैसा ही rule: **AI driver है, आप navigator।** AI हर file टाइप करता है। आप रास्ता plan करते हो, हर मोड़ जानते हो, हर गली check करते हो — और कभी मत कहो "AI ने लिखा, मुझे पता नहीं।"

1. **पहले काग़ज़ पर रास्ता plan करो — data से शुरू कर के।** इस build का दिल एक shape है: **task objects की list**, हर एक `{ text, done }`. काग़ज़ पर तीन sample tasks objects की तरह लिखो, फिर जवाब दो: Add दबाने से array का क्या होगा? Task पर click किसे पलटेगा? दोनों के जवाब आ गए, तो plan पूरा।
2. **AI से पहला version लिखवाओ — पूरा:**

   > Build a to-do list as one HTML page with its CSS and one JavaScript file. An input and an Add button, the tasks listed below, a delete button on every task, and clicking a task marks it done and back. Keep each task as an object with text and done inside one array. Save the array to localStorage on every change and load it when the page opens. No frameworks.

   खोलो और Module 1 वाला HTML और CSS पढ़ो — वहाँ कुछ भी अनजान नहीं होना चाहिए।
3. **AI से flow करवाओ — हर line नहीं।** पूछो:

   > Walk me through the complete flow: I type Buy milk, press Add, click the task to mark it done, then refresh the page. Which function runs on each step, what reads and writes the array, where localStorage comes in — until the ticked task comes back after refresh.

   अपनी screen पर उसका पीछा करो: यह function text पकड़ता है, यह object array में धकेलता है, यह save करता है, यह list फिर से बनाता है। जब कहानी कीस्ट्रोक से लेके refresh में बचने तक दोहरा सको, तो वो आपकी है।
4. **Driver की जाँच करो — बदसूरत रास्ते पहले:** खाली input के साथ Add दबाओ, बीच से एक task delete करो, दो tasks tick करके बीच में refresh करो, फिर DevTools → Application से localStorage मिटा दो और देखो page कैसे सँभलता है। Navigator वही पकड़ता है जो driver से छूट गया।
5. **बदलाव का order दो — एक बार में एक।** Predict करो क्या बदलेगा, फिर एक छोटा बदलाव order करो, AI ने कहाँ हाथ लगाया पढ़ो, run करो, मिलाओ:

## आप जो बदलाव करवाते हो

1. ऊपर एक counter: **5 में से 2 done** — array पर चलो, ticks गिनो. *(array + condition)*
2. एक **Clear completed** button जो सिर्फ़ अधूरे tasks रख जाए. *(filter)*
3. नया task नीचे की जगह **ऊपर** आए. *(array order)*
4. Input में **Enter** दबाने से task जुड़ जाए. *(एक नया event: keydown)*

## इसे जानो, copy मत करो

इस page को खत्म होने से पहले, बिना देखे जवाब दो:

- कौन सा function screen पर list फिर से बनाता है — और हर बदलाव के बाद उसे दोबारा चलना क्यों ज़रूरी है?
- Array ठीक कहाँ localStorage के लिए text बनता है, और text वापस array?
- Delete button click होते ही आपके code में क्या होता है?

हर सवाल के लिए line पर उँगली रख सकते हो — तो project आपका है, AI का नहीं।

<QuizBlock
  :questions="[
    { question: 'इस build में tasks किस shape में रहते हैं?', answer: 'Objects का array — हर task एक object है जिसमें text और done है। नाम लगे डब्बों की list: array उन्हें order में रखता है, labels हर एक को बयान करते हैं।' },
    { question: 'Add click होते ही आपके code में क्या होता है?', answer: 'Click event अपना function चला देता है, input का text array में एक नया object बनता है, array localStorage में save होता है, और screen पर list फिर से बनती है।' },
    { question: 'हर बदलाव के बाद list फिर क्यों बनानी पड़ती है — screen खुद update नहीं होती?', answer: 'DOM आपके array को कभी नहीं देखता। Screen पर वही दिखता है जो आखिरी redraw ने वहाँ छोड़ा था, तो हर बदलाव एक ही चाल पर खत्म होता है: list फिर से बनाओ।' },
    { question: 'इस project में JSON कहाँ आता है?', answer: 'JSON.stringify array को setItem से पहले string बनाता है, और JSON.parse उसे getItem के बाद वापस असली array बनाता है — storage में सिर्फ़ strings रहती हैं।' },
    { question: 'Task tick किया और refresh किया — tick क्यों बच गया?', answer: 'Click ने array के अंदर उस object पर done पलट दिया था, array save हुआ था, और load पर page उसे localStorage से वापस पढ़ता है। Tick कभी सिर्फ़ screen पर था ही नहीं।' },
    { question: 'Clear completed वाला बदलाव अधूरे tasks रखता है। कौन सा method बैठता है?', answer: 'filter — हर task का एक true-या-false सवाल: क्या done false है। सिर्फ़ बचे हुए array में वापस जाते हैं।' },
    { question: 'Navigator के नाते कभी क्या नहीं कहना है?', answer: 'AI ने लिखा, मुझे पता नहीं। AI हर line drive कर सकता है, पर navigator हर मोड़ जानता है — demo की ज़िम्मेदारी captain को उसी पर होती है।' }
  ]"
/>

<PageNextButton />
