# 3.11 Project — Weather Dashboard

Module का आख़िरी build — आपका React app internet पर बैठे **असली server** से बात करता है, असली product के कपड़ों में: sidebar, navbar, KPI cards। Page 2.10 ने यही plain JavaScript में बनाया था; वही काम dashboard बनते देखो। Fetch और await `useEffect` में उतरते हैं, loading और error conditional rendering बन जाते हैं, और data बिना एक line DOM code के screen तक पहुँचता है।

## आप क्या बनाते हो

एक weather dashboard, तीन क़दमों में:

1. **पहले fixed city** — app खुलता है और Pune का temperature, wind, और हालात दिखाता है — **Open-Meteo API** से — मुफ़्त, कोई key नहीं, कोई signup नहीं। जब तक fetch हवा में है: loading state। फेल हो गया: error state। दोनों design किए हुए, दोनों हादसा नहीं।
2. **Dashboard का ढाँचा** — एक **sidebar** जिसमें app का नाम और fixed cities की list — उनके नाम और coordinates file के ऊपर एक array में — किसी city पर click, उसका weather उतरे, active वाली highlighted रहे। ऊपर एक **navbar**: बाईं तरफ title, दाईं तरफ user का नाम। तीन **KPI cards** की एक कतार — temperature, wind, condition — हर एक reusable `KpiCard` component जिसे props पोषित करते हैं। नीचे बड़ा weather card।
3. **फिर कोई भी city** — एक search box। Geocoding API नाम को coordinates में बदलता है, फिर weather की call चलती है — बिल्कुल 2.10 वाली दो-calls वाली chain, अब hooks में रहती हुई। मिली हुई city sidebar की list में जुड़ जाती है।

## कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

1. **Data का रास्ता काग़ज़ पर plan करो।** City का नाम → latitude, longitude → temperature। कौन सा state किस मंज़िल को थामे — `cityName`, `coordinates`, `weather`, `loading`, `error`? Dependency array में कौन बैठे? चुनी हुई city किस component की? वही plan पूरा app है।
2. **AI से पहला क़दम लिखवाओ — fixed city:**

   > Build a React weather dashboard (Vite, plain CSS) that shows the current weather for Pune from the Open-Meteo API — no key. On mount, useEffect fetches https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true. Use three states: loading, error, weather. While loading show a loading card, on failure show an error card with a retry button, and on success show the city, a big temperature number, wind speed and conditions in a clean card. Conditional rendering picks the card.

3. **AI से तीनों शक्लें करवाओ:**

   > Walk me through all three screens: what exactly sets loading to true, what flips it to false, what moves it to error, and which state change causes each redraw. Why does the fetch live inside useEffect and not in the component body?

   तीनों शक्लें — loading, error, data — अपने शब्दों में दोहरा सकते हो, तो React का ज़्यादातर हिस्सा समझ गए: state फ़ैसला करती है, screen पीछे-पीछे चलती है।
4. **Driver की जाँच करो:** internet काटो और reload करो — error card की prediction उसके आने से पहले करो। फिर fetch का address जान-बूझ कर बिगाड़ो और देखो user की आँख के सामने क्या उतरता है।
5. **फिर दूसरा क़दम direct करो — dashboard का ढाँचा:**

   > Turn this into a real dashboard layout. A left sidebar: app name on top, then a list of fixed cities — Pune, Mumbai, Delhi, Bengaluru, Chennai — with their names and coordinates in one array at the top of the file, rendered with map. Clicking a city fetches its weather, and the active city stays highlighted. A top navbar: dashboard title on the left, a user name on the right. In the main area, a row of three KPI cards — temperature, wind speed, condition — built from one reusable KpiCard component that takes label, value and icon as props. Below the row, keep the big weather card. Grid layout, plain CSS, generous spacing.

6. **Driver की फिर जाँच करो:** पाँचों cities पर click करके घूमो। हर बार loading दिखी? Highlight पीछे-पीछे आया? अब दो cities के बीच तेज़ी से switch करो और predict करो कौन सी जीतती है — फिर AI से पूछो उसने कैसे पक्का किया कि धीमी call नई call के ऊपर नहीं चढ़ेगी।
7. **फिर तीसरा क़दम — search:**

   > Add a search box. First call https://geocoding-api.open-meteo.com/v1/search?name=CITY to get the coordinates, then fetch the weather for them. If the city is not found, show a not-found card — not a crash. Keep loading, error and data as separate states through the whole two-call chain. When a city is found, add it to the sidebar list so it behaves like the fixed ones.

## दिखने में चट करने वाला बनाओ — design आप direct करो

Brief कहता है dashboard, form नहीं। यहाँ आप सबसे ज़्यादा navigate करते हो:

1. **पहले grid टिके** — sidebar fixed, main area साँस लेता हुआ। KPI cards एक सीध की कतार में बराबर — काम करे props, एक जैसा रखे CSS।
2. **बड़े card के अंदर hierarchy** — सबसे ऊपर city, एक बड़ा temperature number, उसके नीचे wind और condition। हर element अपनी जगह वज़न रखता हो।
3. **Sidebar ज़िंदा रहे** — active city highlighted, बाक़ी पर hover वाला हाल। Module 1 का CSS, अब React की सेवा में।
4. **बाक़ी states को भी कपड़े पहनाओ** — loading और error वाली screens भी वही design का ख़याल रखें। Users उन states में असली वक़्त बिताते हैं।

## इसे जानो, copy मत करो

खुद को done कहने से पहले, बिना देखे जवाब दो:

- अब जब sidebar के clicks city बदलती हैं, dependency array में कौन सी state बैठेगी — और `[]` वहीं रह जाए तो क्या टूटेगा?
- KPI cards props लेते हैं, `weather` खुद क्यों नहीं पढ़ते?
- Not-found की जाँच chain में कहाँ बैठती है — weather की call से पहले या बाद — और क्यों?
- दोनों API calls के बीच user क्या देखता है, और वही screen कौन सी state चलाती है?

<PageNextButton />
