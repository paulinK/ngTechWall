CREATE TABLE `personne` (
	`id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `cin` int(11) NOT NULL,
    `name` varchar(30) NOT NULL,
    `firstname` varchar(30) NOT NULL,
    `age` int(11) NOT NULL,
    `job` varchar(30) NOT NULL,
    `path` varchar(100) NOT NULL
)
