// using System.Xml;

// namespace Tutorial
// {
//     class Stack2
//     {
//         private List<object> input = [];
//         private int last;
//         // private string output;
//         public Stack2(List<object> Input)
//         {
//             input = Input;
//             last = Input.Count;
//             // output = string.Join(",", input);
//         }

//         public void Pop()
//         {
//             input.RemoveAt(last);
//             Console.WriteLine(string.Join(",", input));
//         }

//         public void Push(int num)
//         {
//             input.Add(num);
//             Console.WriteLine(string.Join(",", input));
//         }

//         public void Peek()
//         {
//             if(last>0)
//             {
//                 Console.WriteLine(input[0]);
//                 Console.WriteLine(input[last-1]);
//             }
//         }
//     }
// }