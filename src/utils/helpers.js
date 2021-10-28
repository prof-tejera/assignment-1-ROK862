// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// import { Helpers } from "react-scroll";

// everywhere.
const { default: firebase } = require("./firebase");
const { collection, getDocs } = require("firebase/firestore");
const { ref, set, get } = require("firebase/database");

const consoleStyle = (color) =>
  `color:white; background: ${color}; font-weight: bold; padding:5px; border-radius:5px`;

// Helper Modules
const abstract = () => {};
abstract.api = () => {};
abstract.sys = () => {};
abstract.db = () => {};
abstract.ui = () => {};

// App Global Properties.
const APP_GLOBAL = {
  USER: null,
  LOGIN: { status: "uninitialized" },
  VERSION: "1.0.1",
  BUILD: "Development"
};

// System Tools
abstract.sys.warn = (message, caller = null) =>
  console.warn(
    `%c${JSON.stringify({ code: 201, message: message, caller: caller })}`,
    consoleStyle("orange")
  );
abstract.sys.error = (message, caller = null) =>
  console.error(
    `%c${JSON.stringify({ code: 501, message: message, caller: caller })}`,
    consoleStyle("red")
  );
abstract.sys.info = (message, caller = null) =>
  console.log(
    `%c${JSON.stringify({ code: 200, message: message, caller: caller })}`,
    consoleStyle("gray")
  );
abstract.sys.getDate = () =>
  new Date().toISOString().slice(0, 19).replace("T", " ");
abstract.sys.getGlobals = () => APP_GLOBAL;

// Helper Methods
abstract.api.getJSON = ({ endpoint, options, callback }) => {
  const apiCall = new Promise((resolve, reject) => {
    const ops = options ? options : {};
    fetch(endpoint, ops).then((res) => {
      try {
        resolve(res.json());
      } catch (ex) {
        abstract.sys.warn(
          `api call to [${endpoint}] has been rejected due to the following exception: ${ex}`,
          null
        );
        reject({ error: 201 });
      }
    });
    apiCall.then();
  });
};

abstract.sys.getUserData = () => {
  if (APP_GLOBAL.LOGIN.status === "active") return APP_GLOBAL;
  return null;
};

abstract.sys.isLoggedIn = () => {
  if (APP_GLOBAL.LOGIN && APP_GLOBAL.LOGIN.status === "active") {
    console.log(APP_GLOBAL.LOGIN);
    return true;
  } else {
    return false;
  }
};

abstract.sys.getLogin = (user, onSuccess = null) => {
  if (abstract.sys.isLoggedIn()) return true;

  // Reset login process.
  // Did we get a user from login input?
  // Set Global user property to user name.
  
  const callToFuture = new Promise (async (resolve, reject) => {
    APP_GLOBAL.LOGIN = { status: "unauthorized" };
    if (!user) reject([]);
    const userData = await abstract.db.get({ refId: `appUsers/${user}` }).then();
    APP_GLOBAL.USER = user;
    console.log(
      `%c System is trying to log you in as [${APP_GLOBAL.USER}]`,
      consoleStyle("black")
    );
    if (userData) {
      userData.status = "active";
      APP_GLOBAL.LOGIN = userData;
      console.log(
        `%c System requirs authentication (mocked) [${JSON.stringify(userData)}]`,
        consoleStyle("green")
      );
      if (onSuccess) onSuccess(APP_GLOBAL.LOGIN);
      resolve([]);
    } else {
      console.log(
        `%c Authentication failed (mocked) [${JSON.stringify(userData)}]`,
        consoleStyle("green")
      );
      reject([]);
    }
  });  

  callToFuture.then((res)=> {
      // Return or invoke callback.
      if (onSuccess != null) {
        onSuccess(res);
      }
  });
  
};

abstract.db.push = ({ refId, cols, callback }) => {
  // Test required inputs.
  if (!refId || !cols)
    return abstract.sys.warn(
      "Object reference error occured while parsing data to Firebase. This query will not be executed :("
    );

  const callToFuture = new Promise (async (resolve, reject) => {
    await set(ref(firebase.database, `${refId}/`), cols);
    resolve(`{action: "set", refId: "${refId}""}`);
  });
  
  callToFuture.then((res)=>{
      abstract.sys.info(res);
  });
};

abstract.db.get = async ({ refId }) => {
  // ## Hmm. Lets try something different here. We will query firebase JSON file instead of using the
  // ## built in database get function.
  // 1. Test required inputs.
  // 2. Query furebase json file in cloud. Seems to work faster for my setting.
  // 3. Convert response data from json string to array.
  // 4. Return json object instead of promise.

  return new Promise (async (resolve, reject) => {
    if (!refId)
    return abstract.sys.warn(
      "Object reference error occured while parsing data to Firebase. This query will not be executed :("
    );
    return await fetch(
      `https://cs39harvard-default-rtdb.firebaseio.com/${refId}.json`
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => {
        reject([{ error: 500, message: err }]);
      });
  });
};

abstract.sys.debugClickEvent = (e) => {
  return { default: () => console.log("Action Button Called", e) }.default;
};

abstract.ui.getDynamicTabs = async (id, render) => {
  // ## Okay, this is another experimental module.
  // We are going to generate form data from firebase JSON records.
  // With this module, i intent to solve a problem with shipping friquency of minor
  // updates. Essentially, with this, we can ship updates to devices in realtime--mearly with
  // database updates.

  return new Promise(async (resolve, reject) => {
    const comps = await abstract.db.get({ refId: id, cols: render });
    if (comps) {
      abstract.sys.warn(comps);
      comps.forEach((e, n) => {
        // map render components to the assiciated objects.
        if (n < render.length) e.renderComp = render[n];
      });
      resolve(comps);
    } else {
      reject([]);
    }
  });
};

export default abstract;
