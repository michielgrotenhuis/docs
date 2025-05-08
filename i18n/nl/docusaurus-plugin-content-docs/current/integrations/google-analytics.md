---
sidebar_position: 3
---

# Google Analytics-integratie

Google Analytics is een krachtig platform waarmee u waardevolle gegevens van uw online winkel kunt verzamelen, zodat u gedetailleerde rapporten kunt genereren en essentiële inzichten kunt krijgen over uw bedrijfsactiviteiten.

Door Google Analytics aan uw eCommerce-winkel te koppelen, krijgt u toegang tot een schat aan informatie over hoe uw klanten uw online winkel ontdekken en ermee omgaan. Deze kennis stelt u in staat om uw bedrijfsstrategieën te optimaliseren en de algehele prestatie van uw eCommerce-activiteiten te verbeteren.

## Google Analytics verbinden met uw eCommerce-winkel

Om Google Analytics aan uw eCommerce-winkel te koppelen, heeft u uw GA tracking-ID nodig. Als u nog geen Google Analytics-account heeft gemaakt, volg dan de stappen in de sectie [Maak een Analytics-account aan](#maak-een-analytics-account-aan) hieronder.

1. **Log in** op uw eCommerce-beheerpaneel
2. Ga naar ***Instellingen → Integraties***
3. Klik op de **Toevoegen** knop voor Google Analytics
4. Plak op deze pagina de **Measurement ID** (begint met G) of de **"GT-" ID** (beschikbaar voor properties die na juli 2022 zijn gemaakt)
5. Klik op de **Opslaan** knop

Klaar! U heeft Google Analytics succesvol verbonden met uw eCommerce-winkel.

## Google Analytics 4 instellen voor uw online winkel (GA4 Property)

Vanaf 1 juli 2023 is Universal Analytics gestopt met het verzamelen van gegevens. Het wordt aanbevolen om in plaats daarvan een Google Analytics 4 property aan te maken. Als u een Universal Analytics (UA) property heeft, moet u migreren naar GA4.

1. Selecteer in de linker kolomkolom *Account* in Beheerder het account. Klik vervolgens in de kolom *Property* op **Property maken**
2. Voer een naam in voor de property (bijv. "Mijn Winkel") en selecteer de rapportagetijdzone en valuta
3. Klik op **Volgende**. Selecteer uw bedrijfscategorie en bedrijfsgrootte
4. Klik op **Volgende**. Selecteer hoe u Google Analytics wilt gebruiken
5. Klik op **Maken** en (als u een nieuw account instelt) accepteer de Analytics Servicevoorwaarden en de Gegevensverwerkingsamendement
6. Ga verder naar **Gegevensstroom toevoegen** om gegevens te verzamelen
7. Klik in *Beheerder* → *Property* kolom op **Gegevensstromen** > **Stroom toevoegen**
8. Klik op **iOS app**, **Android app** of **Web**. Voor uw online winkel selecteert u **Web**

Uw Google Analytics 4 property krijgt de naam **"Property - GA4 (98765432)"**.

:::note
De eerste resultaten in Google Analytics-rapporten verschijnen over ongeveer 24 uur.
:::

Als u Universal Analytics gebruikte in uw winkel, zorg er dan voor dat u bent gemigreerd naar Google Analytics 4 en de GA-4 ID gebruikt in ***Instellingen → Integraties → Google Analytics***.

## Hoe u uw Google Tag ID vindt

Om uw Google Tag ID te vinden, volgt u deze stappen:

1. Log in op uw Google Analytics-account
2. Klik op **Beheerder** in het linkermenu
3. Selecteer bovenaan de kolom *Property* uw property
4. Klik in de kolom *Property* op **Gegevensstromen** en klik op de gegevensstroom
5. In de sectie *Google tag* onderaan de pagina *Webstream details*, klik op **Tag-instellingen configureren**
6. In de sectie *Uw Google tag* op de pagina *Google tag*, ziet u de ID die begint met "G-" of "AW-"

Kopieer deze om te gebruiken in de integratie-instellingen op eCommerce-beheerder om uw GA te verbinden met uw online winkel.

## Maak een Analytics-account aan

Als u nog geen Analytics-account heeft:

1. Bezoek de Google Analytics-website (analytics.google.com) en log in met uw Google-account. Als u geen Google-account heeft, maak er een aan door op de knop "Account aanmaken" te klikken
2. Zodra u bent ingelogd, wordt u naar de Analytics-startpagina gebracht
3. Klik op de **"Beheerder"** optie linksonder op de Analytics-startpagina
4. Klik in de kolom "Account" op de **"Account aanmaken"** optie
5. Voer een naam in voor uw account. Kies een beschrijvende naam die u helpt de website of het bedrijf te identificeren dat wordt geassocieerd met dit account
6. Pas de instellingen voor gegevensdeling aan volgens uw voorkeuren
7. Zodra u de instellingen voor gegevensdeling heeft geconfigureerd, klik op **"Volgende"** om door te gaan

## Belangrijkste metrics om te volgen met Google Analytics

Zodra u Google Analytics voor uw eCommerce-winkel heeft ingesteld, kunt u verschillende metrics volgen om inzichten te krijgen over de prestaties van uw winkel:

### Verkeermetrics
- **Sessies**: Het totale aantal bezoeken aan uw winkel
- **Gebruikers**: Het aantal unieke bezoekers
- **Paginaweergaven**: Het totale aantal bekeken pagina's
- **Bouncepercentage**: Het percentage bezoekers dat uw site verlaat na slechts één pagina te bekijken
- **Gemiddelde sessieduur**: Hoe lang bezoekers op uw site blijven

### Acquisitie-metrics
- **Verkeersbronnen**: Van waar uw bezoekers komen (organisch zoeken, direct, doorverwijzing, sociaal, betaald)
- **Campagneprestaties**: Hoe goed uw marketingcampagnes verkeer en conversies genereren

### Gedragsmetrics
- **Meest bezochte pagina's**: Welke pagina's in uw winkel het meeste verkeer ontvangen
- **Landingspagina's**: De eerste pagina's die bezoekers zien wanneer ze naar uw winkel komen
- **Uitstappagina's**: De laatste pagina's die bezoekers bekijken voordat ze uw winkel verlaten

### Conversiemetrics
- **Conversiepercentage**: Het percentage bezoekers dat een gewenste actie voltooit
- **Transacties**: Het aantal voltooide aankopen
- **Inkomsten**: Het totale bedrag aan gegenereerd geld
- **Gemiddelde bestelwaarde**: Het gemiddelde bedrag dat per transactie wordt uitgegeven
- **Verkochte producten**: Welke producten het meest verkopen

Door deze metrics regelmatig te monitoren, kunt u datagedreven beslissingen nemen om de prestaties van uw eCommerce-winkel te verbeteren en de verkoop te verhogen.
