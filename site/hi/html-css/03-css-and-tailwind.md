# 1.3 CSS and Tailwind CSS

एक page पर दो चीज़ें। पहला concept — CSS असल में है क्या। यह concept कभी नहीं बदलता। फिर tool — Tailwind CSS, जिससे आजकल ज़्यादातर teams pages पर styling करती हैं। यह tool किसी भी साल बदल सकता है। Concept सीखो, tool use करो, कुछ भी memorize मत करो।

## CSS actually करता क्या है

CSS styling language है। हर CSS rule का एक ही दो-हिस्सों वाला shape होता है — **element को pick करो, उसकी properties बदलो**:

```css
h1 {
  color: navy;
  font-size: 32px;
}
```

"सारे `h1` को pick करो और उनका text navy और 32 pixels कर दो।" CSS हमेशा बस इतना ही करती है। अलग pickers, अलग properties, पर shape हर बार एक ही।

रोज़ दिखने वाली properties:

- `color`, `background-color` — text का color और box का color.
- `font-size`, `font-weight` — text कितना बड़ा और कितना मोटा है।
- `padding` — box के **अंदर** की जगह, edge और content के बीच।
- `margin` — box के **बाहर** की जगह, जो दूसरे boxes को दूर धकेलती है।
- `border`, `border-radius` — outline और गोल corners.
- `width`, `height` — box का size।

Real projects में आप tags को direct style कम करते हो। Element को एक **class** देते हो — एक नाम का label — और उसी class को style करते हो:

```html
<button class="primary-button">Register</button>
```

```css
.primary-button {
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
}
```

HTML के पास नाम है, CSS के पास look। यही split याद रखो — Tailwind अभी इसे हटाने वाला है।

<VideoSlot link="https://youtu.be/b7PlBCjAJco" topic="CSS video — watch once for the basic idea, do not memorize" />

## Tailwind CSS — जो framework हम use करते हैं

इतनी CSS हाथ से लिखते-लिखते, जैसे-जैसे pages बड़े होते हैं, मुश्किल होने लगती है। इसलिए developers ने **frameworks** बनाए — CSS के ऊपर ready-made systems, जहाँ common solutions पहले से छोटे नामों के नीचे मौजूद हैं। Tailwind CSS वह framework है जो आज ज़्यादातर teams use करती हैं, और उसका एक बड़ा idea है: **दूसरी file में CSS लिखना बंद करो — छोटे ready-made classes सीधे HTML पर लगा दो।** हर class एक छोटा काम करती है।

ऊपर वही button, दोनों तरीकों से:

```html
<!-- Plain CSS: नाम HTML में, look दूसरी file में -->
<button class="primary-button">Register</button>
```

```html
<!-- Tailwind: नाम और look साथ-साथ -->
<button class="bg-blue-500 text-white px-5 py-3 rounded-lg">Register</button>
```

ना दूसरी file, ना बनाया हुआ नाम। Classes पढ़ो, और button खुद अपनी कहानी बता देता है:

- `bg-blue-500` — background, blue, shade 500.
- `text-white` — white text.
- `px-5 py-3` — left-right space, top-bottom space.
- `rounded-lg` — बड़े गोल corners.

## Tailwind के core हिस्से

पूरी class list की ज़रूरत नहीं — वह किसी के पास नहीं है। Groups चाहिए, ताकि आप *पहचान* सको कि कोई class क्या कर रही है:

- **Spacing** — `p-4`, `px-5`, `py-3`, `m-4`, `gap-4` — padding, margin, और items के बीच की जगह.
- **Colors** — `bg-blue-500`, `text-gray-700`, `border-red-300` — किस चीज़ को color, कौन सा color, कौन सा shade.
- **Text** — `text-sm`, `text-xl`, `font-bold` — size और मोटाई.
- **Layout** — `flex`, `grid`, `items-center`, `justify-between` — boxes कैसे बैठते और line में लगते हैं.
- **States** — `hover:bg-blue-700` — "जब mouse ऊपर हो, तो इसकी जगह यह करो।"

