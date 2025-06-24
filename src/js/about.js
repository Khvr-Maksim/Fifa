import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import {useAboutSlider} from './components/about/slider.js';
import { useBurger } from './components/burger.js';

useTheme();
useBurger();
useAboutSlider();