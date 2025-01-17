---
layout: content
lang: nl
title: Wegwijzer
redirect_from: 
    - /wegwijzer
    - /nl/guidepost
---

{% capture copy_intro %}
<div markdown="1">
CoronaCheck wordt ondertussen door veel mensen gebruikt om een vaccinatie, herstel of testbewijs te maken. Toch zijn er ook mensen die problemen hebben met het aanmaken van hun coronabewijs. Lukt het niet om een bewijs te maken met CoronaCheck? Lees hier wat je kunt doen.
</div>
{% endcapture %}


{% capture copy_vaccinatiebewijs %}
<div markdown="1">
Op dit moment worden vaccinatiebewijzen niet gebruikt in Nederland. Daarom kun je nu met CoronaCheck alleen een vaccinatiebewijs maken dat internationaal geldig is. 

Een internationaal vaccinatiebewijs krijg je al na één vaccinatie. Een volledig vaccinatiebewijs is over het algemeen 270 dagen geldig. Zodra je een nieuwe (booster)vaccinatie hebt gehad kun je deze zelf toevoegen door opnieuw in te loggen met DigiD. Voor de boostervaccinatie is nog geen geldigheid vastgesteld. Voor kinderen tot 18 jaar is een volledig vaccinatiebewijs geldig voor onbepaalde tijd. Hier is geen boosterprik voor nodig. Let op: de regels kunnen verschillen per land. Check {{ site.data.links.wijsopreis[page.lang] }} om te zien welke regels er gelden op jouw bestemming.

CoronaCheck haalt gegevens over vaccinaties op bij de systemen van het RIVM, de GGD en ziekenhuizen. Andere vaccinatiezetters, zoals huisartsen en andere zorgverleners, hebben je vaccinatiegegevens doorgegeven aan het RIVM. Dit doen zij alleen als je hier toestemming voor hebt gegeven. Vaccinatiegegevens kan je ophalen in de app. [Lees hier hoe je je vaccinatiegegevens kan ophalen](/nl/faq/1-1-hoe-werkt-de-coronacheck-app/).

Meer informatie over vaccinatiebewijzen vind je op {{ site.data.links.vaccinatiebewijs[page.lang] }}.
</div>
{% endcapture %}


{% capture copy_geen_derde_prik %}
<div markdown="1">

Je moet zelf je vaccinatiegegevens van je derde prik ophalen door opnieuw in te loggen met DigiD. Staat je derde prik er niet bij? Neem dan contact op met de zorgverlener die je heeft gevaccineerd. Ben je bij de GGD gevaccineerd dan kun je bellen met hun backoffice op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten controleren. Ben je gevaccineerd door je huisarts, ziekenhuis of zorginstelling? Neem dan contact met hen op.

</div>
{% endcapture %}


{% capture copy_geen_vaccinatiegegevens %}
<div markdown="1">
Het kan tot 72 uur duren voor de vaccinatiegegevens beschikbaar zijn. Worden er daarna nog steeds geen gegevens gevonden? Dan kan het zijn dat de vaccinatiegegevens niet goed zijn geregistreerd. 

Je vaccinatiegegevens worden via DigiD gezocht op basis van de persoonsgegevens die ook in je paspoort staan; bsn-nummer, naam en geboortedatum. Bij je vaccinatie moeten exact diezelfde gegevens staan. Komt dit niet volledig overeen, zoals bijvoorbeeld een dubbele punt, een ç of een é, dan kunnen de gegevens niet worden gevonden. Ook zijn er mensen met een onbekende geboortedatum in DigiD; dan staat er daar 00 of xx als geboortedatum. 

Neem contact op met de zorgverlener die je heeft gevaccineerd wanneer er geen vaccinatiegegevens gevonden kunnen worden. Ben je bij de GGD gevaccineerd dan kun je bellen met hun backoffice op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten controleren. 
Ben je gevaccineerd door je huisarts, ziekenhuis of zorginstelling? Neem dan contact met hen op. Zij kunnen een coronabewijs voor je maken met de juiste gegevens.  
</div>
{% endcapture %}


