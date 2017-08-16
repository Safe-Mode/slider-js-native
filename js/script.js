var btnPrev = document.querySelector('#gallery .buttons .prev'),
    btnNext = document.querySelector('#gallery .buttons .next'),
    photos = document.querySelector('#gallery .photos'),
    images = photos.querySelectorAll('img'),
    imgWidth = images[0].offsetWidth,
    position = 0,
    i = 0;

var timerId = setInterval(function() {
        if (i == images.length - 1) {
            i = -1;
            position = imgWidth;
        }

        photos.style.left = position - imgWidth + 'px';
        position -= imgWidth;
        i++;
    }, 3000);

btnPrev.onclick = function() {
    clearInterval(timerId);

    if (i > 0) {
        photos.style.left = position + imgWidth + 'px';
        position += imgWidth;
        i--;
    } else {
        position = -imgWidth * (images.length - 1);
        photos.style.left = position + 'px';
        i = images.length - 1;
    }
}

btnNext.onclick = function() {
    clearInterval(timerId);

    if (i < images.length - 1) {
        photos.style.left = position - imgWidth + 'px';
        position -= imgWidth;
        i++;
    } else {
        i = 0;
        position = 0;
        photos.style.left = 0 + 'px';
    }
}