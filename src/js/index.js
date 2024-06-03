document.addEventListener('DOMContentLoaded', () => {
    // Переключение стрелки в личном кабинете
    document
        .querySelector('.profile-arrow-button')
        .addEventListener('click', function () {
            const arrow = this.querySelector('.arrow-select-down');
            arrow.classList.toggle('rotated');
        });

    // Переключение меток

    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault(); // Предотвращаем действие по умолчанию
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});