{% capture copy_incorrecte_vaccinatiegegevens %}
<div markdown="1">
Kloppen er gegevens van je vaccinatie niet?
Neem dan contact op met de zorgverlener die je heeft gevaccineerd. Ben je bij de GGD gevaccineerd dan kun je bellen met hun backoffice op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten corrigeren. 

Ben je gevaccineerd door je huisarts, ziekenhuis of zorginstelling? Neem dan contact met hen op. Zij kunnen een coronabewijs voor je maken met de juiste gegevens.  
</div>
{% endcapture %}

{% capture copy_app_kan_geen_bewijs_maken %}
<div markdown="1"> 
Worden er wel gegevens over je vaccinatie gevonden, maar zegt CoronaCheck dat er geen bewijs gemaakt kan worden?
Dit kan het geval zijn wanneer er een fout zit in je vaccinatiegegevens, bijvoorbeeld als de vaccinatiedatum of het merk van het vaccin niet klopt. Dan kan er geen koppeling gemaakt worden en kan CoronaCheck geen vaccinatiebewijs maken. 

Neem dan contact op met de zorgverlener die je heeft gevaccineerd. Ben je bij de GGD gevaccineerd dan kun je bellen met hun backoffice op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten corrigeren. 
Ben je gevaccineerd door je huisarts, ziekenhuis of zorginstelling? Neem dan contact met hen op. Zij kunnen een coronabewijs voor je maken met de juiste gegevens.
</div>
{% endcapture %}

{% capture copy_in_buitenland_gevaccineerd %}
<div markdown="1">
Kijk op {{ site.data.links.buitenlandvaccinatie[page.lang] }}. Daar vind je altijd de laatste informatie.
</div>
{% endcapture %}

{% capture copy_herstelbewijs %}
<div markdown="1">
Een herstelbewijs is een bewijs dat je ooit positief getest bent op aanwezigheid van het Sars-Cov2-virus.

Op dit moment worden herstelbewijzen niet gebruikt in Nederland. Daarom kun je nu met CoronaCheck alleen een herstelbewijs maken dat internationaal geldig is. Hiervoor gelden een aantal voorwaarden:

Het herstelbewijs is geldig 11 dagen na de positieve testuitslag. Het herstelbewijs kan al wel eerder gemaakt worden.
Voor een herstelbewijs mag de positieve testuitslag maximaal 180 dagen oud zijn.

**Let op:** In Europees verband is afgesproken dat een herstelbewijs alleen afgegeven mag worden op basis van een PCR-test. Een herstelbewijs wordt niet verstrekt op basis van een antigeentest, zelftest of een serologische test.

CoronaCheck haalt de positieve testuitslagen op bij de GGD. Zowel testuitslagen van de GGD zelf, als testuitslagen van andere testlocaties kunnen worden opgehaald. Deze uitslagen moeten dan wel zijn doorgegeven aan de GGD.

Meer informatie over herstelbewijzen vind je op {{ site.data.links.herstelbewijs[page.lang] }}.
</div>
{% endcapture %}

{% capture copy_geen_herstelbewijs_gegevens %}
<div markdown="1">
Dit kan verschillende oorzaken hebben:

- Je bent pas net getest. Het kan een paar uur duren voordat jouw positieve testuitslag beschikbaar is.
- Je bent langer dan 180 dagen geleden (positief) getest. In dit geval heb je geen recht op een herstelbewijs.

Is geen van bovenstaande situaties op jou van toepassing, maar je bent wel positief getest? Neem dan contact op met de GGD als je daar bent getest op {{ site.data.links.phone-ggd[page.lang] }} of vul dit {{ site.data.links.herstelbewijs-elders[page.lang] }} in als je op een andere locatie bent getest.
</div>
{% endcapture %}

