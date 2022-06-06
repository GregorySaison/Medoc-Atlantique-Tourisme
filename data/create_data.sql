BEGIN; -- Rollback 

INSERT INTO "Cities" ("name", "rate") VALUES
('Hourtin', 20),
('Lege', 90),
('Arcachon', 32),
('Le Verdon', 43),
('Naujac', 12);

COMMIT;