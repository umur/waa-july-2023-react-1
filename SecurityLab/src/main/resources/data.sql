INSERT IGNORE product_db.address (id, street, zip, city)  values (1, 'street 1', 'zip 1', 'city1');
INSERT IGNORE product_db.address (id, street, zip, city)  values (2, 'street 2', 'zip 2', 'city2');
INSERT IGNORE product_db.address (id, street, zip, city)  values (3, 'street 3', 'zip 3', 'city3');
INSERT IGNORE product_db.address (id, street, zip, city)  values (4, 'street 4', 'zip 4', 'city4');
INSERT IGNORE product_db.address (id, street, zip, city)  values (5, 'street 5', 'zip 5', 'city5');

INSERT IGNORE product_db.user (id, email, password, first_name, last_name, id_address, role)  values (1, 'a@a.com', '$2a$10$iF/AFMpI1Lq66EGJW/MzG.KtJQApEwKHI4n.d5T713TDVZAM/MkNu', 'a','a',1, 'ADMIN');
INSERT IGNORE product_db.user (id, email, password, first_name, last_name, id_address, role)  values (2, 'b@b.com', '$2a$10$iF/AFMpI1Lq66EGJW/MzG.KtJQApEwKHI4n.d5T713TDVZAM/MkNu', 'b','b',2, 'USER');
INSERT IGNORE product_db.user (id, email, password, first_name, last_name, id_address, role)  values (3, 'c@c.com', '$2a$10$iF/AFMpI1Lq66EGJW/MzG.KtJQApEwKHI4n.d5T713TDVZAM/MkNu', 'c','c',1, 'ADMIN');