{% capture copy_incorrecte_herstelgegevens %}
<div markdown="1"> 
Kloppen de opgehaalde gegevens van je positieve testuitslag niet, bijvoorbeeld je type test, tijd of datum? Als je bij de GGD bent getest, dan kun je contact opnemen met de GGD op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten wijzigen. Ben je door een andere testlocatie getest dan de GGD? Ga dan naar {{ site.data.links.herstelbewijs-elders[page.lang] }} en vul het formulier in.
</div>
{% endcapture %}

{% capture copy_we_kunnen_geen_herstelbewijs_maken %}
<div markdown="1"> 
Worden er wel gegevens over jouw herstel gevonden, maar zegt CoronaCheck dat er geen bewijs gemaakt kan worden? Het kan zijn dat jouw testuitslag meer dan 180 dagen oud is. Dan is het niet meer mogelijk om een herstelbewijs te maken.

Ben je korter dan 180 dagen geleden getest? Dan kan het zijn dat er een fout zit in de testgegevens. Als je bij de GGD bent getest, dan kun je contact opnemen met de GGD op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten wijzigen. Ben je door een andere testlocatie getest dan de GGD? Ga dan naar {{ site.data.links.herstelbewijs-elders[page.lang] }} en vul het formulier in.
</div>
{% endcapture %}

{% capture copy_geen_internationaal_herstelbewijs %}
<div markdown="1"> 
In Europees verband is afgesproken dat een herstelbewijs alleen afgegeven mag worden op basis van een PCR-test, en als de test niet korter dan 11 en niet langer dan 180 dagen geleden is afgenomen. {% if site.version != "0g" %}Voor gebruik binnen Nederland (bijvoorbeeld voor toegang tot evenementen) wordt een herstelbewijs ook afgegeven op basis van een antigeentest.{% endif %}

### Ben jij vóór 8 september getest bij een andere testlocatie dan de GGD?

Bij de positieve testresultaten van voor 8 september 2021 is het type test niet vastgelegd. Het is dus niet duidelijk of het een PCR-test is geweest. Daarom worden alle testen voor de veiligheid behandeld als een antigeentest. Dit betekent dat er helaas geen internationaal herstelbewijs gemaakt kan worden. 
</div>
{% endcapture %}

{% capture copy_testbewijs %}
<div markdown="1">
Alleen testuitslagen van testlocaties die aangesloten zijn bij CoronaCheck kunnen worden omgezet in een coronabewijs. Meer informatie over testbewijzen vind je op {{ site.data.links.testenvoorjereis[page.lang] }}.

### Negatief getest bij de GGD
Het kan tot 30 uur duren alvorens de uitslag van een test beschikbaar is. Vanaf het moment dat de GGD de uitslag heeft (dat kun je zien via {{ site.data.links.coronatest[page.lang] }}) duurt het nog een aantal uur voordat de gegevens zijn op te halen met CoronaCheck). Als je testuitslag al wel in {{ site.data.links.coronatest[page.lang] }} beschikbaar is, maar na 30 uur na testafname nog niet in de CoronaCheck-app, neem dan contact op met de GGD op {{ site.data.links.phone-ggd[page.lang] }}.

{% if site.version != "0g" %}
### Testen voor toegang
Wil je gebruik maken van een coronabewijs voor toegang tot evenementen en locaties binnen Nederland? Hiervoor kun je terecht bij {{ site.data.links.testen-voor-toegang[page.lang] }} ({{ site.data.links.phone-tvt-helpdesk[page.lang] }}). Hier vind je ook alle relevante informatie en kun je een afspraak maken. Wanneer je naar een evenement of locatie gaat, waar een bewijs van een negatieve coronatest voor nodig is, geeft de organisatie je meestal ook informatie, bijvoorbeeld op het ticket, in een bevestigingsmail of op de website.
{% endif %}
</div>
{% endcapture %}

