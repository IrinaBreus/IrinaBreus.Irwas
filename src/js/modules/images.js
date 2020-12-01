const images = () => {
    const workSection = document.querySelector('.works .container'),
          imgPopup = document.createElement('div'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup_engineer');
    workSection.append(imgPopup);
    

    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    bigImage.style.maxWidth = '70%';
    bigImage.style.maxHeight = '90%';

    imgPopup.append(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target || target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup_engineer')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    })
    
};

export default images;