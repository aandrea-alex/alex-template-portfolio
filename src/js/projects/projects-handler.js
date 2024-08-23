import projectsListCreate from './projects-list-create';
import { projectsUrl } from '../helpers/data-projects';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

let projectsSwiper;

const projectsListRef = document.querySelector('.projects-list');

projectsListRef && initializeProjectsList();

async function initializeProjectsList() {
  try {
    await projectsListCreate(projectsUrl, projectsListRef);
    projectsSwiper = new Swiper('.projects-swiper-container', {
      modules: [Navigation, Keyboard],
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '.projects-btn-next',
        prevEl: '.projects-btn-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      speed: 1000,
      effect: 'slide', // ('slide', 'fade', 'cube', 'coverflow', '')
      on: {
        init: updateNavigationState,
        slideChange: updateNavigationState,
      },
      touchEventsTarget: 'wrapper',
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
    });
  } catch (error) {
    console.log(error.message);
  }
}

function updateNavigationState() {
  if (!projectsSwiper) return;

  const prevButton = document.querySelector('.projects-btn-prev');
  const nextButton = document.querySelector('.projects-btn-next');

  if (projectsSwiper.isBeginning) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (projectsSwiper.isEnd) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
