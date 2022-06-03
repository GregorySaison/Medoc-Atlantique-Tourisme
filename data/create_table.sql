BEGIN;

DROP TABLE IF EXISTS "cities";

CREATE TABLE IF NOT EXISTS "cities" (
    "id" integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" varchar(255) NOT NULL DEFAULT '',
    "rate" integer,
    "created_at" timestamptz NOT NULL DEFAULT NOW(),
    "updated_at" timestamptz
);

COMMIT;