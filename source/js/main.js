document.addEventListener('DOMContentLoaded', function () {
    const phoneNumber = document.getElementById('phone-number').innerText;
    const copyButton = document.getElementById('copy-phone-btn');

    // Функция для копирования текста
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            // Для современных браузеров
            navigator.clipboard.writeText(text).then(() => {
                alert('Номер скопирован: ' + text);
            }).catch((err) => {
                console.error('Ошибка копирования: ', err);
            });
        } else {
            // Резервный вариант для старых браузеров
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                alert('Номер скопирован: ' + text);
            } catch (err) {
                console.error('Ошибка копирования: ', err);
            }
            document.body.removeChild(textarea);
        }
    }

    // Обработчик клика по кнопке
    copyButton.addEventListener('click', function () {
        copyToClipboard(phoneNumber);

        // Автоматическая вставка на мобильных устройствах
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = `tel:${phoneNumber.replace(/\s|-|\(|\)/g, '')}`;
        }
    });
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header.fixed-top');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});