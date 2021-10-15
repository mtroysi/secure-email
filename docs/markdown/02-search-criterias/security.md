<!-- .slide: class="transition bg-pink" -->

# Sécurité et vie privée

Notes:  
Qu'est-ce qui fait qu'une messagerie est sécurisée ? Quels sont les points à regarder ?

##==##

# Pays de juridiction

Dépend du siège social de l'entreprise

Attention aux <b>5 eyes</b> !  
Traité de coopération avec les agences de surveillances US  
=> Conservation obligatoire de vos données & activités

-   USA
-   UK
-   Canada
-   Australia
-   New Zealand
<!-- .element: class="list-fragment" -->

##==##

# Pays de juridiction

|             | ProtonMail | Tutanota | Mailfence | Posteo |
| ----------- | :--------: | :------: | :-------: | :----: |
| Juridiction |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |

Notes:
Location siège social ou serveurs ?

##==##

# Chiffrement

Chiffrement bout-à-bout : en quoi ça consiste ?

Le but : seuls l'auteur et le destinataire d'un message peuvent en connaître le contenu

<b>Exemple :</b>  
Bob and Alice veulent communiquer en privé  
Ils génèrent chacun une paire clé publique / clé privée

##==##

# Clé publique et clé privée

<b>La clé publique :</b>

-   Sert à chiffrer les messages qu'on vous envoie
-   Peut être partagée avec vos contacts

<b>La clé privée :</b>

-   Sert à déchiffrer les messages chiffrés avec votre clé publique
-   Ne doit pas être partagée !

##==##

# Chiffrement

![encryption](./assets/images/encryption.png)

Bob et Alice échangent leur clé publique et démarrent leur conversation chiffrée

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
Le serveur ne peut pas déchiffrer le message => seule Alice a accès au contenu avec sa clé privée !

Notes:  
Bob envoie son message à Alice : sur le chemin, le message va passer par différents serveurs, dont ceux du service de messagerie. Même si qqn essaye de lire le message ou d'en partager le contenu à des sociétés tierces, il leur sera impossible de déchiffrer le contenu car seule la clé privée d'Alice peut déchiffrer le message
Géré nativement par les messageries protonmail etc. => annuaire partagé
Réalisable client/gmail mais pas natif et pas complet => metadata

##==##

# Chiffrement

Chiffrement bout-à-bout géré nativement par certaines messageries

Certains standards ne chiffrent pas les metadata ! (sujet, expéditeur, destinataire)

Notes:  
Géré nativement par les messageries protonmail etc. => annuaire partagé
Réalisable client/gmail mais pas natif et pas complet => metadata

##==##

# Chiffrement

|                         | ProtonMail | Tutanota | Mailfence | Posteo |
| ----------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction             |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement bout-à-bout |     ✅     |    ✅    |    ✅     |   ✅   |
| Chiffrement metadata    |     ❌     |    ❌    |    ❌     |   ✅   |

##==##

# Open-source

|                         | ProtonMail | Tutanota | Mailfence | Posteo |
| ----------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction             |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement bout-à-bout |     ✅     |    ✅    |    ✅     |   ✅   |
| Chiffrement metadata    |     ❌     |    ❌    |    ❌     |   ✅   |
| Open-source             |     ✅     |    ✅    |    ❌     |   ✅   |

##==##

# Inscription anonyme

|                         | ProtonMail | Tutanota | Mailfence | Posteo |
| ----------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction             |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement bout-à-bout |     ✅     |    ✅    |    ✅     |   ✅   |
| Chiffrement metadata    |     ❌     |    ❌    |    ❌     |   ✅   |
| Open-source             |     ✅     |    ✅    |    ❌     |   ✅   |
| Inscription anonyme     |     ✅     |    ✅    |    ❌     |   ✅   |

##==##

# Double authentification (2FA)

|                         | ProtonMail | Tutanota | Mailfence | Posteo |
| ----------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction             |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement bout-à-bout |     ✅     |    ✅    |    ✅     |   ✅   |
| Chiffrement metadata    |     ❌     |    ❌    |    ❌     |   ✅   |
| Open-source             |     ✅     |    ✅    |    ❌     |   ✅   |
| Inscription anonyme     |     ✅     |    ✅    |    ❌     |   ✅   |
| 2FA                     |     ✅     |    ✅    |    ✅     |   ✅   |
