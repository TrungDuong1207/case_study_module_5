use case_study_md5;

insert into class
values (1, "C08"),
(2, "C09"),
(3,"C10"),
(4, "C07");

insert into students
values ("1", "Duong Duc Trung", "1996-07-12", "nam dinh", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F1.jpg?alt=media&token=4aa7e39c-5bd7-4795-ab0c-272c63917088", 1),
("2", "Nguyen Ngoc B", "2002-07-16", "thai nguyen", "female", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F10.jpg?alt=media&token=53999c35-e4e9-4dbf-b734-095ad5f70f3c", 1),
("3", "Nguyen The Anh", "2003-07-10", "ha noi", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F11.jpg?alt=media&token=930766b6-bff9-4e86-9ed7-1980fc3f36bd", 1),
("4", "Tran Van C", "2001-08-03", "ho chi minh", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F12.jpg?alt=media&token=f46bd4c2-8974-4517-8b6d-267e57f1f87f", 1),

("5", "Tran Van A", "2001-09-03", "ho chi minh", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F13.jpg?alt=media&token=95b275be-901c-46c0-9535-0710de67b7d7", 2),
("6", "Nguyen Van B", "2001-04-03", "ho chi minh", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F16.jpg?alt=media&token=bf63ddfc-6b6e-4e03-9998-ada892504cae", 2),
("7", "Pham Van C", "2001-03-03", "lang son", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F2.jpg?alt=media&token=4978bf3f-49cf-449a-8f58-79616e133f1d", 2),
("8", "Bui Thi Co Co", "2001-02-03", "ho chi minh", "female", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F3.jpg?alt=media&token=f2ebe1eb-c3a3-4459-a9c3-a8eb93335ba7", 2),

("9", "Tran Nhu Nhong", "2001-11-03", "Thanh Hoa", "female", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F5.jpg?alt=media&token=c5194ed6-7407-4504-b36c-1d9e10594833", 3),
("10", "Le Thi Hong Buoi", "2001-08-03", "Thai Binh", "female", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F6.jpg?alt=media&token=16f9d613-06bc-41a0-9d2b-e733b6525259", 3),
("11", "Nguyen Ba Dao", "2001-08-03", "ho chi minh", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F7.jpg?alt=media&token=7cdc8a3a-e349-407d-851f-21ab002f2123", 3),
("12", "Bui Nhu Lac", "2001-08-03", "Tuyen Quang", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F8.jpg?alt=media&token=d84c3b6e-835e-4049-8da9-d3baee0b8b87", 3),

("13", "Doan Van A", "2001-08-03", "Ha Nam", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2F9.jpg?alt=media&token=8053d699-6a97-40c8-ba41-ce8d646ecc4d", 4),
("14", "Mai Anh Bao", "2001-08-03", "ho chi minh", "female", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2Fi1.jpg?alt=media&token=95e35e0e-ec93-4776-bf10-93581e1d9383", 4),
("15", "Nguyen An Cuop", "2001-08-03", "Nam Dinh", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2Fmask2.jpg?alt=media&token=121fef09-03f4-434c-826a-81de133abf3f", 4),
("16", "Duong Qua", "2001-08-03", "Ha Noi", "male", "https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/student-upload%2Fmask8.jpg?alt=media&token=131db7e7-d0c5-45d9-8f42-4670a078a798", 4);

insert into subjects 
values (1,'toán'),
(2,'vật lý'),
(3,'hóa học'),
(4,'văn học'),
(5,'lịch sử');

insert into teachers
values("1",'luan','male','01233221', 'https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2Fmask10.jpg?alt=media&token=f2a0a0d8-adf0-433d-984d-9d23f0bbbdfd', 1),
("2",'Linh','male','0123234523', 'https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2Fmask12.jpg?alt=media&token=ce831ab9-43fb-4f41-acfe-83dc2d49654c',4),
("3",'Mai','female','01223532043', 'https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2Fmask2.jpg?alt=media&token=2de07d51-9365-4bcf-af5a-521bc4108bf8',3),
("4",'Hương','female','012123122', 'https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2Fmask4.jpg?alt=media&token=657574cb-90de-4b24-9312-5c2dc04dff90', 2),
("5",'Nam','male','01212332', 'https://firebasestorage.googleapis.com/v0/b/student-manager-md5.appspot.com/o/teachers-upload%2Fmask8.jpg?alt=media&token=821cb34d-db41-44de-8ff6-4247b57cb12b',5);

insert into teacher_details
values(1,1,1,1),
(2,0,1,2),
(3,1,2,3),
(4,0,2,4),
(5,1,3,2),
(6,0,3,4),
(7,1,5,4),
(8,0,4,1);

insert into marks (mark, semester, subjectId, studentId)
values (10, "semester 1", 1,"1"),
( 9, "semester 1", 2,"1"),
( 8, "semester 1", 3,"1"),

( 7, "semester 1", 1,"2"),
( 5, "semester 1", 2,"2"),
(5, "semester 1", 3,"2"),

(7, "semester 1", 1,"3"),
( 4, "semester 1", 2,"3"),
(4, "semester 1", 3,"3"),

( 7, "semester 1", 1,"4"),
(9, "semester 1", 2,"4"),
(3, "semester 1", 3,"4"),

( 7, "semester 1", 1,"5"),
(6, "semester 1", 2,"5"),
( 6, "semester 1", 3,"5"),

(5, "semester 1", 1,"6"),
( 9, "semester 1", 2,"6"),
( 5, "semester 1", 3,"6"),

(4, "semester 1", 1,"7"),
(9, "semester 1", 2,"7"),
( 4, "semester 1", 3,"7"),

(9, "semester 1", 1,"8"),
(9, "semester 1", 2,"8"),
(9, "semester 1", 3,"8"),

(7, "semester 1", 1,"9"),
(9, "semester 1", 2,"9"),
(8, "semester 1", 3,"9"),

(5, "semester 1", 1,"10"),
(5, "semester 1", 2,"10"),
(5, "semester 1", 3,"10"),

(5, "semester 1", 1,"11"),
(9, "semester 1", 2,"11"),
(6, "semester 1", 3,"11"),

(6, "semester 1", 1,"12"),
(6, "semester 1", 2,"12"),
(7, "semester 1", 3,"12"),

(5, "semester 1", 1,"13"),
(3, "semester 1", 2,"13"),
(8, "semester 1", 3,"13"),

(5, "semester 1", 1,"14"),
(9, "semester 1", 2,"14"),
(4, "semester 1", 3,"14"),

(8, "semester 1", 1,"15"),
(9, "semester 1", 2,"15"),
(5, "semester 1", 3,"15"),

(7, "semester 1", 1,"16"),
(6, "semester 1", 2,"16"),
(5, "semester 1", 3,"16");







