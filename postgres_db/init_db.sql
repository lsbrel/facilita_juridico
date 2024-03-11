CREATE DATABASE teste_juridico;

\connect teste_juridico;

CREATE TABLE "tb_user" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(14) NOT NULL,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);

CREATE TABLE "tb_location" (
    "id" SERIAL PRIMARY KEY,
    "coordinates" JSONB,
    "user_id" INT REFERENCES tb_user(id) ON DELETE CASCADE,
    "created_at" DATE NOT NULL,
    "updated_at" DATE NOT NULL
);