// namespace Tutorial
// {
//     public class Stack
//     {
//         private List<int> stack;
//         private int top;
//         // private int 
//         public Stack(List<int> list)
//         {
//             stack = list;
//             top = stack.Count;
//         }

//         public void Pop()
//         {
//             stack.RemoveAt(top);
//             Console.WriteLine(string.Join(", ", stack));
//         }

//         public void Push(int num)
//         {
//             // stack.Add(num);
//             stack.Add(num);
//             Console.WriteLine(string.Join(", ", stack));
//         }

//         public void Peek()
//         {
//             if (top>0)
//             {
//                 Console.WriteLine(stack[0]);
//                 Console.WriteLine(stack[top-1]);
//             }
//         }
//     }
// }