{% capture copy_testen_voor_je_reis %}
<div markdown="1">
Wil je gebruik maken van een coronabewijs om te reizen binnen Europa? Lees hierover meer op {{ site.data.links.testenvoorjereis[page.lang] }}. En check voor vertrek altijd {{ site.data.links.wijsopreis[page.lang] }} om nare verrassingen te voorkomen.
</div>
{% endcapture %}

{% capture copy_geen_ophaalcode %}
<div markdown="1">
Deze ophaalcode bestaat uit een lange reeks van letters en cijfers (bv BRB-YYYYYYYYYY-Z2). Deze ontvang je van de testlocatie. De uitslag van een antigeentest ontvang je binnen drie uur, de uitslag van een pcr-test kan tot 24 uur duren. Soms kan het wat langer duren. Als je deze niet hebt ontvangen kan dat verschillende oorzaken hebben:

- Jouw test moet nog verwerkt worden.
- Je email adres is niet correct of wellicht is de mail in uw spambox terechtgekomen.
- Er is een probleem bij de testlocatie in het doorgeven van de uitslag. Neem contact op met de locatie waar je bent getest. 

{% if site.version != "0g" %}Ben je getest bij Testen voor Toegang? Neem dan contact op met hun helpdesk via {{ site.data.links.phone-tvt-helpdesk[page.lang] }}.{% endif %}
</div>
{% endcapture %}

{% capture copy_geen_verificatiecode %}
<div markdown="1">
De verificatiecode (per SMS of e-mail) moet normaliter binnen een minuut binnenkomen nadat je de ophaalcode hebt ingevoerd. Als je deze niet hebt ontvangen kan dat verschillende oorzaken hebben:

- In het geval je aanbieder de verificatiecode per email stuurt, controleer dan ook je spam-folder.
- Heb je wellicht een buitenlands telefoonnummer doorgegeven? Het komt sporadisch voor dat SMS berichten naar buitenlandse nummers niet doorkomen.

Neem contact op met de locatie waar je bent getest. {% if site.version != "0g" %}Ben je getest bij Testen voor Toegang? Neem dan contact op met hun helpdesk via {{ site.data.links.phone-tvt-helpdesk[page.lang] }}.{% endif %}
</div>
{% endcapture %}


{% capture copy_incorrecte_testgegevens %}
<div markdown="1"> 
Neem contact op met de locatie waar je bent getest om je gegevens te laten wijzigen.

Ben je bij de GGD getest dan kun je bellen met hun backoffice op {{ site.data.links.phone-ggd[page.lang] }}.

{% if site.version != "0g" %}Ben je getest bij Testen voor Toegang? Neem dan contact op met hun helpdesk via {{ site.data.links.phone-tvt-helpdesk[page.lang] }}.{% endif %}
</div>
{% endcapture %}

{% capture copy_we_kunnen_geen_testbewijs_maken %}
<div markdown="1"> 
Zegt de app dat er geen bewijs gemaakt kan worden? Mogelijk klopt er dan iets niet in de gegevens over jouw testuitslag. Neem contact op met de zorgverlener waar jij bent getest. Zij kunnen de gegevens controleren en corrigeren.

Ben je bij de GGD getest dan kun je bellen met hun backoffice op {{ site.data.links.phone-ggd[page.lang] }} om de gegevens te laten corrigeren. 

{% if site.version != "0g" %}Ben je via Testen voor Toegang getest? Neem contact op met de helpdesk van Testen voor Toegang via {{ site.data.links.phone-tvt-helpdesk[page.lang] }}.{% endif %}
</div>
{% endcapture %}

{% capture copy_printbewijs %}
<div markdown="1">
Geen smartphone, liever een papieren coronabewijs of wil je een coronabewijs voor je kinderen maken? Of vind je het prettig om naast je CoronaCheck-app ook een papieren coronabewijs mee te nemen? Dat kan. Een papieren coronabewijs maak je op [www.coronacheck.nl/print](/print).
</div>
{% endcapture %}

