CREATE TABLE IF NOT EXISTS cards (
    id SERIAL PRIMARY KEY,
    number INT NOT NULL,
    click_count INT DEFAULT 0,
    first_click TIMESTAMP NULL
);

-- Seed 8 cards
INSERT INTO cards (number, click_count, first_click)
SELECT i, 0, NULL
FROM generate_series(1, 8) AS s(i)
ON CONFLICT DO NOTHING;
