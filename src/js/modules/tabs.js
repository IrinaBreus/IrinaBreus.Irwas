const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    hideTabContent();
    showTabContent();

    function hideTabContent() {
        tab.forEach(btn => {
            btn.classList.remove(activeClass);
        });
        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabContent(i = 0) {
        tab[i].classList.add(activeClass);
        content[i].style.display = display;
    }

    header.addEventListener('click', (e) => {
        if (e.target && (
            e.target.classList.contains(tabSelector.replace(/\./, '')) ||
            e.target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
        )) {
            tab.forEach((btn, i) => {
                if (e.target == btn || e.target.parentNode == btn) {
                    hideTabContent();
                    showTabContent(i);    
                }
            });
        }
    });
};

export default tabs;