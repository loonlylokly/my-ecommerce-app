## My E-commerce App

## 

Краткое описание возможных проблем: 
- Лучше использовать ISR, так как ssr и ssg уже по сути отсутсвуют в последних версиях nextjs14+. Можно например добавить `export const revalidate = 300;`, это самый простой вариант, а можно сделать ревалидацию про запросу на определенный роут из админки. Пример моего кода с ISR https://github.com/loonlylokly/slmax-meow-react-testovoe-zadanie
- Отсутвует парсинг данных с бэка. Желательно добавить какой-нибудь zod, чтобы типы данных между бэком и фронтом совпадали
- Нет обработки ошибок: нужно добавить not-found.tsx, global-error.tsx и обработку ошибок с бэка
- Уточню, что использовал RTK, а не просто Redux (он уже устарел, в его документации написано желательно использовать RTK), хотя я бы предпочел React Query
- Возможно фильтры поиска лучше добавить ещё и в строку поиска(searchParams). Это даст пользователю возможность удобно делиться ссылкой на каталог с уже отфильтрованными товарами. Но с другой стороны это упростит парсит данных магазина злоумышленниками.
- Следует написать больше тестов
- Желательно добавить Storybook, если проект будет разрастаться, то новым разработчикам будет удобнее влиться в работу, а также будет удобно сверять изменения в дизайне и тестировать их. (Пример моего кода со Storybook-ом https://github.com/loonlylokly/market_nft_private )
- Желательно сразу добавить интернационализацию. Даже если язык будет один, то удобно хранить все тексты в одном месте. А также в случае добавляния языков это будет сделать в разы проще. (Пример моего кода с интернационализацией в next.js с ним есть свои особенности из-за RSC https://github.com/loonlylokly/market_nft_private )
- Из мелких: забыл добавить husky, желательно более глубоко настроить eslint, вынести все тексты в отделное место(или добавить next-intl)

### Устанавливаем зависимости

```bash
npm i
# or
pnpm i
```
### Добавляем `.env.local` файл в корень проекта

```
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### Собираем проект
```bash
npm run build
# or
pnpm run build
```

### Запускаем проект

```bash
npm run start
# or
pnpm run start
```

### Тестируем проект

```bash
npm run test
# or
pnpm run test
```

Открываем [http://localhost:3000](http://localhost:3000) в своем браузере и видим результат.

Route (app)                              Size     First Load JS
┌ ○ /                                    137 B          87.3 kB
├ ○ /_not-found                          872 B            88 kB
├ ƒ /api/products                        0 B                0 B
├ ○ /cart                                2.04 kB         114 kB
├ ○ /products                            11 kB           162 kB
└ ● /products/[slug]                     1.84 kB         112 kB
    ├ /products/1
    ├ /products/2
    ├ /products/3
    └ [+37 more paths]
+ First Load JS shared by all            87.1 kB
  ├ chunks/24-a48fbc22d7f6725b.js        31.5 kB
  ├ chunks/b59efc48-a46ff3e3e4c080e9.js  53.6 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses getStaticProps)
ƒ  (Dynamic)  server-rendered on demand

