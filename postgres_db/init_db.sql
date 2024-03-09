CREATE DATABASE teste_juridico;

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(14) NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);

CREATE TABLE "location" {
    "id" SERIAL PRIMARY KEY,
    "coordinates" JSONB,
    "user_id" INT REFERENCES user(id),
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
};