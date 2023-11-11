#queryModule 5
create database case_study_md5;
drop database case_study_md5;
use case_study_md5;

#kiemtra diem 1 hoc sinh
select s.studentName, m.mark, m.semester, sub.subjectName
from students s
join marks m on m.studentId = s.id
join subjects sub on sub.id = m.subjectId
where s.id = 1

#lấy điểm toán của học sinh cao nhất ở lớp C08

 