{% capture copy_bezoekersbewijs %}
<div markdown="1">
Ben je buiten de Europese Unie gevaccineerd en op bezoek in Nederland? Dan kun je van jouw vaccinatiebeoordeling en een negatieve testuitslag een bezoekersbewijs maken. Met je bezoekersbewijs krijg je toegang tot plekken en activiteiten in Nederland die vragen om een coronatoegangsbewijs.

Kijk voor meer informatie op {{ site.data.links.entry-pass[page.lang] }}.
</div>
{% endcapture %}

{% capture copy_bezoek_ophalen_vaccinatiebeoordeling %}
<div markdown="1">
Krijg je een foutcode bij het invoeren van je vaccinatie beoordelingscode of ontvang je geen verificatiecode? Ga dan terug naar de balie waar jouw vaccinatie is beoordeeld.
</div>
{% endcapture %}

{% capture copy_bezoek_ophalen_negatieve_test %}
<div markdown="1">
Krijg je een foutcode bij het invoeren van je ophaalcode na je negatieve test of ontvang je geen verificatiecode? Neem dan telefonisch contact op met de helpdesk van Testen voor Toegang op {{ site.data.links.phone-tvt-helpdesk[page.lang] }}.
</div>
{% endcapture %}

{% capture copy_bezoek_persoonsgegevens_verschillen %}
<div markdown="1">
Als de persoonsgegevens van je vaccinatiebeoordeling en je negatieve testresultaat verschillend zijn, dan kan CoronaCheck geen bewijs maken. Controleer welke gegevens onjuist zijn en laat deze corrigeren. Kloppen de gegevens van je vaccinatiebeoordeling niet, ga dan terug naar de balie waar jouw vaccinatie is beoordeeld. Kloppen je testgegevens niet? Neem dan contact op met de helpdesk van Testen voor Toegang op {{ site.data.links.phone-tvt-helpdesk[page.lang] }}.
</div>
{% endcapture %}


{% capture copy_digid %}
<div markdown="1">

### Ik heb geen DigiD

Om je vaccinatiegegevens in te laden in CoronaCheck heb je een geldige DigiD nodig. <a href="https://www.digid.nl/digid-aanvragen-activeren/" rel="noopener noreferrer" target="_blank">Die kun je via deze link aanvragen</a>. De aanvraag van een nieuwe DigiD duurt enkele werkdagen.

Je kan inloggen op DigiD via de app (<a href="https://www.digid.nl/inlogmethodes/digid-app" rel="noopener noreferrer" target="_blank">download hier de DigiD app</a>) of de DigiD website met sms-controle. <a href="https://www.digid.nl/inlogmethodes/sms-controle" rel="noopener noreferrer" target="_blank">Over het instellen van een sms-controle lees je hier meer</a>.

Meer informatie over DigiD: neem gerust contact op met de Helpdesk op {{ site.data.links.phone-digid-helpdesk[page.lang] }} (op werkdagen bereikbaar van 8.00 tot 22.00 uur en in het weekend van 12:00-22:00).

Wil je geen DigiD of heb je geen digitale middelen, neem dan telefonisch contact op met de CoronaCheck helpdesk.

### Foutmelding DigiD / Technische storing

Heb je al DigiD en lukt het je niet om hier een coronabewijs mee op te halen? Bij sommige mensen lukt het inloggen met DigiD helaas niet. Je kunt een aantal stappen ondernemen:

- Sluit alle openstaande browsers van DigiD handmatig (_\*.coronacheck.nl_, _\*.overheid.nl_ en _\*.digid.nl)_  en sluit de CoronaCheck-app af;
- Update de CoronaCheck-app en de DigiD-app (indien in gebruik) naar de laatste versies;
- Soms is het nodig het om je browser cache en cookies handmatig te verwijderen en daarna opnieuw in te loggen via CoronaCheck;
- In sommige gevallen werkt het om je internetverbinding te wisselen. Zet bijvoorbeeld wi-fi uit en aan en probeer het dan nog eens;
- Gebruik een ondersteunde browser, zoals Mozilla Firefox, Google Chrome of Microsoft Edge en stel een andere standaard browser in;
- Controleer of je browser cookies accepteert. Na het ophalen van de gegevens kun je dit weer uitzetten;
- Soms werkt het om de telefoon te herstarten en dan opnieuw te proberen;
- Tenslotte kan het werken om DigiD op een ander apparaat te gebruiken.

