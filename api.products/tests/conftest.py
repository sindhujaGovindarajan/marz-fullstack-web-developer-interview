from pytest import fixture
from flask import Flask
from peewee import SqliteDatabase
from api.models import Product

_TABLES = (Product)

@fixture()
def test_db():
    db = SqliteDatabase(':memory:')
    # with db.bind_ctx(_TABLES):
    db.create_tables(_TABLES)
    yield db

@fixture()
def test_app(test_db):
    app = Flask(__name__)

    # def before_request():
    #     test_db.close()
    #     test_db.connect()
    # app.before_request(before_request)

    # def after_request(response):
    #     test_db.close()
    #     return response
    # app.after_request(after_request)

    app.config.update({
        "TESTING": True,
    })
    yield app
