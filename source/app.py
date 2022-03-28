# app.py является неким API.
# API позволяет позволяет описать действия по обработке поступающих запросов.
# Сами же запросы поступают с помощью Ajax запросов.

# Для разработки сайта 
from flask import Flask

# Для получения и ответа на Ajax запросы в формате json
from flask import request, jsonify

# Для работы с БД
import pymysql
from pymysql.cursors import DictCursor

# Для получения тек. времени при оформлении заказа
from datetime import datetime

# Основным файлом для работы с Flask будет файл app.py
# Папка static будет содержать неизменяемый JS и CSS
app = Flask(__name__, static_folder="static")


# Настройка соединения с БД.
# Она позволяет конвертировать время из SQL в строку
conv = pymysql.converters.conversions.copy()
conv[12] = str # Конвертация формата времени получаемого из БД в строку,
# формат которой позволяет загрузить данные обратно в БД.
# Это необходимо для сохранения времени оформления заказа

# print("Просмотр кодов для настроек: \n")
# print(conv)

# Установка соединения с БД
dbh = pymysql.connect(
        host='185.12.94.106',
        user='2p1s10',
        password='TOP SECRET. DO NOT HACK ME',
        db='2p1s10',
        charset='utf8mb4',
        cursorclass=DictCursor,
        autocommit=True,
        conv=conv # Добавление моих конвертеров при взаимодействии с БД
    )

# Запуск страниц сайта
@app.route('/home')
@app.route('/')
def main_page():
    html = open("index.html", "r")
    page = html.read()
    html.close()
    return page

# Запрос на получение ассортимента
@app.route('/get_products_list')
def get_products_list():
    try:
        with dbh.cursor() as cur:
            cur.execute('SELECT * FROM ???') # Получить все данные для отображения ассортимента
            products = cur.fetchall()
    except:
        products = { 'error': 'Ошибка чтения таблицы продукции' }

    return jsonify(products)

@app.route('/get_author', methods=['POST'])
def get_author():
    out_data = {'status': 'error'}
    id = request.form.get('id') # получение id строчки контакта из таблицы

    # Действия над существующим автором
    if int(id) > 0:
        try:
            with dbh.cursor() as cur:
                # Получение данных из таблицы об авторе
                cur.execute('SELECT * FROM blog_authors WHERE id='+str(id))
                author_data = cur.fetchall()
                out_data = {
                    'status': 'ok', # Установка статуса, что опреация выполнена успешно. # Нужно для работы JS функций
                    'author': author_data[0], # Сохранение всех данных о выбранном пользователе
                }
        except:
            out_data = {
                'status': 'error'
            }
    # Создание нового автора
    else:
        new_author = {
            'f': '',
            'i': '',
            'o': '',
            'id': 0
        }
        out_data = {
            'status': 'ok',
            'author': new_author,
        }
    return jsonify(out_data)


@app.route('/delete_author', methods=['POST'])
def delete_author():
    out_data = {'status': 'error'}
    id = request.form.get('id')

    if int(id) > 0:
        try:
            with dbh.cursor() as cur:
                cur.execute('DELETE FROM blog_authors WHERE id = '+str(id))
                out_data = {
                    'status': 'ok',
                }
        except:
            out_data = {
                'status': 'error'
            }

    return jsonify(out_data)


# Эта функция сохраняет данные формы
@app.route('/save_author', methods=['POST'])
def save_author():
    # Получение данных data с помощью библ. request
    id = int(request.form.get('id'))
    f = request.form.get('f')
    i = request.form.get('i')
    o = request.form.get('o')

    # Проверка получения данных
    print(f"{id}, {f}, {i}, {o}")

    sql = ''
    if id > 0:
        sql = f"UPDATE blog_authors SET f='{f}', i='{i}', o='{o}' WHERE id={id}"
    else:
        sql = "INSERT INTO blog_authors (f, i, o)"
        sql += f" VALUES('{f}','{i}','{o}')"

    # Попытка выполнить sql
    print(sql)
    try:
        with dbh.cursor() as cur:
            cur.execute(sql)
            out_data = {
                'status': 'ok'
            }
    except:
        out_data = {
            'status': 'error'
        }

    return jsonify(out_data)

# Запуск приложения на сервере колледжа
app.run(debug = True, host='db-learning.ithub.ru', port=1177)
