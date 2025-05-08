---
sidebar_position: 14
---

# iyzico Overzicht

[iyzico](https://www.iyzico.com/en) is een platform voor beheer van betalingsontvangstensysteem dat ePayment-oplossingen biedt.

iyzico's Beschermde Bankoverschrijving stelt uw klanten in staat om betaling te doen via 3 banken terwijl u alle transacties beheert op één paneel. iyzico biedt uw klanten het privilege van iyzico Koperbescherming zonder extra kosten.

iyzico stelt u in staat om betaald te worden en te verkopen met termijnbetalingen overal ter wereld op een gemakkelijke manier.

## Hoe iyzico-betaalgateway instellen

1. **Log in** op uw eCommerce-beheerpaneel
2. Ga naar ***Instellingen → Betalingen*** in uw beheerpaneel
3. Klik op de "**Betaalmethode toevoegen**" link
4. Als beschikbaar met uw winkelvaluta, selecteer "**iyzico**" als uw betalingsprovider (indien niet beschikbaar, zie de sectie [iyzico is niet beschikbaar met uw winkelvaluta](#iyzico-is-niet-beschikbaar-met-uw-winkelvaluta) hieronder)
5. Klik in de sectie "**Betaalmethode inschakelen**" op de toggle om de betaalmethode in te schakelen
6. Voer de "**Geheime sleutel**" van uw iyzico-account in en klik op de **Verzenden** knop

De geheime sleutel kan worden gevonden onder het iyzico-controlepaneel:

Ga naar uw ***Account → Accountinstellingen → API-sleutels → Live sleutels***

### Sandbox-modus inschakelen voor testen

U kunt ook de Sandbox-modus inschakelen om de sleutels te testen:

1. Klik op de "**Meer opties**" op dezelfde pagina
2. Schakel de Sandbox-modus toggle in
3. Schrijf dezelfde sleutel op in het "**Test Geheime sleutel**" invoervak

## iyzico ondersteunde valuta's

U kunt betalingen ontvangen van overal ter wereld in US Dollars, Euro's, Great British Sterling, Russische Roebel, Zwitserse Francs en Noorse Kronen valuta's evenals in Turkse Lira's via Visa en Mastercard gemerkte kaarten.

| **VALUTANAAM** | **VALUTACODE** |
|----------------|----------------|
| US Dollars | USD |
| Euro | EUR |
| Great British Sterling | GBP |
| Russische Roebel | RUB |
| Zwitserse Francs | CHF |
| Noorse Kroon | NOK |
| Turkse Lira | TRY |

## iyzico is niet beschikbaar met uw winkelvaluta

Als iyzico niet beschikbaar is vanwege uw winkelvaluta, kunt u de betalingsprovider niet selecteren. Om dit probleem op te lossen, moet u de valuta van uw winkel wijzigen naar een valuta die iyzico ondersteunt.

Om de valuta van uw winkel te wijzigen:

1. Ga naar ***Instellingen → Algemeen*** in uw eCommerce-beheerpaneel
2. Klik op de "**Standaarden en formaten**" instellingen
3. Selecteer in het vervolgkeuzemenu Valuta de valuta die iyzico ondersteunt
4. Klik op **Opslaan**

:::caution
Als u al een bestelling heeft ontvangen voor uw online winkel, kunt u de valuta niet wijzigen via de instellingen. In dergelijke gevallen kunt u contact opnemen met eCommerce-ondersteuning (support@eCommerce.com) om een wijziging van uw winkelvaluta aan te vragen.
:::

## Belangrijkste kenmerken van iyzico

### Turkije-gerichte betalingsoplossing

iyzico biedt gespecialiseerde functies voor de Turkse markt terwijl internationale betalingen worden ondersteund:

- **Turkse marktintegratie**: Diepe integratie met het Turkse financiële systeem
- **Internationale ondersteuning**: Accepteer betalingen van over de hele wereld
- **Multi-valuta verwerking**: Ondersteuning voor zeven valuta's
- **Beschermde overschrijvingen**: Veilig bankoverschrijvingssysteem
- **Termijnbetalingsopties**: Populair in Turkse e-commerce

### Betaalmethoden

iyzico ondersteunt verschillende betaalmethoden:

- **Credit/debetkaarten**: Visa, Mastercard en andere grote kaarten
- **Bankoverschrijvingen**: Beschermd bankoverschrijvingssysteem
- **Termijnbetalingen**: Betalingen spreiden over tijd
- **Mobiele betalingen**: Ondersteuning voor mobiele betaalmethoden
- **Alternatieve betaalmethoden**: Verschillende lokale opties

### Bedrijfstools

Naast betalingsverwerking biedt iyzico:

- **Handelaarsdashboard**: Uitgebreid transactiebeheer
- **Rapportage en analyse**: Volg en analyseer uw verkopen
- **Fraudebescherming**: Geavanceerde beveiligingsmaatregelen
- **Koperbescherming**: Verhoogd klantvertrouwen
- **API-integratie**: Verbind met uw bestaande systemen

## Beste praktijken voor het gebruik van iyzico

1. **Configureer valuta-instellingen**: Zorg ervoor dat uw winkel een valuta gebruikt die wordt ondersteund door iyzico
2. **Test grondig**: Gebruik sandbox-modus om te testen voordat u live gaat
3. **Houd inloggegevens veilig**: Stel nooit uw geheime sleutel bloot in client-side code
4. **Implementeer juiste foutafhandeling**: Handel betalingsfouten netjes af
5. **Verifieer transacties**: Bevestig altijd de betalingsstatus voordat u bestellingen afhandelt
6. **Schakel termijnbetalingsopties in**: Bij verkoop aan Turkse klanten, overweeg termijnbetalingsplannen
7. **Toon betalingslogo's**: Toon iyzico en geaccepteerde betaalmethoden op uw site
8. **Monitor transacties**: Controleer regelmatig uw iyzico-dashboard
9. **Blijf up-to-date**: Houd uw integratie up-to-date met de nieuwste iyzico API
10. **Bied meertalige ondersteuning**: Overweeg Turks te ondersteunen als u die markt target

## Veelvoorkomende problemen oplossen

Bij het gebruik van iyzico kunt u deze veelvoorkomende problemen tegenkomen:

### Integratieproblemen
- Incorrecte API-sleutels
- Niet-ondersteunde valuta
- Ongeldige checkout-configuratie

### Betalingsfouten
- Kaart geweigerd
- 3D Secure authenticatie mislukt
- Onvoldoende saldo
- Kaartbeperkingen
- Verlopen kaart

### Technische problemen
- Netwerkconnectiviteitsproblemen
- Webhook-configuratiefouten
- Server timeout problemen
- Browsercompatibiliteitsproblemen
- SSL-certificaatproblemen

Voor technische ondersteuning bij uw iyzico-integratie, neem contact op met iyzico-ondersteuning of bezoek het [iyzico Developer Portal](https://dev.iyzipay.com/).

## Beveiligingsoverwegingen

iyzico handhaaft hoge beveiligingsstandaarden om zowel handelaren als klanten te beschermen:

### PCI DSS compliance

iyzico is volledig conform Payment Card Industry Data Security Standard (PCI DSS), wat ervoor zorgt dat alle kaartgegevens worden behandeld volgens industriebeveiligingsstandaarden.

### 3D Secure

Alle kaarttransacties worden verwerkt met 3D Secure authenticatie, wat een extra beveiligingslaag biedt en helpt frauduleuze transacties te verminderen.

### Fraudepreventie

iyzico gebruikt geavanceerde fraudedetectie- en preventiesystemen om verdachte transacties te identificeren en te blokkeren voordat ze kunnen worden verwerkt.

### Gegevensversleuteling

Alle gevoelige gegevens die via iyzico worden verzonden, worden versleuteld met industriestandaard protocollen om ervoor te zorgen dat klantinformatie veilig blijft.

### Transactiemonitoring

iyzico's systemen monitoren transacties continu op ongebruikelijke patronen of activiteiten die fraude kunnen aangeven, wat realtime bescherming biedt voor uw bedrijf.

## Conclusie

iyzico biedt een betrouwbare betalingsoplossing die bijzonder geschikt is voor bedrijven die verkopen aan Turkije en internationale markten. Door uw iyzico-integratie met eCommerce correct in te stellen en te onderhouden, kunt u uw klanten een veilige en gemakkelijke checkout-ervaring bieden terwijl u profiteert van iyzico's uitgebreide betalingsbeheersysteem. is vanwege uw winkelvaluta, kunt u deze betalingsprovider niet selecteren. Om dit probleem op te lossen, moet u de valuta van uw winkel wijzigen naar een valuta die Epoint ondersteunt.

Om de valuta van uw winkel te wijzigen:

1. Ga naar ***Instellingen → Algemeen*** in uw eCommerce-beheerpaneel
2. Klik op de "**Standaarden en formaten**" instellingen
3. Selecteer in het vervolgkeuzemenu Valuta de valuta die Epoint ondersteunt
4. Klik op **Opslaan**

:::caution
Als u al een bestelling heeft ontvangen voor uw online winkel, kunt u de valuta niet wijzigen via de instellingen. In dergelijke gevallen kunt u contact opnemen met eCommerce-ondersteuning (support@eCommerce.com) om een wijziging van uw winkelvaluta aan te vragen.
:::

## Belangrijkste kenmerken van Epoint

### Azerbeidzjan-gerichte betalingsoplossing

Epoint biedt gespecialiseerde functies voor de Azerbeidzjaanse markt:

- **Lokale valutaverwerking**: Alle transacties in AZN
- **Azerbeidzjaanse bankintegratie**: Directe verbinding met lokaal banksysteem
- **Gelokaliseerde ervaring**: Interface en ondersteuning in het Azerbeidzjaans
- **Nationale compliance**: Naleving van lokale regelgeving en standaarden
- **Lokale ondersteuning**: Azerbeidzjan-gebaseerde klantenservice

### Betaalmethoden

Epoint ondersteunt verschillende betaalmethoden voor Azerbeidzjaanse klanten:

- **Credit/debetkaarten**: Belangrijkste kaarten geaccepteerd in Azerbeidzjan
- **Online bankieren**: Integratie met Azerbeidzjaanse banken
- **Mobiele betalingen**: Ondersteuning voor mobiele betalingsopties
- **Elektronische portemonnees**: Verschillende e-wallet opties
- **Alternatieve betaalmethoden**: Andere lokale betalingsoplossingen

### Bedrijfstools

Epoint biedt verschillende tools voor handelaren:

- **Handelaarsdashboard**: Volg transacties en beheer instellingen
- **Rapportage**: Gedetailleerde transactierapportage en analyse
- **API-integratie**: Verbind met uw bestaande systemen
- **Beveiligingsfuncties**: Fraudebescherming en veilige transacties
- **Ondersteuningsbronnen**: Documentatie en assistentie

## Beste praktijken voor het gebruik van Epoint

1. **Configureer voor Azerbeidzjaanse markt**: Zorg ervoor dat uw winkel is ingesteld voor lokale klanten
2. **Toon prijzen in AZN**: Alle producten moeten geprijsd zijn in Azerbeidzjaanse Manat
3. **Test grondig**: Verifieer uw integratie voordat u live gaat
4. **Houd inloggegevens veilig**: Stel nooit uw privésleutel bloot in client-side code
5. **Implementeer juiste foutafhandeling**: Handel betalingsfouten netjes af
6. **Verifieer transacties**: Bevestig altijd de betalingsstatus voordat u bestellingen afhandelt
7. **Houd rekening met lokale regelgeving**: Zorg voor naleving van Az
