CREATE DATABASE users_db;

\c users_db

CREATE TABLE users(
    id SERIAL,
    login VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    age INTEGER NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (login, password, age) VALUES ('user1', 'password1', 11);
INSERT INTO users (login, password, age) VALUES ('user2', 'password2', 22);
INSERT INTO users (login, password, age) VALUES ('user3', 'password3', 33);
INSERT INTO users (login, password, age) VALUES ('user4', 'password4', 44);
INSERT INTO users (login, password, age) VALUES ('user5', 'password5', 55);
