# 2.8 Project — Calculator

Concept वाले pages खत्म — यह पहला **build** है। एक छोटी screen जिसके buttons सच में हिसाब करते हैं। यहाँ सीखने को कुछ नया नहीं: हर हिस्सा pages 1 से 7 से आता है — functions math करते हैं, events clicks का इंतज़ार करते हैं, conditions edge cases की रखवाली करती हैं, और DOM result दिखाता है।

## आप क्या बनाते हो

एक चलता-फिरता calculator page:

- एक display line जो दिखाती है आपने क्या टाइप किया और result क्या निकला.
- `0`–`9`, `+`, `-`, `*`, `/`, `=` के buttons, और clear के लिए `C`.
- चार operations चार functions से, clicks events से सँभले, और एक condition जो जल्दी मिलेगी: **शून्य से भाग**.

## कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

अब से हर project का rule: **AI driver है, आप navigator.** AI हर file टाइप करता है — HTML, CSS, JavaScript। आपका काम navigator का काम है: रास्ता plan करो, हर मोड़ जानो, हर गली check करो, और कभी मत कहो "AI ने लिखा, मुझे पता नहीं।" Driver चक्की घुमाता है — navigator को रास्ते की हर बात जाननी चाहिए।

1. **पहले काग़ज़ पर रास्ता plan करो।** Screen का नक्शा बनाओ। Buttons की list लिखो। खुद से पूछो: मैंने `5` दबाया तो क्या होगा? फिर `+`? फिर `=`? अगर कदम बोल नहीं पा रहे, तो plan अधूरा है — और driver के पास जाने को कुछ नहीं.
2. **AI से पहला version लिखवाओ — पूरा:**

   > Build a basic calculator as one HTML page with its CSS and one JavaScript file. A display line, and buttons for digits 0 to 9, add, subtract, multiply, divide, equals and clear — laid out as a clean button grid. Use plain functions for the four operations, addEventListener for every button, and a condition that shows a message when someone divides by zero.

   खोलो, और Module 1 में सीखे HTML और CSS को देखो — tags, classes, styles पहचानो। वहाँ कुछ भी अनजान नहीं होना चाहिए।
3. **AI से flow करवाओ — हर line नहीं।** पूछो:

   > Walk me through the complete flow: I click 1, then +, then 1, then =. Which function runs on each click, what does each one do, and what calls what — until the 2 shows on the display.

   अपनी screen पर उस चाल का पीछा करो। यह function यह करता है, वो यहाँ से call होता है, result वहाँ उतरता है। जब आप click-से-result तक की कहानी बिना मदद दोहरा सको, तो code आपका है — हर line रटना कभी मक़सद नहीं था।
4. **Driver की जाँच करो — हर button दबाओ,** सिर्फ़ अच्छे रास्ते नहीं: `8 / 0`, कुछ टाइप किए बिना `=`, जोड़ के बीच में `C`. Navigator वही पकड़ता है जो driver से छूट गया।
5. **बदलाव का order दो — एक बार में एक।** पहले predict करो क्या बदलेगा, फिर AI से एक छोटा बदलाव माँगो, वो कहाँ हाथ लगाया पढ़ो, run करो, और अपनी prediction से मिलाओ। वही predict-फिर-run, अब एक असली build पर।

## आप जो बदलाव करवाते हो

AI फिर भी drive करता है — आप पहले predict करते हो, order देते हो, फिर उसका काम check करते हो। हर बदलाव module का एक concept है, बस अलग कपड़ों में:

1. **Cannot divide by zero** लाल रंग में दिखाओ — condition ढूँढो, फिर display पर `style.color` लगाओ. *(condition + DOM)*
2. एक **decimal point** button जो एक ही number में दूसरा dot डालने से मना कर दे. *(condition)*
3. `=` दबाने के बाद अगला digit result पर चिपकने की जगह **नए हिसाब से शुरू** हो. *(state + condition)*
4. **Keyboard** भी चले — digits और operators टाइप करना buttons के बराबर काम करे. *(एक नया event: keydown)*

Order में करो। कोई बदलाव चौंकाए, तो AI से क्यों पूछो — फिर अपनी copy में एक line लिखो।

## इसे जानो, copy मत करो

इस page को खत्म होने से पहले, बिना देखे जवाब दो:

- आपके code का कौन सा हिस्सा उसी पल चलता है जब कोई `7` दबाता है?
- Condition ठीक कहाँ बैठी है जो गलत जवाब की रखवाली करती है?
- चार operations functions हैं, वही math चार जगह copies में क्यों नहीं?

हर सवाल के लिए line पर उँगली रख सकते हो — तो project आपका है, AI का नहीं।

<QuizBlock
  :questions="[
    { question: '7 button click होते ही आपके code में क्या होता है?', answer: 'Click event उस button पर लगे listener को चला देता है, और उसका function digit को display के text पर जोड़ देता है। Click होने तक कुछ नहीं चलता — event इंतज़ार कर रहा था।' },
    { question: 'Operations के लिए चार functions क्यों, हर button के अंदर वही math लिखने की जगह?', answer: 'एक बार लिखो, नाम दो, call करो — वही recipe वाला idea। Math एक जगह रहता है, तो उसे ठीक करना या बदलना एक edit है, चार नहीं।' },
    { question: 'Calculator में conditions कहाँ दिखती हैं?', answer: 'Rakhwali में: शून्य से भाग, दूसरा decimal dot, कुछ टाइप किए बिना equals, equals के बाद नई शुरुआत। गलत inputs को सँभाला जाता है, ignore नहीं।' },
    { question: '8 / 0 दबाओ और फिर =. User को क्या दिखना चाहिए — और error क्यों नहीं?', answer: 'एक साफ़ message जैसे Cannot divide by zero। Condition उसे math चलने से पहले पकड़ लेती है — user को शब्द दिखते हैं, crash कभी नहीं।' },
    { question: '0.1 + 0.2 टाइप करो और = दबाओ। क्या निकलेगा — और क्या आपका calculator खराब है?', answer: '0.30000000000000004 — JavaScript decimal numbers को लगभग store करता है। Run करने से पहले यही एक predict करो; लगभग किसी को यह आता नहीं दिखता।' },
    { question: 'Keyboard support वाले बदलाव में click की जगह keydown लगा। क्या वही रहा?', answer: 'Shape वही: एक event का नाम, फिर चलाने वाला function। अलग पल, वही addEventListener वाला idea।' }
  ]"
/>

<PageNextButton />
