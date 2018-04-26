INSERT INTO places (destination, attractions, activites, resturant, email) VALUES ("Hawaii", "volcanoes", "hiking","honolulu cafe", "joe@gmail.com");

CREATE TABLE places
(
	id int NOT NULL AUTO_INCREMENT,
	destination TEXT NOT NULL,
    attractions TEXT NOT NULL,
    activities TEXT NOT NULL,
    resturant TEXT,
	email TEXT NOT NULL,
	PRIMARY KEY (id)
);