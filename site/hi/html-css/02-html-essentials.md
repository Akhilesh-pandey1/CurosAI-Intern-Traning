# 1.2 HTML Essentials

Ek page, teen cheezein: tags jo actually use hote hain, structure jo har page share karta hai, aur forms. Memorize karne nahi aaye ho — pehchaanne aaye ho.

## Tags jo actually use hote hain

Har HTML tag ratne ki koshish mat karo. Common wale seekho, baaki zaroorat padne par search karo — achha reference hai [142elements.com](https://www.142elements.com/).

Roz ka set:

- `h1` se `h6` — headings, sabse important pehle. Ek page par ek hi `h1`.
- `p` — text ka paragraph.
- `a` — doosre page ka link.
- `img` — image dikhata hai.
- `ul` + `li` — bullet list aur uske items.
- `button` — jise user click karta hai.
- `div`, `section`, `header`, `nav`, `main`, `footer` — content group karne wale dabbe. `div` plain dabba hai; baaki matlab wale dabbe hain.

## Structure jo har page share karta hai

Aapke banaye jaane wale zyada tar pages aise dikhenge:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Browser tab mein dikhne wala page title</title>
  </head>
  <body>
    <header>Upar ki patti jisme site ka naam</header>
    <nav>Site mein ghumne ke links</nav>
    <main>
      <section>Page ka asli content</section>
    </main>
    <footer>Neeche ki patti jisme chhota print</footer>
  </body>
</html>
```

`head` mein wo settings hoti hain jo visitor padhta nahi — jaise tab ka title. `body` mein wo sab hota hai jo visitor dekhta hai.

## Forms — page input kaise leta hai

Form wahi hai jisse user aapko data deta hai: login, registration, search box.

```html
<form>
  <label for="full-name">Poora naam</label>
  <input id="full-name" type="text" required />

  <label for="email">Email</label>
  <input id="email" type="email" required />

  <button type="submit">Register</button>
</form>
```

Teen ideas kaafi weight utha lete hain:

- `label` + `input` jodi — har input ka ek label hona chahiye, `for` aur `id` se juda hua.
- `type` — browser ko batata hai ye kaisa data hai (`text`, `email`, `password`, `number`). Phir browser aapke liye check kar sakta hai.
- Validation attributes jaise `required` — bina kisi code ke free checking.

## Watch karo

<VideoSlot topic="Common HTML tags aur page structure" />

<VideoSlot topic="HTML forms basics" />

## Hands-on

1. AI se maango: "Ek chhota profile card page banao — header mein naam, ek photo, about paragraph, skills list, aur contact form jisme naam, email aur message ho."
2. Browser mein chalao.
3. AI se har tag explain karwao jo pehchana nahi.
4. Khud modify karo: footer jodo, ek skill hatao, email input optional banao, phone number field jodo.
5. Har change ke baad observe karo — ek time par ek change.

<PageCheckOff />
