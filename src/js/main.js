"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import Fern from "@ryangjchandler/fern";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init Fern plugin
Alpine.plugin(Fern);
//Init Fern persisted store
Alpine.persistedStore("app", {
  isDark: false,
});
//Start Alpine JS
Alpine.start();

import { env } from "./libs/utils/constants";
import { insertBgImages } from "./libs/utils/utils";
import { initVideoPlayers } from "./libs/components/player/player";
import { initMapBox } from "./libs/components/map/map";
import { initLazyLoading } from "./libs/utils/lazyload";
import "./libs/demo";
import "./libs/components";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Lazy Loading
    const lazy = initLazyLoading();
    
    //Switch backgrounds
    const changeBackgrounds = insertBgImages();

    //Video Players
    const players = initVideoPlayers(env);

    //Maps
    const maps = initMapBox();
  }
};
