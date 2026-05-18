CREATE DATABASE Restaurant;
use Restaurant;

CREATE table Users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR ( 100 ),
	email VARCHAR (100),
	password varchar (100)
	);
	
CREATE TABLE restaurant (
	res_id INT PRIMARY KEY AUTO_INCREMENT,
	res_name VARCHAR (100),
	image VARCHAR (100),
	description VARCHAR (100)
	);
	
CREATE TABLE rate_res (
	user_id INT,
	res_id INT,
	date_rate DATE,
	amount INT,
	FOREIGN KEY ( user_id ) REFERENCES Users(user_id),
	FOREIGN KEY ( res_id ) REFERENCES restaurant(res_id)
	);
CREATE TABLE like_res (
	user_id INT,
	res_id INT,
	date_like DATE,
	FOREIGN KEY ( user_id ) REFERENCES Users(user_id),
	FOREIGN KEY ( res_id ) REFERENCES restaurant(res_id)
	);
CREATE TABLE food_type (
	type_id INT PRIMARY KEY AUTO_INCREMENT,
	type_name VARCHAR (100)
	);
CREATE TABLE food (
	food_id INT PRIMARY KEY AUTO_INCREMENT,
	type_id INT,
	food_name VARCHAR (100),
	image VARCHAR (100),
	price float,
	description VARCHAR ( 100 ),
	FOREIGN KEY ( type_id ) REFERENCES food_type(type_id)
	);
CREATE TABLE sub_food (
	food_id INT,
	sub_id INT PRIMARY KEY AUTO_INCREMENT,
	sub_name VARCHAR (100),
	sub_price FLOAT,
	FOREIGN KEY ( food_id ) REFERENCES food(food_id)
	);
CREATE TABLE orders (
	user_id INT,
	food_id INT,
	amount INT,
	code VARCHAR ( 100 ),
	arr_sub_id VARCHAR (100 ),
	FOREIGN KEY ( user_id ) REFERENCES Users(user_id),
	FOREIGN KEY ( food_id ) REFERENCES food(food_id)
	);
	
	
INSERT INTO Users (full_name, email, password) VALUES
('Nguyen Van An',     'an.nguyen@gmail.com',   'hashed_pw_001'),
('Tran Thi Bich',     'bich.tran@gmail.com',   'hashed_pw_002'),
('Le Hoang Nam',      'nam.le@gmail.com',       'hashed_pw_003'),
('Pham Thi Lan',      'lan.pham@gmail.com',     'hashed_pw_004'),
('Vo Minh Tuan',      'tuan.vo@gmail.com',      'hashed_pw_005');

INSERT INTO restaurant (res_name, image, description) VALUES
('Pho 24',               'pho24.jpg',         'Quán phở nổi tiếng trung tâm Sài Gòn'),
('Bun Bo Hue Gia Dinh',  'bunbo.jpg',         'Bún bò Huế cay đậm đà truyền thống'),
('Com Tam Ba Ghien',     'comtam.jpg',        'Cơm tấm sườn bì chả đặc trưng Nam Bộ'),
('Banh Mi Huynh Hoa',    'banhmi.jpg',        'Bánh mì thịt nổi tiếng nhất Sài Gòn'),
('Lau Thai Gao Do',      'lauthai.jpg',       'Lẩu Thái chua cay hải sản tươi sống');

INSERT INTO rate_res (user_id, res_id, date_rate, amount) VALUES
(1, 1, '2024-11-01', 5),
(2, 1, '2024-11-05', 4),
(3, 2, '2024-11-10', 5),
(1, 3, '2024-11-12', 4),
(4, 3, '2024-11-15', 3),
(5, 4, '2024-11-18', 5),
(2, 5, '2024-11-20', 4),
(3, 5, '2024-11-22', 5);

INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, '2024-11-01'),
(1, 3, '2024-11-12'),
(2, 1, '2024-11-05'),
(2, 5, '2024-11-20'),
(3, 2, '2024-11-10'),
(3, 5, '2024-11-22'),
(4, 4, '2024-11-19'),
(5, 4, '2024-11-18'),
(5, 2, '2024-11-25');

INSERT INTO food_type (type_name) VALUES
('Món nước'),       
('Cơm - Bún - Mì'), 
('Bánh'),           
('Lẩu'),            
('Đồ uống');        

