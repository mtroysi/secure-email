<!-- .slide: class="transition bg-pink" -->

# Sécurité et vie privée

Notes:  
Qu'est-ce qui fait qu'une messagerie est sécurisée ? Quels sont les points à regarder ?

##==##

# Pays de juridiction

Dépend du siège social de l'entreprise

Attention aux <b>5 eyes</b> !

-   🇺🇸 Etats-Unis
-   🇬🇧 Royaume-Uni
-   🇨🇦 Canada
-   🇦🇺 Australie
-   🇳🇿 Nouvelle-Zélande
<!-- .element: class="list-fragment" -->

##==##

# Pays de juridiction

|             | ProtonMail | Tutanota | Mailfence | Posteo |
| ----------- | :--------: | :------: | :-------: | :----: |
| Juridiction |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |


##==##

# Chiffrement

Chiffrement end-to-end : en quoi ça consiste ?

![encryption](./assets/images/encryption.png)

Notes:  
Bob envoie son message à Alice : sur le chemin, le message va passer par différents serveurs, dont ceux du service de messagerie. Même si qqn essaye de lire le message ou d'en partager le contenu à des sociétés tierces, il leur sera impossible de déchiffrer le contenu car seule la clé privée d'Alice peut déchiffrer le message
Géré nativement par les messageries protonmail etc. => annuaire partagé
Réalisable client/gmail mais pas natif et pas complet => metadata

##--##

# Clé publique et clé privée

<b>La clé publique :</b>

-   Sert à chiffrer les messages qu'on vous envoie
-   Peut être partagée avec vos contacts

<b>La clé privée :</b>

-   Sert à déchiffrer les messages chiffrés avec votre clé publique
-   Ne doit pas être partagée !

##==##

# Chiffrement

|                        | ProtonMail | Tutanota | Mailfence | Posteo |
| ---------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction            |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement end-to-end |     ✅     |    ✅    |    ✅     |   ✅   |


##==##

# Open-source

|                        | ProtonMail | Tutanota | Mailfence | Posteo |
| ---------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction            |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement end-to-end |     ✅     |    ✅    |    ✅     |   ✅   |
| Open-source            |     ✅     |    ✅    |    ❌     |   ✅   |

##==##

# Inscription anonyme

|                        | ProtonMail | Tutanota | Mailfence | Posteo |
| ---------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction            |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement end-to-end |     ✅     |    ✅    |    ✅     |   ✅   |
| Open-source            |     ✅     |    ✅    |    ❌     |   ✅   |
| Inscription anonyme    |     ✅     |    ✅    |    ❌     |   ✅   |

##==##

# Double authentification (2FA)

|                        | ProtonMail | Tutanota | Mailfence | Posteo |
| ---------------------- | :--------: | :------: | :-------: | :----: |
| Juridiction            |     🇨🇭     |    🇩🇪    |    🇧🇪     |   🇩🇪   |
| Chiffrement end-to-end |     ✅     |    ✅    |    ✅     |   ✅   |
| Open-source            |     ✅     |    ✅    |    ❌     |   ✅   |
| Inscription anonyme    |     ✅     |    ✅    |    ❌     |   ✅   |
| 2FA                    |     ✅     |    ✅    |    ✅     |   ✅   |
