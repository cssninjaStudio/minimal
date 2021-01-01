"use strict";

//Set environment variable
const env = 'development';

import './store/store';
import 'alpinejs';
import { initPageLoader } from './libs/components/pageloader';
import { switchDemoImages, insertBgImages } from './libs/utils/utils';
import { initNavbar } from './libs/components/navbar';
import { initVideoPlayers } from './libs/components/player';
import { initMapBox } from './libs/components/map';
const feather = require('feather-icons');

window.initNavbar = initNavbar;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages(env);

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();

        //Video Players
        const players = initVideoPlayers(env);

        //Maps
        const maps = initMapBox();
        
    }
}

