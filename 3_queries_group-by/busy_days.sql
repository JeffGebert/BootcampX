SELECT day, count(*) as total_assignments
FROM assigmnments
GROUP BY day
HAVING count(*) >=10
ORDER BY day;
