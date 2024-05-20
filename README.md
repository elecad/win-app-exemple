# Windows-приложение из любого сайта
##### Шаблон для быстрого создания

Данный репозиторий является личным шаблоном для быстрого создания win-приложений из написаных ранее сайтов.
Инструкция: 
- Сделать копию репозитория и установить зависимости ```npm i```
- Переместить исходный код сайта в папку ```web-source```
- Проверить работоспособность сайта ```npm run preview```
- Собрать приложение ```npm run build```. В папаке ```out``` появяться папка с приложением и нужными dll-файлами
- Если нужен вариант с авто-установкой ```npm run build:setup```. В папаке ```out``` появиться установочный файл

> Важно помнить, что внутри приложения поднимается локальный файловый сервер. Из-за этого пути к API желательно писать полностью, т.к. относительные пути не будут работать

### Описание npm-скриптов

| Скрипт | Описание | 
| ------ | ------ |  
| preview | Проверка работоспособности сайта |
| build | Сборка приложения. Появляется папка со всеми dll-файлами |
| build:setup | Файл для автоматической установки программы |

# Windows application from any website
##### Template for quick creation

This repository is a personal template for quickly creating win applications from previously written sites.
Instruction manual:
- Make a copy of the repository and install the dependencies ```npm i```
- Move the source code of the site to the ```web-source``` folder
- Check the functionality of the site ```npm run preview```
- Build the application ``npm run build`'. A folder with the application and the necessary dll files will appear in the `out` folder
- If you need an option with auto-installation ```npm run build:setup```. The installation file will appear in the ``out` folder

> It is important to remember that a local file server is being raised inside the application. Because of this, it is advisable to write the API paths in full, because relative paths will not work

### Description of npm scripts

| Script | Description |
| ------ | ------ |
| preview | Site health check |
| build | Building the application. A folder appears with all the dll files |
| build:setup | File for automatic installation of the program |