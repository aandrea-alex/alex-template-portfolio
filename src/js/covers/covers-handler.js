import marqueeCreate from './marquee-create';
import { projectsUrl } from '../helpers/data-projects';

const marqueeRef = document.querySelector('.covers-marquee');

marqueeCreate(projectsUrl, marqueeRef);
