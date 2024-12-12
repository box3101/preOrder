export function initializeColorTab() {
  // 모든 common-tabs 클래스를 가진 요소를 선택
  const comTabs = document.querySelectorAll(".common-tabs");
  if (!comTabs) return; // 탭이 없으면 함수 종료

  comTabs.forEach((tab) => {
    // 각 탭 그룹 내의 탭 메뉴 아이템과 컨텐츠를 선택
    const items = tab.querySelectorAll(".common-tab-menu-item");
    const contents = tab
      .closest(".tab-group")
      .querySelectorAll(".common-tab-content");

    // 탭 클릭 이벤트 리스너 추가

    tab.addEventListener("click", (e) => {
      const target = e.target.closest(".common-tab-menu-item");
      const targetContent = target.getAttribute("data-tab");
      if (!target) return; // 클릭된 요소가 탭 메뉴 아이템이 아니면 무시
      // 모든 탭과 컨텐츠의 active 클래스 제거
      items.forEach((item) => item.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // 선택된 탭과 해당 컨텐츠에 active 클래스 추가
      target.classList.add("active");
      target
        .closest(".tab-group")
        .querySelector(`[id="${targetContent}"]`)
        .classList.add("active");
    });
  });
}