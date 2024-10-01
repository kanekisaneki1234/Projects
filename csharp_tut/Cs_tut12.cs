// namespace Tutorial
// {
//     class Cs_tut12
//     {
//         static void Main(string[] args)
//         {
//             int secretNum = 10;
//             int guess;
//             int tries = 0;
//             int Limit = 5;
//             do {
//                 Console.WriteLine("Enter your guess: ");
//                 guess = Convert.ToInt32(Console.ReadLine());
//                 tries++;
//                 if (tries>(Limit/2)-1)
//                 {
//                     if (guess>secretNum)
//                     {
//                         Console.WriteLine("Your guess is higher than the secret number!");
//                     }
//                     else if (guess<secretNum)
//                     {
//                         Console.WriteLine("Your guess is lower than the secret number!");
//                     }
//                 }
//                 if (guess==secretNum)
//                 {
//                     tries=Limit-1;
//                 }
//             } while (guess!=secretNum && tries<Limit);
//             if (tries<Limit)
//             {
//                 Console.WriteLine("Congratulations! You guessed the correct number!");
//             }
//             else
//             {
//                 Console.WriteLine("Sorry, You\'re out of guesses.");
//             }
//         }
//     }
// }