ध्यान दो — हर class एक ही pattern follow करती है: *क्या + कौन सा + कितना।* Pattern एक बार दिख गया, तो unreadable classes खुद पढ़ने लगती हैं। बाकी के लिए — [Tailwind docs](https://tailwindcss.com/docs) search करो या AI से पूछो।

<VideoSlot link="https://youtu.be/-g969furGik" topic="Tailwind CSS video — watch once for the basic idea, do not memorize" />

## Responsiveness — जहाँ Tailwind चमकता है

Responsive मतलब **एक page जो खुद को reshape कर लेता है** — phone, tablet, और desktop के लिए। तीन अलग sites नहीं — एक page जो adjust हो जाता है।

Plain CSS में हर screen size के लिए अलग block लिखते हो:

```css
@media (min-width: 768px) {
  .card-list {
    flex-direction: row;
  }
}
```

Tailwind में वही चीज़ एक class है जिस पर screen-size का prefix लगा है:

```html
<div class="flex flex-col gap-4 md:flex-row md:gap-6">
```

पढ़ो: "cards को column में stack करो। `md` (tablet) size से ऊपर, उन्हें row में लगाओ, बड़े gaps के साथ।" Prefixes stack होते हैं — `md:`, `lg:`, `xl:` — तो element का पूरा behavior एक ही line में बैठता है, ठीक वहीं जहाँ element है। ना दूसरी file, ना ढूँढने के लिए अलग media-query blocks। Teams का Tailwind पर प्यार की सबसे बड़ी वजह यही है: responsiveness पढ़ने वाली चीज़ बन जाती है, सँभालने वाली नहीं।

बनाने से पहले एक शांत बात: Tailwind आज का tool है, और tools बदलते हैं — कुछ सालों बाद कुछ और आगे हो सकता है। इस page के CSS ideas — element pick करो, properties बदलो, padding vs margin, screen sizes — ये नहीं बदलते। तो tool के साथ खेलो, पर concept सीखो।

## Hands-on — अपना portfolio दो बार restyle करो

पिछले page पर बनाया हुआ portfolio page लो। अभी वो plain HTML है — perfect। उसे दो बार style करोगे और असली फर्क खुद महसूस करोगे:

1. **Round 1 — normal CSS.** AI से एक बार में एक हिस्सा माँगो: "Style only the header of my portfolio with normal CSS — one separate .css file." Code पढ़ो, खुद एक चीज़ बदलो, और देखो क्या हिला। जकड़न notice करो: दो files, बार-बार आगे-पीछे जाना, हर चीज़ के लिए class का नाम सोचना।
2. **Round 2 — वही header अब Tailwind से.** AI से कहो: "Redo the same header with Tailwind classes on the HTML — no separate file." दोनों versions side by side रखो। Look एक ही, पर एक file और कोई बनाया हुआ नाम नहीं — इसीलिए teams Tailwind चुनती हैं।
3. Page का बाकी हिस्सा Tailwind के तरीके से करो, हिस्सा-हिस्सा — skills list, projects, contact form। हर हिस्से के बाद: हर class पढ़ो, जो पता नहीं उसके बारे में पूछो, और आगे बढ़ने से पहले खुद एक चीज़ बदलो।
4. एक section responsive करो: उस पर `flex flex-col md:flex-row` लगाओ, browser का किनारा पकड़ के छोटा करो, और देखो वो पलटता है।

<QuizBlock
  :questions="[
    { question: 'क्या Tailwind classes memorize करनी ज़रूरी हैं?', answer: 'नहीं। कोई नहीं रटता। Groups चाहिए — spacing, colors, text, layout, states — ताकि class को पहचान सको कि वो क्या करती है, और बाकी के लिए search या AI।' },
    { question: 'हर CSS rule, किसी भी tool में, एक ही दो-हिस्सों वाला shape रखता है। वो क्या है?', answer: 'Element को pick करो, उसकी properties बदलो। Plain CSS हो, Tailwind हो, कुछ और — सब आखिर में बिल्कुल यही करते हैं।' },
    { question: 'bg-green-700 class में हर हिस्सा क्या बताता है?', answer: 'bg — क्या बदलेगा (background)। green — कौन सा color। 700 — कितना गहरा shade। यही what-which-how-much pattern सारी Tailwind classes में चलता है।' },
    { question: 'रिया button को अलग .css file में style करती है, अर्जुन button tag पर Tailwind classes लगाता है। किसका button दूसरी file खोले बिना पूरा समझ आ जाएगा?', answer: 'अर्जुन का। Tailwind look को element पर ही रखता है, तो button की पूरी कहानी एक ही जगह बैठी है।' },
    { question: 'किसी element पर lg:grid-cols-3 दिखा। lg: prefix का मतलब क्या है?', answer: 'बड़ी screens से ऊपर items को तीन columns में लगाओ। उससे नीचे normal classes चलती हैं — इसी से एक page phone और desktop के लिए खुद को reshape कर लेता है।' },
    { question: 'एक card पर rounded-lg है। आपने उसे हटा के rounded-full लगा दिया। क्या होगा?', answer: 'Corners हल्के गोल से पूरे गोल हो जाएँगे। हर class एक छोटा काम करती है — बदलो, तो बस वही काम बदलता है।' },
    { question: 'अगले साल आपकी team Tailwind की जगह नया framework ले ले। क्या मज़बूत रखना होगा ताकि उसे दर्द न हो?', answer: 'CSS के concepts — element pick करना, properties बदलना, padding vs margin, screen sizes। Frameworks बार-बार बदलते हैं; उनके नीचे के concepts नहीं।' }
  ]"
/>

<PageNextButton />
