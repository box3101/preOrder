// main.js
import { initializeSwiper } from "./swiper.js";
import { initializeColorTab } from "./colorTab.js";
import { initializeMainTab } from "./mainTab.js";
import { initializeNotice } from "./notice.js";
import { initializeCountdown } from "./countDown.js";
import { initializeAccordion } from "./accordian.js";
import { showAlert } from "./alertPopup.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initializeSwiper();
    initializeColorTab();
    initializeMainTab();
    initializeNotice();
    initializeCountdown();
    initializeAccordion();

    // 자세히 보기 버튼 클릭 이벤트 리스너 추가
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("detail-btn")) {
        const model = e.target.dataset.model;
        const storage = e.target.dataset.storage;
        showAlert(model, storage);
      }
    });
  }, 100);
});