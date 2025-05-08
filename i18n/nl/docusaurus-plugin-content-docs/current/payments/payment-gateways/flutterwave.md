---
sidebar_position: 5
---

# Flutterwave Overzicht

Flutterwave is een betaalgateway die wordt ondersteund in Nigeria, Ghana, Kenia, Zuid-Afrika, Oeganda, Tanzania, Verenigde Staten, Verenigd Koninkrijk en de rest van Europa.

Naast de lokale kaarten van deze landen/regio's, staat Flutterwave u ook toe om betalingen te ontvangen van alle MasterCard- en Visa-kaarten.

## Hoe Flutterwave-betaalgateway instellen

1. **Log in** op uw eCommerce-beheerpaneel
2. Ga naar ***Instellingen → Betalingen*** in uw beheerpaneel
3. Klik op de "**Betaalmethode toevoegen**" link
4. Als beschikbaar met uw winkelvaluta, selecteer "**Flutterwave**" als uw betalingsprovider (indien niet beschikbaar, zie de sectie [Flutterwave is niet beschikbaar met uw winkelvaluta](#flutterwave-is-niet-beschikbaar-met-uw-winkelvaluta) hieronder)
5. Klik in de sectie "**Betaalmethode inschakelen**" op de toggle om de betaalmethode in te schakelen
6. Voer de "**Geheime sleutel**" van uw Flutterwave-account in en klik op de **Verzenden** knop

### API-sleutel verkrijgen voor initiële installatie

1. Ga naar het Instellingen-gebied van uw Flutterwave-dashboard
2. Kies het tabblad Ontwikkelaars en selecteer API-sleutels. Deze sectie toont uw Test API-sleutels en Live openbare sleutels
3. Klik op **Geheime sleutel genereren** om uw live geheime sleutel te verkrijgen. Een authenticatiecode wordt naar uw e-mailadres gestuurd
4. Voer de 7-cijferige authenticatiecode in die u in uw e-mail heeft ontvangen

### Als u al een API-sleutel heeft en nieuwe wilt genereren

1. Ga naar de Instellingen sectie in uw Flutterwave-dashboard
2. Navigeer naar de API-sleutels optie onder het tabblad Ontwikkelaars
3. Klik op **Geheime sleutel genereren** om live API-sleutels te verkrijgen
4. Kies de gewenste vervaldatum voor uw huidige API-sleutels
5. Voer de 7-cijferige authenticatiecode in die u heeft ontvangen en klik op **Nieuwe API-sleutels genereren**

### Sandbox-modus inschakelen voor testen

U kunt ook de Sandbox-modus inschakelen om de sleutel te testen:

1. Klik op de **Meer opties** op dezelfde pagina en klik op de toggle om de Sandbox-modus in te schakelen
2. Schrijf dezelfde sleutels op in het "**test Geheime sleutel**" invoervak om de Flutterwave-betaalmethode bij het afrekenen te testen

## Flutterwave ondersteunde valuta's

Flutterwave ondersteunt de volgende valuta's:

| **VALUTANAAM** | **VALUTACODE** |
|----------------|----------------|
| Verenigde Staten Dollar | USD |
| Britse Pond | GBP |
| Canadese Dollar | CAD |
| Centraal-Afrikaanse CFA Franc | XAF |
| Chileense Peso | CLP |
| Colombiaanse Peso | COP |
| Egyptische Pond | EGP |
| SEPA | EUR |
| Ghanese Cedi | GHS |
| Guinese Franc | GNF |
| Keniaanse Shilling | KES |
| Malawische Kwacha | MWK |
| Marokkaanse Dirham | MAD |
| Nigeriaanse Naira | NGN |
| Rwandese Franc | RWF |
| Sierra Leoonse Leone | SLL |
| São Tomé en Príncipe dobra | STD |
| Zuid-Afrikaanse Rand | ZAR |
| Tanzaniaanse Shilling | TZS |
| Oegandese Shilling | UGX |
| West-Afrikaanse CFA Franc BCEAO | XOF |
| Zambiaanse Kwacha | ZMW |

Voor de laatste lijst, bekijk de [valuta's waarin u kaarten kunt belasten bij Flutterwave](https://flutterwave.com/tz/support/general/what-are-the-currencies-accepted-on-flutterwave).

## Flutterwave is niet beschikbaar met uw winkelvaluta

Als Flutterwave-betaling niet beschikbaar is vanwege uw winkelvaluta, kunt u deze betalingsprovider niet selecteren. Om dit probleem op te lossen, moet u de valuta van uw winkel wijzigen naar een valuta die Flutterwave ondersteunt.

Om de valuta van uw winkel te wijzigen:

1. Ga naar ***Instellingen → Algemeen*** in uw eCommerce-beheerpaneel
2. Klik op de "**Standaarden en formaten**" instellingen
3. Selecteer in het vervolgkeuzemenu Valuta de valuta die Flutterwave ondersteunt
4. Klik op **Opslaan**

:::caution
Als u al een bestelling heeft ontvangen voor uw online winkel, kunt u de valuta niet wijzigen via de instellingen. In dergelijke gevallen kunt u contact opnemen met eCommerce-ondersteuning (support@eCommerce.com) om een wijziging van uw winkelvaluta aan te vragen.
:::

## Belangrijkste kenmerken van Flutterwave

### Meerdere betalingsopties

Flutterwave biedt verschillende betaalmethoden aangepast aan verschillende regio's:

- **Kaartbetalingen**: Accepteer Visa, Mastercard en lokale kaarten in Afrika en daarbuiten
- **Mobiel geld**: Integreer met populaire mobiele geldservices in meerdere Afrikaanse landen
- **Bankoverschrijvingen**: Ondersteuning voor directe bankoverschrijvingen in ondersteunde landen
- **USSD**: Bied betaling via USSD-codes voor gebruikers zonder smartphones of internet
- **QR-betalingen**: Contactloze betalingen via QR-code scannen

### Regionale specialisatie

Flutterwave heeft specifieke functies voor verschillende regio's:

- **Nigeria**: Ondersteuning voor lokale betaalmethoden zoals USSD en bankoverschrijvingen
- **Kenia**: Integratie met M-Pesa en andere mobiele geldservices
- **Ghana**: Ondersteuning voor mobiele geldnetwerken zoals MTN, Vodafone en AirtelTigo
- **Zuid-Afrika**: Integratie met lokale banksystemen en betaalmethoden
- **Tanzania/Oeganda**: Ondersteuning voor lokale mobiele geldservices

### Beveiliging en naleving

Flutterwave handhaaft hoge beveiligingsstandaarden:

- PCI DSS Level 1 compliance
- 3D Secure authenticatie
- Anti-fraude monitoring en bescherming
- Gegevensversleuteling en beveiliging

## Beste praktijken voor het gebruik van Flutterwave

1. **Test grondig**: Test altijd uw integratie in de sandbox-omgeving voordat u live gaat
2. **Implementeer webhook-notificaties**: Stel webhooks in om realtime updates over betalingsstatus te ontvangen
3. **Handel valuta-omrekening juist af**: Wees duidelijk over welke valuta's u accepteert en hoe omrekening werkt
4. **Houd uw API-sleutels veilig**: Stel nooit uw geheime sleutel bloot in client-side code
5. **Toon juiste betaalmethoden**: Toon betalingsopties relevant voor de locatie van uw klant
6. **Verifieer transactiestatus regelmatig**: Bevestig altijd de betalingsstatus voordat u bestellingen afhandelt
7. **Blijf up-to-date**: Houd Flutterwave's API-documentatie bij voor nieuwe functies en wijzigingen
