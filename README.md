# Mini Turn Based

Mini Turn Based is a small turn-based RPG built with Next.js, React, TypeScript, and Tailwind CSS. You enter a hero name, travel between Town and Battle, fight random enemies, earn coins, and buy items from a simple shop.

## Features

- Hero name entry screen
- Turn-based battle loop
- Random enemy names and HP
- Player HP and enemy HP tracking
- Monster coin rewards
- Kill counter
- Shop modal for buying items
- Potion purchase for healing
- Sword purchase for bonus attack damage
- Game over and restart flow

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Open the app

Go to [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - build the app for production
- `npm run start` - run the production build
- `npm run lint` - run ESLint

## How To Play

1. Enter your hero name.
2. Go to the forest to start a battle.
3. Attack enemies until their HP reaches zero.
4. Earn coins when enemies are defeated.
5. Return to Town to buy a potion or sword.
6. Use the sword to increase your attack damage.
7. Keep fighting and see how many monsters you can defeat.

## Notes

- The main game logic currently lives in `app/game/page.tsx`.
- The shop uses a reusable modal for item purchases.
- The project is set up for deployment on Vercel.
