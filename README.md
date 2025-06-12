# 🧰 devfolio-cli

An interactive terminal-based portfolio & resume CLI template for developers.

---

## 🚀 Quick Start

```bash
git clone https://github.com/yourusername/devfolio-cli.git
cd devfolio-cli
npm install
node bin/cli.js
```

Or:

```bash
./start.sh  # Installs and links the CLI globally
devfolio
```

---

## 🔧 Customize Your Profile

Edit the file:

```
data/config.json
```

Change your name, projects, website, GitHub link, etc.

---

## 🧑‍💻 Publish Your Own CLI

To turn it into your own `npx yourname` CLI:

1. Edit `package.json` → change the `name` and `bin` fields
2. Run `npm login`
3. Run:

```bash
npm publish --access public
```

Then people can use:

```bash
npx yourname
```

---

## 🌱 Make It Yours

Click “Use this template” at the top right of this GitHub repo to start your own!

MIT © [Your Name]
