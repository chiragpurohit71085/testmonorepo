To publish your demo-react-plugin as a private package in a GitHub repository and use it in other repositories or projects, follow these steps:

---

### 1. **Prepare the GitHub Repository**
1. Create a new private repository on GitHub (e.g., demo-react-plugin).
2. Push your existing code to this repository:
   ```bash
   git remote add origin https://github.com/<your-username>/demo-react-plugin.git
   git branch -M main
   git push -u origin main
   ```

---

### 2. **Configure GitHub Packages**
GitHub Packages allows you to publish npm packages directly to your GitHub repository.

1. Update the package.json file to include the GitHub registry:
   ```json
   {
     "name": "@<your-username>/demo-react-plugin",
     "version": "1.0.0",
     "main": "build/index.js",
     "module": "build/index.es.js",
     "files": [
       "build"
     ],
     "publishConfig": {
       "registry": "https://npm.pkg.github.com/"
     },
     "author": "",
     "license": "ISC",
     "description": "",
     "peerDependencies": {
       "react": ">=16.8.0",
       "react-dom": ">=16.8.0"
     },
     "devDependencies": {
       ...
     }
   }
   ```

   Replace `<your-username>` with your GitHub username.

2. Log in to GitHub's npm registry:
   ```bash
   npm login --registry=https://npm.pkg.github.com
   ```
   Provide your GitHub username, email, and a personal access token (PAT) with the `write:packages` and `read:packages` permissions.

---

### 3. **Publish the Package**
Run the following command to publish the package to GitHub Packages:
```bash
npm publish
```

---

### 4. **Use the Package in Another Repository**
To use the package in another project, update the `.npmrc` file in the consuming project to include the GitHub registry and authentication token:

#### Add `.npmrc` to the Project Root:
```ini
@<your-username>:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

#### Install the Package:
```bash
npm install @<your-username>/demo-react-plugin
```

---

### 5. **Verify the Setup**
1. Import the package in your consuming project:
   ```tsx
   import { SampleComponent } from "@<your-username>/demo-react-plugin";
   ```
2. Use the component as needed.

---

### Notes:
- Ensure your .gitignore excludes unnecessary files like `node_modules` and `build`.
- If you are using CI/CD pipelines, ensure the pipeline has access to the GitHub token for authentication.
- You can also automate the publishing process using GitHub Actions if needed.