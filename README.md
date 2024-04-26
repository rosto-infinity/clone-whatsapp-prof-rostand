# clone-whatsapp-prof-rostand

Ce projet est un clone de l'interface utilisateur de WhatsApp Web, avec un backend et un frontend. Le dossier backend contient les packages suivants :

- axios : Pour effectuer des requêtes HTTP.
- bcryptjs : Pour le chiffrement des mots de passe.
- dotenv : Pour la gestion des variables d'environnement.
- express : Un framework pour créer des applications web en Node.js.
- jsonwebtoken : Pour la génération et la vérification des jetons d'authentification.
- mongodb : Le pilote officiel de MongoDB pour Node.js.
- mongoose : Une bibliothèque d'objets pour modéliser les données de MongoDB.
- socket.io : Pour la communication en temps réel entre le serveur et le client.

Le dossier frontend contient les packages suivants :

- axios : Pour effectuer des requêtes HTTP.
- react : La bibliothèque JavaScript pour construire l'interface utilisateur.
- react-dom : Pour interagir avec l'arbre de composants React dans le navigateur.
- react-icons : Une bibliothèque d'icônes pour React.

Pour exécuter l'application, vous pouvez utiliser les scripts suivants :

- `npm run dev` : Lance le serveur de développement pour le frontend.
- `npm run build` : Construit l'application frontend pour la production.
- `npm run lint` : Vérifie le style de code avec ESLint.
- `npm run preview` : Prévisualise l'application construite avant le déploiement.

Assurez-vous d'installer les dépendances nécessaires en exécutant `npm install` dans les dossiers backend et frontend.

## Utilisation

1. Clonez ce dépôt : `git clone https://github.com/rosto-infinity/clone-whatsapp-prof-rostand.git`
2. Accédez au dossier backend : `cd backend`
3. Installez les dépendances : `npm install`
4. Lancez le serveur backend : `npm start`
5. Accédez au dossier frontend : `cd ../frontend`
6. Installez les dépendances : `npm install`
7. Lancez le serveur de développement frontend : `npm run dev`
8. Ouvrez votre navigateur et accédez à l'URL http://localhost:3000

N'hésitez pas à contribuer, signaler des problèmes ou faire des suggestions d'amélioration en créant des problèmes (issues) dans ce dépôt.

1. Dossier "config" :
   • Fichier "db.js" : Ce fichier contient la configuration et la connexion à la base de données MongoDB. Il utilise généralement le package "mongoose" pour interagir avec la base de données.

2. Dossier "controllers" :
   • Fichier "messageControllers.js" : Ce fichier contient les contrôleurs ou les gestionnaires de requêtes liés à la manipulation des messages. Il peut inclure des fonctions pour créer, lire, mettre à jour ou supprimer des messages.
   • Fichier "userControllers.js" : Ce fichier contient les contrôleurs ou les gestionnaires de requêtes liés à la manipulation des utilisateurs. Il peut inclure des fonctions pour créer, lire, mettre à jour ou supprimer des utilisateurs.

3. Dossier "middlewares" :
   • Fichier "authMiddleware.js" : Ce fichier contient le middleware d'authentification. Il peut inclure des fonctions pour vérifier l'authenticité d'un utilisateur à l'aide de jetons d'authentification ou d'autres mécanismes.

• Fichier "errorsMiddleware.js" : Ce fichier contient le middleware de gestion des erreurs. Il peut inclure des fonctions pour capturer et gérer les erreurs survenues lors du traitement des requêtes.

4. Dossier "models" :
   • Fichier "messageModels.js" : Ce fichier contient le modèle ou la structure de données pour les messages. Il définit généralement le schéma des messages et peut inclure des méthodes pour interagir avec la base de données.
   • Fichier "userModels.js" : Ce fichier contient le modèle ou la structure de données pour les utilisateurs. Il définit généralement le schéma des utilisateurs et peut inclure des méthodes pour interagir avec la base de données.

5. Dossier "routes" :
   • Fichier "messageRoutes.js" : Ce fichier contient les routes ou les points de terminaison liés aux messages. Il associe les URL spécifiques aux fonctions des contrôleurs correspondantes pour traiter les requêtes.
   • Fichier "userRoutes.js" : Ce fichier contient les routes ou les points de terminaison liés aux utilisateurs. Il associe les URL spécifiques aux fonctions des contrôleurs correspondantes pour traiter les requêtes.

6. Dossier "utilities" :
   • Fichier "hashPassword.js" : Ce fichier contient des fonctions utilitaires pour le hachage et la comparaison des mots de passe des utilisateurs. Il peut utiliser des algorithmes de hachage tels que bcrypt pour sécuriser les mots de passe.
   • Fichier "jsonWebToken.js" : Ce fichier contient des fonctions utilitaires pour la génération et la vérification des jetons d'authentification JSON Web Token (JWT). Il peut utiliser des packages tels que "jsonwebtoken" pour gérer les jetons.

7. Fichier "server.js" : Ce fichier est le point d'entrée principal de l'application backend. Il configure et lance le serveur HTTP, définit les routes et les middlewares, et gère les connexions à la base de données.

Assurez-vous de comprendre la structure de votre projet et d'adapter les explications en fonction de vos propres fichiers et logique d'application.
