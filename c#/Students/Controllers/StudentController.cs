using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Students.Models;

namespace Students.Controllers
{
    public class StudentController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}
        static List<Student> studentList = new List<Student>() {
        new Student(234567890, "לאה", "כהן", Type1.נקבה, new DateTime(2000 , 2, 2), new DateTime(2020,3,1)),
        new Student(456789123, "בתיה", "לוי", Type1.נקבה, new DateTime(1990 , 7, 2), new DateTime(2020 , 3, 2)),
        new Student(123456789, "חיים", "ישראלי", Type1.זכר, new DateTime(2002 , 9, 2), new DateTime(2020 , 3, 1)),
        new Student(987654321, "ברוך", "וייס", Type1.זכר, new DateTime(2000 , 3, 5), new DateTime(2020 , 3, 3))
        };
        [HttpGet]
        public List<Student> GetStudentList()
        {
            return studentList;
        }
        [HttpGet]
        public List<Student> GetStudentBySearch(string text)
        {

            List<Student> a = new List<Student>();
            if (text == null)
                return studentList;
            foreach (var s in studentList)
            {
                if (s.search(text) == true)
                    a.Add(s);
            }
            return a;
        }
        public Student GetStudentById(int id)
        {
            Student thisStudent = studentList.Where(x => x.runID == id).FirstOrDefault();
            return thisStudent;
        }
    }
}