INSERT INTO food (type_id, food_name, image, price, description) VALUES
(1, 'Phở bò tái',        'pho_bo_tai.jpg',    65000,  'Phở bò tái thơm ngon, nước dùng trong'),
(1, 'Phở gà',            'pho_ga.jpg',        60000,  'Phở gà nước trong vị ngọt thanh'),
(2, 'Cơm tấm sườn bì',   'comtam.jpg',        75000,  'Cơm tấm sườn nướng, bì, chả trứng'),
(2, 'Bún bò Huế',        'bunbo.jpg',         70000,  'Bún bò Huế cay đậm đà'),
(3, 'Bánh mì thịt',      'banhmi_thit.jpg',   35000,  'Bánh mì giòn nhân thịt nguội phô mai'),
(3, 'Bánh mì trứng',     'banhmi_trung.jpg',  25000,  'Bánh mì trứng ốp la bơ tỏi'),
(4, 'Lẩu Thái hải sản',  'lau_thai.jpg',     320000,  'Lẩu Thái chua cay tôm mực cá'),
(4, 'Lẩu bò nhúng dấm',  'lau_bo.jpg',       280000,  'Lẩu bò nhúng giấm rau sống bún'),
(5, 'Trà đào cam sả',    'tra_dao.jpg',       45000,  'Trà đào mát lạnh thơm cam sả'),
(5, 'Cà phê sữa đá',     'caphe.jpg',         30000,  'Cà phê truyền thống sữa đặc');

INSERT INTO sub_food (food_id, sub_name, sub_price) VALUES
(1, 'Thêm thịt bò',       25000),
(1, 'Thêm gầu',           20000),
(1, 'Upsize tô lớn',      10000),
(3, 'Thêm sườn nướng',    30000),
(3, 'Thêm trứng ốp la',   10000),
(3, 'Thêm chả trứng',     15000),
(7, 'Thêm tôm sú 200g',   80000),
(7, 'Thêm mực ống 200g',  60000),
(7, 'Thêm bún/mì/khoai',  15000),
(10, 'Ít đường',           0),
(10, 'Không đường',        0),
(10, 'Thêm shot espresso', 15000);

INSERT INTO orders (user_id, food_id, amount, code, arr_sub_id) VALUES
(1, 1,  2, 'ORD-2024-0001', '1,3'),       
(1, 9,  2, 'ORD-2024-0001', NULL),       
(2, 3,  1, 'ORD-2024-0002', '4,5'),       
(2, 10, 1, 'ORD-2024-0002', '10'),        
(3, 7,  1, 'ORD-2024-0003', '7,9'),       
(4, 5,  3, 'ORD-2024-0004', NULL),        
(4, 6,  2, 'ORD-2024-0004', NULL),        
(5, 4,  2, 'ORD-2024-0005', NULL),        
(5, 9,  2, 'ORD-2024-0005', NULL),        
(1, 8,  1, 'ORD-2024-0006', '8'),       
(3, 2,  1, 'ORD-2024-0007', NULL),      
(3, 10, 1, 'ORD-2024-0007', '12');


-- Tìm 5 người đã like nhà hàng nhiều nhất.
SELECT Users.user_id, Users.full_name, COUNT(like_res.res_id) AS so_lan_like
FROM Users
LEFT JOIN like_res ON Users.user_id = like_res.user_id
GROUP BY Users.user_id, Users.full_name
ORDER BY so_lan_like DESC
LIMIT 5;

-- Tìm 2 nhà hàng có lượt like nhiều nhất.
SELECT restaurant.res_id, restaurant.res_name, COUNT(like_res.user_id) AS total_likes
FROM restaurant
JOIN like_res ON restaurant.res_id = like_res.res_id
GROUP BY restaurant.res_id, restaurant.res_name
ORDER BY total_likes DESC
LIMIT 2;
-- Tìm người đã đặt hàng nhiều nhất.
SELECT Users.user_id, Users.full_name, Users.email, COUNT(orders.user_id) AS so_lan_dat
FROM orders
INNER JOIN Users ON orders.user_id = Users.user_id
GROUP BY Users.user_id, Users.full_name, Users.email
ORDER BY so_lan_dat DESC
LIMIT 1

--Tìm ra người không hoạt động (Không order, Không like, Không rate)
SELECT Users.user_id, Users.full_name, Users.email
FROM Users
LEFT JOIN orders ON Users.user_id = orders.user_id
LEFT JOIN like_res ON Users.user_id = like_res.user_id
LEFT JOIN rate_res ON Users.user_id = rate_res.user_id
WHERE orders.user_id IS NULL AND like_res.user_id IS NULL AND rate_res.user_id IS NULL
GROUP BY Users.user_id, Users.full_name, Users.email