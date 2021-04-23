export default function loadScript(url, callback) {

    // Проверяем первый аргумент на соответсвие строки или массива зависимостей
    if (typeof url === 'string' || Array.isArray(url)) {
        
        if (Array.isArray(url)) {

            // Если первый аргумент массив зависимостей, загружаем каждый модуль

            url.forEach(item => {
                loadScript(item);
            });
            
        } else {

            // Если первый аргумент путь к файлу, добавляем скрипт на страницу
            // Проверяем был ли загружен скрипт ранее 

            if (document.querySelector('script').src != url) {
                const el = document.createElement('script');
                el.src = url;
                el.type = 'text/javascript';
                document.body.appendChild(el); 

                // Выполняем колбек функцию после загрузки скрипта на страницу
                el.addEventListener('load', callback);

            }
        }

    // Если аргумент колбек функция
    } else {

        if (typeof url === 'function') {
            console.log('Callback function');
        }

    }

}