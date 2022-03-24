CREATE TABLE `fl_flowers_storage` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(100) NOT NULL,
	`count` INT NOT NULL,
	`price` FLOAT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `fl_clients` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `fl_orders` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`client_id` INT NOT NULL,
	`status` varchar(100) NOT NULL,
	`address` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `fl_orders_lists` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`order_id` INT NOT NULL,
	`flowers_storage_id` INT NOT NULL,
	`count` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `fl_orders` ADD CONSTRAINT `fl_orders_fk0` FOREIGN KEY (`client_id`) REFERENCES `fl_clients`(`id`);

ALTER TABLE `fl_orders_lists` ADD CONSTRAINT `fl_orders_lists_fk0` FOREIGN KEY (`order_id`) REFERENCES `fl_orders`(`id`);

ALTER TABLE `fl_orders_lists` ADD CONSTRAINT `fl_orders_lists_fk1` FOREIGN KEY (`flowers_storage_id`) REFERENCES `fl_flowers_storage`(`id`);