**Let op:** Gebruik je iOS 15 en krijg je de foutmelding ‘Er was langer dan 15 minuten geen activiteit in het scherm’? Stel een andere browser dan Safari in als standaard browser en probeer het nogmaals.

Lukt het nog steeds niet? Neem dan contact op de helpdesk via {{ site.data.links.phone-helpdesk[page.lang] }} of via [helpdesk@coronacheck.nl](mailto:helpdesk@coronacheck.nl).

### Ik heb geen BSN-nummer

Alle informatie over het krijgen van een vaccinatiebewijs wanneer je geen BSN-nummer hebt kun je vinden op de pagina {{ site.data.links.coronabewijs-hulp[page.lang] }}.

</div>
{% endcapture %}

{% capture copy_travelquestions %}
<div markdown="1">
Ga je binnenkort op reis? Check voor vertrek altijd de geldende inreisregels van je bestemming op {{ site.data.links.wijsopreis[page.lang] }}. Lees meer over het maken van een testafspraak op {{ site.data.links.testenvoorjereis[page.lang] }}. 

Voor overige vragen kun je terecht bij <a href="https://www.nederlandwereldwijd.nl/contact/contact-met-nederland-wereldwijd" rel="noopener noreferrer" target="_blank">het contactcenter van Nederland Wereldwijd</a>. Dat is 24 uur per dag, 7 dagen per week bereikbaar.
</div>
{% endcapture %}

{% capture copy_positive_before_vacc %}
<div markdown="1">
Ben je positief getest en kreeg je daarna je eerste prik? Dan ben je volledig gevaccineerd. Je krijgt een volledig vaccinatiebewijs als je opgehaalde positieve testuitslag van vóór je eerste prik is. 

Vanaf versie 2.6.0 in de CoronaCheck-app krijg je, nadat er maar één prik wordt gevonden tijdens het ophalen van je vaccinatiegegevens, de mogelijkheid om ook een positieve testuitslag op te halen. Op dit moment kun je alleen de meest recente positieve test ophalen. 

Ben je vaker positief getest waarvan de eerste keer vóór je eerste prik, maar wordt alleen je testuitslag van erná gevonden? Neem dan contact op met de zorgverlener waar je gevaccineerd bent. Zij kunnen je helpen om een volledig vaccinatiebewijs te maken.
</div>
{% endcapture %}

{% comment %}
    Page structure ----------------------------------------------
{% endcomment %}

{% comment %}
    Vaccinatiebewijzen
{% endcomment %}

{{ copy_intro }}

<details class="details" id="vacc"><summary><h2>Ik wil een vaccinatiebewijs maken</h2></summary>

<h3>Algemeen over vaccinatiebewijs</h3>
{{ copy_vaccinatiebewijs }}

<details class="details" id="vacc_nothirdjab">
<summary><h3>Mijn 3e prik wordt niet gevonden</h3></summary>
{{ copy_geen_derde_prik }}
</details>

<details class="details" id="vacc_nodata">
<summary><h3>Geen vaccinatiegegevens gevonden</h3></summary>
{{ copy_geen_vaccinatiegegevens }}
</details>

<details class="details" id="vacc_dataincorrect">
<summary><h3>Mijn vaccinatiegegevens kloppen niet</h3></summary>
{{ copy_incorrecte_vaccinatiegegevens }}
</details>

<details class="details" id="vacc_cantmakeproof">
<summary><h3>De app kan geen bewijs maken</h3></summary>
{{ copy_app_kan_geen_bewijs_maken }}
</details>

