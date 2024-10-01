// using System.Drawing;

// namespace Tutorial
// {
//     class Stack3
//     {
//         private int[] arr;
//         private int last;
//         private int capacity;

//         public Stack3(int size)
//         {
//             arr = new int[size];
//             capacity = size;
//             last = -1;
//         }

//         public void Push(int num)
//         {
//             if(last==capacity-1)
//             {
//                 Console.WriteLine("Stack Overflow");
//                 return;
//             }
//             arr[++last]=num;
//             Console.WriteLine(string.Join(",", arr));
//         }

//         public void Pop()
//         {
//             if(last == -1)
//             {
//                 Console.WriteLine("Stack Underflow");
//                 return;
//             }
//             Console.WriteLine(arr[last--]); //We are not removing an element, but rather changing the index so that when an element gets added next time, it gets overwritten
//             // Console.WriteLine(string.Join(",", arr));
//         }

//         public void Peek()
//         {
//             if(last==-1)
//             {
//                 Console.WriteLine("Empty array");
//                 return;
//             }
//             Console.WriteLine(arr[last]);
//         }
//     }
// }