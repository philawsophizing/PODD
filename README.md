# PODD
Digital Shopping in an Analog World.

## TL;DR.
### [Demo App](https://podd-demo.herokuapp.com/)

PODD reduces transaction pain and cost. Save time and money while leveraging data.

The PODD demo is a progressive web app (PWA), to be viewed from your mobile phone. It performs best installed to your home screen when prompted.

## INTRO

PODD brings the online shopping experience to bricks and mortar.

**Customers**
- One click self-checkout; no more lines.
- Compare prices at nearby stores, check inventory before making the trip.
- Shop with a virtual wallet using credit or direct debit.
- View prices and pay in your preferred currency when travelling.
- Request personal assistance with one click.

**Merchants**
- Offer self-checkout without investing in bespoke hardware or software.
- Eliminate shrinkage.
- Automate inventory management.
- Create insight into customer trends.
- Allocate employees to customer assistance instead of operating registers.
- PODD secures your transactions.
- Recieve payments in your preferred currency.
- Industry standard transaction fees.

## CUSTOMER VIEWS
![](https://github.com/philawsophizing/PODD/raw/master/readme_assets/customer_screens.jpg)

## MERCHANT VIEWS
![](https://github.com/philawsophizing/PODD/raw/master/readme_assets/merchant_screens.jpg)

## TECH

**Application**

PODD will initially be built as a PWA and then as a native iOs and Android app. A PWA caches static assets using service workers while allowing one system and code base across platforms.

 PODD uses new web api's including geolocation and push notifications, meaning little difference to a native app. Updating the app happens automatically without relying on customers downloading an update.

 Building a PWA also allows customers to test drive the app without commitment. Later choosing to install it to their home screen, or just visit it when needed.
 
 **Hardware**

External to stores PODD will track customers location using the GPS chip on their phone. Once customers enter a PODD enabled store their precise location will be tracked using wifi triangulation. When items are scanned into inventory a RFID tag can be printed that can be checked against the customers cart when they're leaving to drastically reduce shrinkage and improve inventory management.
 
 - Merchants preferred devices
 - RFID printer linked to merchant app (scan item into inventory, attach RFID sticker.
 - Wifi relays to track customers internally.
 - RFID detector to compare items leaving the store to customers cart.

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
