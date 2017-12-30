// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAuVBA3Hmwtmv5VSxG1aMSCP5tegXv2I7Q",
    authDomain: "angular5crud.firebaseapp.com",
    databaseURL: "https://angular5crud.firebaseio.com",
    projectId: "angular5crud",
    storageBucket: "angular5crud.appspot.com",
    messagingSenderId: "836539607922"
  }
};
