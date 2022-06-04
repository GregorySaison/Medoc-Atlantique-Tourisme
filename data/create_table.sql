BEGIN;

DROP TABLE IF EXISTS "Cities";

CREATE TABLE IF NOT EXISTS "Cities" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" varchar(255) NOT NULL DEFAULT '',
    "rate" integer,
    "createdAt" timestamptz NOT NULL DEFAULT NOW(),
    "updatedAt" timestamptz
);

COMMIT;