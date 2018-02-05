//bootstrapping
 
import {render} from "react-dom";
import React from "react";

//polyfill for fetch
//support fetch for old browsers

import "whatwg-fetch";

//below entries from config/development or production.json

import config from "config";

import store from "./app/Store";

import {Provider} from "react-redux";

import Quiz from "./app/containers/Quiz";


//Provider has getChildContext, expose store to child comp
render( <Provider store={store}> 
                  <Quiz />
        </Provider>, 
       document.getElementById("root") //real dom
      )