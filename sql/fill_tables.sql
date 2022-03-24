-- fl_clients

INSERT INTO `fl_clients` (`id`, `name`) VALUES ('1', 'Gleb'), ('2', 'Igor');

-- fl_flowers_storage

INSERT INTO `fl_flowers_storage`(`id`, `name`, `count`, `price`)
VALUES('1', 'Трава', '14', '120'),('2', 'Герберы фиолетовые', '4', '200'),('3', 'Герберы розовые', '4', '200'),
('4', 'Герберы оранжевые', '4', '200'),('5', 'Герберы красные', '4', '200');

INSERT INTO `fl_flowers_storage`(`id`, `name`, `count`, `price`)
VALUES('6', 'Лилии розовые', '5', '150'),('7', 'Лилии белые', '5', '150'),
('8', 'Пионы белые', '1', '180'),('9', 'Пионы красные', '1', '180');

INSERT INTO `fl_flowers_storage`(`id`, `name`, `count`, `price`)
VALUES('10', 'Розы белые', '2', '300'),('11', 'Розы красные', '2', '300'),('12', 'Тюльпаны красные', '3', '250'),
('13', 'Тюльпаны желтые', '3', '250'),('14', 'Тюльпаны розовые', '3', '250');

-- fl_orders

INSERT INTO `fl_orders`(`id`, `client_id`, `status`, `address`)
VALUES('1', '1', 'Выполнен', 'Москва'),('2', '1', 'Доставляется', 'Москва');

INSERT INTO `fl_orders` (`id`, `client_id`, `status`, `address`) VALUES ('3', '2', 'Собирается', 'Тверь');

-- fl_order_list

INSERT INTO `fl_orders_lists`(
    `id`,
    `order_id`,
    `flowers_storage_id`,
    `count`
)
VALUES('1', '1', '11', '1'),('2', '1', '10', '1'),('3', '2', '1', '5'),('4', '3', '14', '3');









