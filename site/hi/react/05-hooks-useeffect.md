# 3.5 Hooks — useEffect

State और refs component के *अंदर* रहते हैं। पर apps **बाहर की दुनिया** से भी बात करती हैं: weather माँगो, timer चलाओ, tab का title बदलो। ऐसे काम को **side effect** कहते हैं — और side effects का अपना hook है।

## useEffect — जो render matter करता है, उसके बाद

```jsx
import { useEffect, useState } from "react"

function WeatherNow() {
  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true"
      )

      const data = await response.json()

      setTemperature(data.current_weather.temperature)
    }

    getWeather()
  }, [])

  return <p>Pune right now: {temperature ?? "..."}°C</p>
}
```

`useEffect` एक function लेता है और उसे **तब चलाता है जब** component screen पर उतर चुका होता है। अंदर `getWeather` data का इंतज़ार `await` से करता है — बिल्कुल page 2.7, बस अब वो एक component के अंदर रहता है। शुरू में `temperature` null है, तो `??` की जगह `...` दिखता है। जब `setTemperature` असली number के साथ चलता है, component re-render होता है — hooks खुद आपस में जुड़ते हैं।

## Dependency array — पूरा hook एक line में

आख़िर में लगा वो `[]` फ़ैसला करता है कि effect **कब** दोबारा चले:

- `[]` — खाली: **एक बार**, पहले render के बाद। "On mount।" Data fetch करना यहीं बैठता है।
- `[city]` — पहले render के बाद **और हर बार जब `city` बदले**। "फिर fetch करो — city बदल गई।"
- Array ही नहीं — **हर** render के बाद। लगभग हमेशा एक गलती: effect state बदलता है, state re-render कराती है, effect फिर चलता है — एक infinite loop जिसे आप एक बार मिलोगे और कभी नहीं भूलोगे।

एक और टुकड़ा: कुछ effects को अपने पीछे सफ़ाई करनी पड़ती है। एक function return करो और React उसे अगले चलने से पहले, और component के screen से जाते वक़्त चला देता है:

```jsx
useEffect(function () {
  const timerId = setInterval(tick, 1000)
  return function () { clearInterval(timerId) }
}, [])
```

Cleanup छोड़ दो, तो आपका चलाया हर timer हमेशा ज़िंदा रहता है, पिछले के ऊपर टिका हुआ।

<VideoSlot link="https://www.youtube.com/watch?v=bio2eP5YXyw" topic="useEffect — side effects, the dependency array and cleanup, watch once" />

## Hands-on — बाहर से आया data

1. ऊपर वाला `WeatherNow` बनाओ। Predict करो fetch हवा में चल रहा है उस वक़्त क्या दिखेगा — फिर run करो, check करो।
2. AI से null वाले state के लिए एक **loading** line और fetch फेल होने पर एक **error** card मँगवाओ। Predict करो कौन सा state बदलाव कौन सी screen उठाता है।
3. एक refresh button जोड़ो: एक `refreshCount` state, click पर बढ़ता हुआ, dependency array में बैठा। पहले predict करो — effect दोबारा क्यों चलता है?
4. अपनी cleanup के साथ timer बनाओ। AI से पूछो बिना return वाले function के क्या बिगड़ेगा — फिर अपनी copy में एक line लिखो।

<QuizBlock
  :questions="[
    { question: 'Side effect क्या होता है?', answer: 'वो काम जो component बाहर की दुनिया से करता है — data fetch करना, timer चलाना, tab का title बदलना। useEffect उसे render के बाद चलाता है।' },
    { question: 'useEffect कब चलता है?', answer: 'Component के screen पर उतरने के बाद — React पहले बनाता है, फिर effect चलता है।' },
    { question: 'खाली [] वाला useEffect कितनी बार चलता है?', answer: 'एक बार, पहले render के बाद। Data fetch करना यहीं बैठता है।' },
    { question: 'Dependency array में [city] होने पर क्या बदलता है?', answer: 'Effect पहले render के बाद चलता है और फिर हर बार जब city बदले — फिर fetch करो, city बदल गई।' },
    { question: 'Dependency array ही न लगाना लगभग हमेशा गलती क्यों है?', answer: 'तब effect हर render के बाद चलता है। अगर वो state set करता है, तो वही re-render उसे फिर चला देता है — infinite loop।' },
    { question: 'Effect से function return क्यों करते हैं?', answer: 'वही cleanup है — React उसे अगले चलने से पहले और component के screen से जाते वक़्त चला देता है। बिना इसके हर चलाया timer हमेशा ज़िंदा रहता है।' }
  ]"
/>

<PageNextButton />
