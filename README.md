# Product Backend

## Intro:

Hej! Detta är en NodeJS+Express backend som hjälper min frontend att visa upp produkter och dess priser
under vissa datum i en snygg tabell. Produkterna ligger lagrade i min MongoDB.
Tack för att ni tar er tiden att kika igenom min kod!
Allt gott,
Rasmus, er framtida kollega ;)

## Live Demo

Exempel 1: "https://arbetsprovserver.herokuapp.com/database-find/27773-02"
Exempel 2: "https://arbetsprovserver.herokuapp.com/database-find/20866-02"

## Kod som är intressant för er att kolla på

```
src
└───loaders/loaders.js              # Global package imports for Node App
└───models                          # Database models (Just one for Products)
└───routes/client/index.js          # The endpoint the frontend uses to GET product-price-info
```

## Installera programmet och kör lokalt på er dator:

### Prerequisites:

-   CommandLine/Terminal installerat på din dator
-   NodeJS version 14.0+
-   NPM version 6.0+ CLI installerat
-   GIT CLI installed

### Command line - Kör programmet:

1. Öppna din Commandline
2. Kör kommandot `git clone https://github.com/RasmusIsraelsson/productserver.git`
3. Gå in i productserver mappen genom att köra kommandot `cd productserver`
4. Kör `npm i` för att installera alla programmets dependencies
5. Kör `npm run dev` för att köra programmet

### Kontakt:

Om ni har några frågor kan ni alltid nå mig på rasmus.israelsson1@gmail.com
