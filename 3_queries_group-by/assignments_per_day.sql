SELECT day, count(*) as total_assignments
FROM assigmnments
GROUP BY day
ORDER BY day;

