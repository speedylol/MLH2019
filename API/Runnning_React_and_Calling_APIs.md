# Installing and Running React:-

## Example:-

mkdir maps  //Create a directory
cd maps     //Go inside the directory

sudo npm install -g create-react-app //Installing react via Node Package Manager
create-react-app gmaps-app           // Creating a react project; this will install react
npm install --save google-maps-react    //Installing the Google Maps API

npm start       // Starting a react project

The App.js is located at this path:-

### ~/maps/gmaps-app/node_modules/src/app.js  
This is the file which is exected finally using the command :-

### npm start

To integrate the Google Maps API, or any API in general, make changes in this file.
Maps is the folder we created earlier and gmaps-app is the project we created using create-react-app.
