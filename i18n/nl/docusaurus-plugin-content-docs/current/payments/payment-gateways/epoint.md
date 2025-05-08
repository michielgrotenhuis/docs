---
sidebar_position: 13
---

# Epoint Overzicht

Epoint is een betalingssysteem gevestigd in Azerbeidzjan dat gebruikers in staat stelt elektronische betalingen te doen voor verschillende diensten en aankopen. Het is gemaakt om veilige en gemakkelijke elektronische betalingen in Azerbeidzjan te faciliteren.

## Hoe Epoint-betaalgateway instellen

1. **Log in** op uw eCommerce-beheerpaneel
2. Ga naar ***Instellingen → Betalingen*** in uw beheerpaneel
3. Klik op de "**Betaalmethode toevoegen**" link
4. Als beschikbaar met uw winkelvaluta, selecteer "**Epoint**" als uw betalingsprovider (indien niet beschikbaar, zie de sectie [Epoint is niet beschikbaar met uw winkelvaluta](#epoint-is-niet-beschikbaar-met-uw-winkelvaluta) hieronder)
5. Klik in de sectie "**Betaalmethode inschakelen**" op de toggle om de betaalmethode in te schakelen
6. Voer de "**Publieke sleutel**" en "**Privésleutel**" van uw Epoint-account in en klik op de **Verzenden** knop

### Epoint publieke en privésleutels

Voordat u uw Epoint-account aanmaakt en verifieert, zorg ervoor dat uw online winkel voldoet aan [Epoint's interne regels](https://epoint.az/en/rules).

Om de handelaar in het Epoint-systeem te configureren, moet u hen de volgende informatie verstrekken:

- Uw websiteadres
- URL-pagina van succesvolle betaling - success_url
- URL-pagina om informatie weer te geven over onsuccesvolle betaling - error_url
- URL om betalingsresultaat te verzenden - result_url

Na controle van deze informatie, krijgt u de toegangssleutels: public_key - de handelaar-ID in het Epoint-systeem en private_key - de geheime toegangssleutel tot de API.

Om uw publieke en privésleutels te genereren, volg deze stappen:

1. Log in op uw Epoint-account
2. Ga naar ***API Management → Connection options***
   - In deze sectie moet u vier essentiële links verstrekken: het websiteadres, succeslink, faallink en resultaatlink
3. Na het toevoegen van de vereiste links, klik op de ***Save*** knop om uw instellingen op te slaan

Voor degenen die van plan zijn een aangepast domein toe te voegen aan hun eCommerce-winkel, is het essentieel om het aangepaste domein toe te voegen voordat u verbinding maakt met Epoint. Als u echter aanvankelijk yourstore.biz.cyou links heeft toegevoegd en besluit om later een aangepast domein toe te voegen, vergeet dan niet om ook de nodige links op Epoint bij te werken.

Zodra u de nodige links heeft toegevoegd, geef het systeem 24 uur om de verbinding te verifiëren en uw publieke en privésleutels te genereren.

Bij succesvolle verificatie vindt u uw publieke en privésleutels weergegeven op dezelfde ***Connection options*** pagina.

Door deze stappen te volgen, kunt u eenvoudig uw Epoint publieke en privésleutels instellen voor naadloze integratie met ons platform.

## Epoint ondersteunde valuta's

U kunt betalingen ontvangen uit Azerbeidzjan in Azerbeidzjaanse Manat (AZN) met Epoint.

| **VALUTANAAM** | **VALUTACODE** |
|----------------|----------------|
| Azerbeidzjaanse Manat | AZN |

## Epoint is niet beschikbaar met uw winkelvaluta

Als Epoint-betaling niet beschikbaar is vanwege uw winkelvaluta, kunt u deze betalingsprovider niet selecteren. Om dit probleem op te lossen, moet u de valuta van uw winkel wijzigen naar een valuta die Epoint ondersteunt.

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
7. **Houd rekening met lokale regelgeving**: Zorg voor naleving van Azerbeidzjaanse e-commerce wetgeving
8. **Bied lokale taalopties**: Overweeg Azerbeidzjaans aan te bieden als taalkeuze
9. **Toon betalingslogo's**: Toon Epoint en geaccepteerde betaalmethoden op uw site
10. **Monitor transacties**: Controleer regelmatig uw Epoint-dashboard

## Veelvoorkomende problemen oplossen

Bij het gebruik van Epoint kunt u deze veelvoorkomende problemen tegenkomen:

### Configuratieproblemen
- Incorrecte URL-endpoints
- Ontbrekende success/error/result URL's
- Verkeerd geconfigureerd websitedomein

### Authenticatieproblemen
- Ongeldige API-inloggegevens
- Verlopen sleutels
- Incorrecte implementatie van authenticatie

### Transactiefouten
- Onvoldoende saldo
- Kaartbeperkingen
- Mislukte autorisatie

Voor technische ondersteuning bij uw Epoint-integratie, neem contact op met Epoint-ondersteuning of bezoek de [Epoint-website](https://epoint.az/).
