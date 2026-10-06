# 3.10 Project — Password Manager

पहला React build। इस module का सब कुछ एक app में उतरता है: components, props, lists, state — 2.6 वाला sessionStorage याद रखता है और 3.8 वाला React Router उसे pages देता है। आपके लिए नया: **वो views जो इस बात पर टिके हैं कि कौन logged in है** — admin सब देखता है, user सिर्फ़ shared वाले।

## आप क्या बनाते हो

एक password manager, बढ़ती मुश्किल के तीन क़दमों में:

1. **Manager का core** — entry जोड़ने का form (website, username/email, password), उसके नीचे saved entries की list, हर row पर edit और delete, और हर entry **sessionStorage** में — ताकि tab बंद होने तक refresh भी उन्हें रखे। सिर्फ़ dummy data — practice app में असली passwords कभी नहीं।
2. **दरवाज़ा, असली routes पर** — Login और Signup pages `/login` और `/signup` पर बने reusable input और button components से, और उनके बीच यात्रा React Router से। कोई भी signup चले और कोई भी password घुसे — server कोई नहीं। मक़सद है routes, shared components, और navigation।
3. **दो views — admin और user** — एक fixed admin password, app के अंदर ही जाँचा जाता है। Admin `/admin-login` से घुसता है और **हर** entry देखता है। सादा user `/login` से घुसता है और **सिर्फ़ shared वाली** देखता है। हर entry पर एक shared flag — role फ़ैसला करता है कौन सी rows render हों।

## कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

हर build वाला वही rule: **AI driver है, आप navigator।** आप रास्ता plan करते हो, हर मोड़ जानते हो, हर गली check करते हो — कभी यह नहीं कि "AI ने लिखा, मुझे पता नहीं।"

1. **पहले काग़ज़ पर plan।** एक entry क्या है — `{ id, website, username, password, shared }`? List कहाँ रहेगी — सबसे ऊपर वाले component का एक state array? कौन सा route कौन सा view दिखाए? Role login page से manager तक कैसे यात्रा करे — state, या sessionStorage? दस मिनट का काग़ज़ एक घंटे की उलझन बचाता है।
2. **AI से पहला क़दम लिखवाओ — manager का core:**

   > Build a React app (Vite, plain CSS) that manages passwords. A form adds an entry with website, username and a dummy password. Below it, show all saved entries as rows, using a reusable PasswordRow component with edit and delete buttons. Keep the entries array in state at the top, load it from sessionStorage on start, and save it back on every change. Give each entry a stable id. Use sessionStorage only, not localStorage.

3. **AI से flow करवाओ — हर line नहीं:**

   > Walk me through the full flow: I add an entry, state changes, the list re-renders, and sessionStorage gets the new copy. Which component holds the state, why do the rows not hold it, and where exactly does each id come from?

   उसे जीते जी पीछा करो। हर मोड़ आपका किया हुआ एक page है — props नीचे, events ऊपर, keys वाला map, सीधे लिखने की जगह setter।
4. **Driver की जाँच करो:** tab refresh करो — entries ज़िंदा रहती हैं। Tab बंद करके फिर खोलो — गायब। यही sessionStorage ने अपने वादे का काम निभाया। एक entry से कोई key delete करो और console की warning ढूँढो।
5. **फिर दूसरा क़दम direct करो — routes पर दरवाज़ा:**

   > Add react-router-dom with three routes: /login, /signup and /passwords. Login and Signup are built from shared reusable input and button components. Any email and password work — no server. After login, navigate to /passwords which shows the manager; a logout button returns to /login. Keep the logged-in flag in sessionStorage so a refresh keeps you in. Add a small top bar with the app name and a logout button.

6. **फिर तीसरा क़दम — दो views:**

   > Add a fourth route /admin-login with its own page — it asks for one fixed admin password, admin123, checked inside the app, no server. In the add-entry form, add a checkbox labelled Admin only. Each entry stores the flag: admin only, or shared with everyone. A user who logged in through /login sees only the shared entries. An admin who logged in through /admin-login sees all entries. Keep the logged-in role in sessionStorage next to the logged-in flag, and show a small badge on screen — Admin view or User view — so it is always clear who is looking.

7. **Driver की एक और जाँच:** user बन के घुसो — सिर्फ़ shared entries। Logout, फिर admin से घुसो — सब कुछ, badge बदला हुआ। बीच में refresh करो — role ज़िंदा रहता है। दो views, एक list, एक filter।

## आप जो बदलाव करवाते हो

1. हर password पर एक **show/hide** toggle — text dots बने और वापस। *(row के अंदर state)*
2. एक **search box** जो टाइप करते ही दिखने वाली list छान दे — admin सब खोजे, user सिर्फ़ shared। *(ऊपर state + filter — फिर वही 2.3)*
3. **Edit वही form भरे** — editing के वक़्त add button Save बन जाए। *(एक form, दो modes — एक state फ़ैसला करती है)*
4. हर view के लिए अलग शब्दों वाला **empty state**: users के लिए "No shared entries yet", admin के लिए "No entries yet"। *(conditional rendering)*
5. Admin-only rows पर एक **Admin badge** — admin एक नज़र में पहचान ले कौन सी rows users को नहीं दिखतीं। *(एक flag, एक conditional class)*

## इसे जानो, copy मत करो

अगले page से पहले, बिना देखे जवाब दो:

- Entries वाला state सबसे ऊपर क्यों रहता है, `PasswordRow` के अंदर क्यों नहीं?
- App फ़ैसला कहाँ करता है कि user कौन सी rows देखेगा — और एक जगह क्यों, हर row के अंदर नहीं?
- App sessionStorage में ठीक कहाँ लिखता है — और render के अंदर क्यों नहीं?
- Rows से keys हटा दो, तो सबसे पहले क्या टूटेगा?

<PageNextButton />
