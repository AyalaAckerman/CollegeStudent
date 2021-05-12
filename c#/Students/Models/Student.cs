using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Students.Models
{
    public enum Type1 { זכר, נקבה }
    public class Student
    {
        public Student(global::System.Int32 id, global::System.String firstName, global::System.String lastName, Type1 type, DateTime birthDate, DateTime registrationDate)
        {
            counter++;
            runID = counter;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.type = type;
            this.birthDate = birthDate;
            this.registrationDate = registrationDate;
        }

        static int counter = 0;
        public int runID { get; set; }
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public Type1 type { get; set; }
        public DateTime birthDate { get; set; }
        public DateTime registrationDate { get; set; }
        public bool search(string myString)
        {
            if (firstName.IndexOf(myString) != -1)
                return true;
            else if (lastName.IndexOf(myString) != -1)
                return true;
            else if (id.ToString().IndexOf(myString) != -1)
                return true;
            else
                return false;
        }

    }
}
