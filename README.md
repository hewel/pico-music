# React Template

This is a project template for [React](https://reactjs.org) apps. It lives at https://github.com/hewel/react-template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit hewel/react-template react-app
cd react-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

---

> ## Get started

### Install the dependencies...

npm:

```bash
cd react-app
npm install
```

yarn:

```bash
cd react-app
yarn
```

### ...then start webpack:

npm:

```bash
npm run dev
```

yarn:

```bash
yarn dev
```

Navigate to [localhost:7575](http://localhost:7575). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.

---

> ## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
