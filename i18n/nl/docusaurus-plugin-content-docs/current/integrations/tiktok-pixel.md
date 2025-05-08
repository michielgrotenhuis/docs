---
sidebar_position: 5
---

# TikTok Pixel-integratie

De TikTok Pixel is een code die u op uw winkel plaatst om gebeurtenissen te volgen en de impact van TikTok-advertenties op uw winkel te meten. Het stelt u in staat om verkoop, gebruikersactiviteit te monitoren en de juiste doelgroep te targeten voor uw advertenties.

Gebeurtenissen verwijzen naar specifieke acties of gedragingen die een winkelbezoeker onderneemt op uw winkel, zoals items toevoegen aan een winkelwagen of een aankoop doen. Deze gebeurtenissen helpen u marketingdoelgroepen te bouwen, advertentielevering te optimaliseren en campagneprestaties te meten.

De TikTok Pixel volgt deze gebeurtenissen en geeft informatie over wanneer ze plaatsvinden, waardoor u gebruikersgedrag kunt begrijpen, specifieke doelgroepen kunt targeten en de effectiviteit van uw TikTok-advertenties kunt evalueren.

De pixel verzamelt Advertentie/Gebeurtenis informatie, tijdstempel, IP-adres, Gebruikersagent en Cookies die beschikbaar zijn via standaard webbrowsers, zoals Chrome.

## Hoe TikTok Pixel toevoegen aan eCommerce-winkel

Als u de TikTok Pixel nog niet heeft aangemaakt, volg dan de stappen in de sectie [Hoe uw TikTok Pixel verkrijgen](#hoe-uw-tiktok-pixel-verkrijgen) hieronder.

Om de TikTok Pixel aan uw eCommerce-winkel toe te voegen:

1. **Log in** op uw eCommerce-beheerpaneel
2. Ga naar ***Instellingen → Integraties***
3. Klik op de **Toevoegen** knop voor TikTok Pixel
4. Voeg op deze pagina uw TikTok Pixel ID toe aan het invoervak
5. Klik op **Opslaan**

Dat is het! U heeft de TikTok Pixel succesvol toegevoegd aan uw eCommerce-winkel.

## Hoe uw TikTok Pixel verkrijgen

Om een TikTok Pixel aan te maken, moet u eerst een [TikTok Business Account](https://www.tiktok.com/business/en/solutions/business-account) hebben.

1. Log in of registreer voor een [TikTok Business Account](https://www.tiktok.com/business/en/solutions/business-account)
2. Ga naar **TikTok Ads Manager → Assets → Events**
3. Klik op de **Beheren** knop in de sectie **Website Event**
4. Klik op de **Pixel aanmaken** knop
5. Geef op de volgende pagina een naam aan de pixel die u zult onthouden
6. Selecteer **Pixelcode handmatig installeren**

Klaar! Uw TikTok pixel is aangemaakt.

De TikTok pixel bevindt zich aan het einde van het script, en de basis pixelcode ziet er ongeveer zo uit:

```html
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
  ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
  ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
  var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
  var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  ttq.load('XXXXXXXXXXXXXXX');
  ttq.page();
}(window, document, 'ttq');
</script>
