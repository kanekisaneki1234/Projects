// namespace Tutorial
// {
//     class Cs_tut09
//     {
//         static void Main(string[] args)
//         {
//             Console.WriteLine("Enter the first number: ");
//             double num1 = Convert.ToDouble(Console.ReadLine());
//             Console.WriteLine("Enter the second number: ");
//             double num2 = Convert.ToDouble(Console.ReadLine());
//             Console.WriteLine("Enter the operation: ");
//             string operation = Console.ReadLine();
//             double result;

//             if (operation=="+")
//             {
//                 result = num1 + num2;
//                 Console.WriteLine("The addition is: " + result);
//             }
//             else if (operation=="-")
//             {
//                 result = num1 - num2;
//                 Console.WriteLine("The subtraction is: " + result);
//             }
//             else if (operation=="*")
//             {
//                 result = num1 * num2;
//                 Console.WriteLine("The Multiplication is: " + result);
//             }
//             else if (operation=="/")
//             {
//                 result = num1 / num2;
//                 Console.WriteLine("The Division is: " + result);
//             }
//             else
//             {
//                 Console.WriteLine("Invalid Operator");
//             }
//         }
//     }
// }