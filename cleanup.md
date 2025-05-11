# In demo-react-plugin directory
rm -rf node_modules
rm -rf build
npm install
npm run build

# In rn-app directory
cd /Applications/work-mac/bidpath-work/bidpath-demo-widget/widget_and_next_tsnode/rn-app
rm -rf node_modules
rm -rf .expo
npm install

# Start the app again
npx expo start --clear