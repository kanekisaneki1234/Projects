// using System.Xml.XPath;

// namespace Tutorial
// {
//     class Practice03
//     {
//         static void Main(string[] args)
//         {
//             Console.WriteLine(Prime(100));
//             // double num = 9.9;
//             // int con = (int)num;
//             // Console.WriteLine(con);
            
//         }

//         static string Prime(int num)
//         {
//             // Type type = typeof(int);
//             // Console.WriteLine(type);
//             for(int i = 2; i<=Math.Sqrt(num); i++)
//             {
//                 // if ((num % i ==0) || (int)Math.Sqrt(num) == Math.Sqrt(num))
//                 // if ((int)Math.Sqrt(num) == Math.Sqrt(num))
//                 if ((num % i ==0) || Math.Floor(Math.Sqrt(num)) == Math.Sqrt(num))
//                 {
//                     return "It's not a prime number!";
//                 }
//             }
//             return "It's a prime number!";
//         }
//     }
// }