# PODD
Digital Shopping in an Analog World.

## TL;DR.
### [Demo App](https://podd-demo.herokuapp.com/)

PODD is built to reduce transaction pain and cost. Waste less time and money while leveraging more data.

PODD's demo is built as a PWA (progressive web app), to be viewed from your mobile phone. It performs best installed to your home screen when prompted.

## INTRO

Podd brings the online shopping experience to bricks and mortar.

**Customers**
- Compare prices at nearby stores
- Check inventory before making the trip
- Shop without a wallet using credit or direct debit
- View prices and pay in your prefered currency
- No more hunting for items, search and locate
- Personal ssistance is one click away
- One click SELF CHECKOUT aka no more lines

**Merchants**
- Automate inventory
- Gain insight into customer trends.
- Data driven product recommendations
- Offer self checkout without a large infrastructure investment
- Allocate employees to customer assistance instead of operating registers
- Pay no more than you currently do to process transactions
- PODD handles securing your transactions
- Recieve payments in your prefered currency.

## CUSTOMER VIEWS
![](https://github.com/philawsophizing/PODD/raw/master/readme_assets/customer_screens.jpg)

## MERCHANT VIEWS
![](https://github.com/philawsophizing/PODD/raw/master/readme_assets/merchant_screens.jpg)

## TECH
PODD will initially be built as a PWA (progressive web app) and then as a native iOs and Android app. A PWA caches static assets using service workers while allowing one system and code base across platforms.

 Podd uses new web api's including geolocation and push notifications, meaning little difference to a native app. Updating the app happens automatically without relying on customers downloading an update.

 Building a PWA also allows customers to test drive the app without commitment. Later choosing to install it to their home screen, or just visit it when needed. 

**Front End**
- Elm (superior rendering speed, and functional code base)
- Service workers (cache assets, to allow offline use and app feel)
- Web Sockets (live inventory, sessions, and communication)
- Geolocation (watches and updates stores, feeds to session management)
- Push notifications (alert when a store is PODD enabled)

**Server Side**
- Elixer (to manage concurrency, uptime using the Erlang VM)
- Machine learning OCR models for barcode and qr scanning
- Custom product insight and search algorithms
- Inventory control and messaging system

## BUSINESS

My vision behind PODD is to reduce transaction pain and cost, increase efficiency and leverage data.

PODD would be free for customers and raise money through merchant fees on transactions.

Customers can manage their payment methods with a digital and device agnostic wallet that doesn't suck.

Merchants reduce payment infrastructure, lower staff time spent processing transactions, improve customer's experience, and leverage better data.

## DEMO

### [Demo App](https://podd-demo.herokuapp.com/)

(Performs best installed to your home screen when prompted.)