<details class="details" id="vacc_positive_before_vacc">
<summary><h3>Positief getest vóór mijn eerste vaccinatie</h3></summary>
{{ copy_positive_before_vacc }}
</details>

<details class="details" id="vacc_othercountry"><summary><h3>Ben je in het buitenland gevaccineerd?</h3></summary>
{{ copy_in_buitenland_gevaccineerd }}
</details>

</details>

{% comment %}
    Herstelbewijzen
{% endcomment %}

<details class="details" id="recovery"><summary><h2>Ik wil een herstelbewijs maken</h2></summary>
{{ copy_herstelbewijs }}

<details class="details" id="recovery_nodata">
<summary><h3>Geen gegevens gevonden</h3></summary>
{{ copy_geen_herstelbewijs_gegevens }}
</details>

<details class="details" id="recovery_dataincorrect">
<summary><h3>Onjuiste gegevens gevonden</h3></summary>
{{ copy_incorrecte_herstelgegevens }}
</details>

<details class="details" id="recovery_cantmakeproof">
<summary><h3>De app kan geen bewijs maken</h3></summary>
{{ copy_we_kunnen_geen_herstelbewijs_maken }}
</details>

<details class="details" id="recovery_cantmakeintnlproof">
<summary><h3>Ik krijg geen internationaal herstelbewijs</h3></summary>
{{ copy_geen_internationaal_herstelbewijs }}
</details>

</details>

{% comment %}
    Testbewijzen
{% endcomment %}

<details class="details" id="test"><summary><h2>Ik wil een testbewijs maken</h2></summary>
    {{ copy_testbewijs }}

<h3>Testen voor je reis</h3>
{{ copy_testen_voor_je_reis }}

<details class="details" id="test_nocode">
<summary><h3>Ik heb geen ophaalcode gekregen</h3></summary>
{{ copy_geen_ophaalcode }}
</details>

<details class="details" id="test_noverificationcode">
<summary><h3>Ik krijg geen verificatiecode via SMS of e-mail</h3></summary>
{{ copy_geen_verificatiecode }}
</details>

<details class="details" id="test_incorrectdata">
<summary><h3>De gevonden gegevens kloppen niet</h3></summary>
{{ copy_incorrecte_testgegevens }}
</details>

<details class="details" id="test_cantmakeproof">
<summary><h3>De app kan geen bewijs maken</h3></summary>
{{ copy_we_kunnen_geen_testbewijs_maken }}
</details>

</details>

<details class="details" id="paper">
<summary><h2>Ik wil een papieren coronabewijs maken</h2></summary>
{{ copy_printbewijs }}
</details>

{% if site.version == "3g" %}
<details class="details" id="visitor">
<summary><h2>Ik wil een bezoekersbewijs maken</h2></summary>
{{ copy_bezoekersbewijs }}

<details class="details" id="visitor_cantretrieve">
<summary><h3>Het ophalen van mijn vaccinatiebeoordeling lukt niet</h3></summary>
{{ copy_bezoek_ophalen_vaccinatiebeoordeling }}
</details>

<details class="details" id="visitor_cantretrievenegativetest">
<summary><h3>Het ophalen van mijn negatieve test lukt niet </h3></summary>
{{ copy_bezoek_ophalen_negatieve_test }}
</details>

<details class="details" id="visitor_dataisdifferent">
<summary><h3>De persoonsgegevens van je vaccinatiebeoordeling en je negatieve testuitslag zijn verschillend</h3></summary>
{{ copy_bezoek_persoonsgegevens_verschillen }}
</details>

</details>
{% endif %}

<details class="details" id="digid">
<summary><h2>Ik kan niet inloggen met DigiD</h2></summary>
{{ copy_digid }}
</details>

<details class="details" id="travel">
<summary><h2>Vragen over reizen?</h2></summary>
{{ copy_travelquestions }}
</details>

