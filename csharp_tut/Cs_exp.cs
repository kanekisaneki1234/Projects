// using System.Diagnostics;
// using System.Security.Cryptography.X509Certificates;

// namespace Tutorial
// {
//     class Exp
//     {
//         static void Main(string[] args)
//         {
//             Stopwatch time = new();
//             time.Start();
//             int[] arr = { 5, 4, 3, 2, 1 };
//             int[] sortedArray = MergeSort(Divide(arr));

//             // Display the sorted array
//             Console.WriteLine("Sorted Array:");
//             foreach (var element in sortedArray)
//             {
//                 Console.Write(element + " ");
//             }
//             Console.WriteLine();
//             time.Stop();
//             Console.WriteLine(time.Elapsed);
//         }

//         static int[][] Divide(int[] arr)
//         {
//             int[][] newarr = new int[arr.Length][];
//             for (int i = 0; i < arr.Length; i++)
//             {
//                 newarr[i] = [arr[i]];
//                 Console.WriteLine(string.Join(",", newarr[i]));
//             }
//             return newarr;
//         }

//         static int[] MergeSort(int[][] arr)
//         {
//             // Flatten the array of arrays
//             int[] flattenedArray = arr.SelectMany(subarray => subarray).ToArray();

//             // Sort the flattened array
//             Array.Sort(flattenedArray);

//             return flattenedArray;
//         }
//     }
// }
