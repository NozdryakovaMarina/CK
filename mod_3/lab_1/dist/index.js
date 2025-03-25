function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'dishe.json', true);
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.responseText);
                console.log("Данные из JSON:", data);
            }
            catch (error) {
                console.log("Ошибка загрузки: ", error);
            }
        }
        else {
            console.error('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        }
    };
    xhr.send();
}
document.addEventListener('DOMContentLoaded', loadData);
