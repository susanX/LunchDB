BEGIN;

DROP TABLE IF EXISTS people cascade;

CREATE TABLE people (
  people_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL
);

  DROP TABLE IF EXISTS lunches cascade;

  CREATE TABLE lunches (
    lunch_id SERIAL PRIMARY KEY NOT NULL,
    lunch VARCHAR(100) NOT NULL
  );

  INSERT INTO lunches (lunch)
  VALUES ('Italian'),
         ('Corbyn'),
         ('Chinese'),
         ('Indian');

  DROP TABLE IF EXISTS bookings cascade;

  CREATE TABLE bookings (
    people_id SERIAL REFERENCES people(people_id)NOT NULL,
    lunch_id SERIAL REFERENCES lunches(lunch_id)NOT NULL,
    PRIMARY KEY (people_id, lunch_id),
    vegy BOOLEAN,
    paid BOOLEAN
  );

COMMIT;
