"use strict";

//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;
//Init intersect plugin
Alpine.plugin(intersect);
//Init persist plugin
Alpine.plugin(persist);
//Init store
Alpine.store("app", {
  init() {
    this.on = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  isDark: Alpine.$persist(false),
});

//Start Alpine JS
Alpine.start();

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
    const players = initVideoPlayers();

    //Maps
    const maps = initMapBox();
  }
};
