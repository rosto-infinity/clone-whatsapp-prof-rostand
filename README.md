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