# 1.1 Start Here

Module 1 में आपका स्वागत है। किसी भी tag या style से पहले, यह page दो चीज़ें समझाता है: web page आपके browser तक कैसे पहुँचता है (client-server idea), और HTML और CSS असल में क्या हैं।

## User side vs server side — आसान शब्दों में

- **User side (frontend)** — जो browser visitor के device पर करता है। HTML, CSS और JavaScript यहीं रहते हैं। हर visitor को ये files मिलती हैं और वह अपने phone या laptop पर चलाता है।
- **Server side (backend)** — जो आपके control वाले computer पर होता है, page आने से पहले। वह data तैयार करता है: page क्या दिखाएगा, क्या save होगा।

दो sides आपस में कैसे बात करते हैं:

- **Request** — आप form भरते हो और submit करते हो, तो आपका browser वह information server को भेजता है। server उसे check करके database में save कर देता है (या जो भी page को चाहिए होता है)।
- **Response** — server जवाब वापस भेजता है। इसी से पता चलता है कि आपका request सच में हो गया — page success message दिखाता है या अगली screen खुलती है।

एक simple rule: *जो दिख सकता है, click हो सकता है, या हिल-डुल सकता है — वह user side है। data save करना हो, check करना हो, या छुपा के calculate करना हो — वह server side है।* server side से आपकी मुलाकात Python module में होगी।

<VideoSlot link="https://youtu.be/a5CgfS0Y4Uc" topic="Client Server Architecture in detail" />

## HTML और CSS क्या हैं

एक web page को इंसान की तरह सोचो:

- **HTML कंकाल (skeleton) है।** page को structure देता है — यह heading है, यह paragraph है, यह form है, यह image है। HTML के बिना page होता ही नहीं।
- **CSS त्वचा और कपड़े है।** यह decide करता है page कैसा दिखता है — color, spacing, size, layout। वही कंकाल, अलग कपड़े, बिल्कुल अलग look।

बस यही idea है। HTML और CSS design के लिए हैं, इसमें ज़्यादा logic नहीं है। आप बताते हो page *क्या* है (HTML) और *कैसा दिखता* है (CSS), बाकी browser संभाल लेता है।

<PageNextButton />
