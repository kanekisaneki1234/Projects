// namespace Tutorial
// {
//     class Cs_tut16
//     {
//         static void Main(string[] args)
//         {
//             try
//             {
//                 Console.WriteLine("Please enter the first number: ");
//                 int num1 = Convert.ToInt32(Console.ReadLine());
//                 Console.WriteLine("Please enter the second number: ");
//                 int num2 = Convert.ToInt32(Console.ReadLine());
//                 Console.WriteLine(num1/num2);
//             }
//             catch(DivideByZeroException e)
//             {
//                 Console.WriteLine(e.Message);
//             }
//             catch(FormatException e2)
//             {
//                 Console.WriteLine(e2.Message);
//             }
//             finally
//             {
//                 Console.WriteLine("The code has been executed!");
//             }
//         }
//     }
// } 