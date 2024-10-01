// using System.Runtime.InteropServices;

// namespace Tutorial
// {
//     class Practice
//     {
//         static void Main(string[] args)
//         {
//             // Console.WriteLine(Reverse("Hello"));
//             Console.WriteLine(Reverse2("Hello World"));
//         }

//         static public string Reverse(string word)
//         {
//             char[] Reversed = word.ToCharArray();
//             Array.Reverse(Reversed);
//             return new string(Reversed);
//         }

//         static public string Reverse2(string word)
//         {
//             string reversed="";
//             for(int i=word.Length-1; i>=0; i--)
//             {
//                 reversed += word[i];
//             }
//             return reversed;
//         }
//     }
// }