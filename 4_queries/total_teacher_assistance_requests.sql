SELECT COUNT(assistance_request.*) as total_assistances, teachers.name 
FROM assistance_request
JOIN teachers on teachers.id = teacher_id
WHERE name = 'Waylon Boehm';
GROUP BY teachers.name;
