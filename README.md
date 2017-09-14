# PODD
Digital Shopping in an Analog World.

## TL;DR.
[Demo App](https://podd-demo.herokuapp.com/)

PODD is built to reduce transaction pain and cost. Waste less time and money with more data.

PODD's demo is built as a PWA (progressive web app), to be viewed from your mobile phone. It performs best installed to your home screen when prompted.

## INTRO

Podd brings the online shopping experience to bricks and mortar.

**Customers**
- Compare prices at nearby stores
- Check inventory before making the trip
- Shop without a wallet using credit or direct debit
- View prices and pay in your currency
- No more hunting for an items, search and locate
- Assistance one click away
- One click SELF CHECKOUT aka no more lines

**Merchants**
- Automate inventory
- Gain insight into customer trends, and product recommendations
- Offer self checkout without large infrastructure investment
- Allocate employees to customer assistance instead of operating registers
- Pay no more than you currently do to process transactions
- PODD handles securing your transactions
- Recieve payments in your prefered currency.

## CUSTOMER VIEWS
![](https://github.com/philawsophizing/PODD/raw/master/readme_assets/customer_screens.jpg)

## MERCHANT VIEWS
![](https://github.com/philawsophizing/PODD/raw/master/readme_assets/merchant_screens.jpg)

## TECH
PODD is built as a PWA (progressive web app). It caches static assets using service workers, allows one system and code base across platforms and uses new web api's including geolocation and push notifications.

**Front End**
- Elm (superior rendering speed, and functional code base)
- Service workers (cache assets, to allow offline use and app feel)
- Web Sockets (live inventory, sessions, and communication)
- Geolocation (watches and updates stores, feeds to session management)
- Push notifications (alert when a store is PODD enabled)

**Server Side**
- Elixer (to manage concurrency, uptime using the Erlang VM)
- Machine learning OCR models for barcode and qr scanning

## BUSINESS

My vision behind PODD is to reduce transaction pain and cost, increase efficiency and leverage data.

PODD would be free for customers and raise money through merchant fees on transactions.

Customers can manage their payment methods with a digital/device agnostic wallet that doesn't suck.

Merchants reduce payment infrastructure, lower staff costs on transactions, improve customer experience, and can leverage better data.

## DEMO

### [Demo App](https://podd-demo.herokuapp.com/)
