select cohorts.name as cohort_name, count(students.*) as student_count
FROM cohorts
JOIN students ON id = cohort_id 
GROUP BY cohort_name
HAVING count(students.*) >= 18
ORDER BY student_count;
