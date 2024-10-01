// using System.Diagnostics;
// using System.Runtime;

// namespace Tutorial
// {
//     class Cs_practice05
//     {
//         static void Main(string[] args)
//         {
//             // int[] arr = [1,2,3,4,5];
//             // List<int> mylist = [5,4,3,2,1];
//             // Stopwatch time = new();
//             // time.Start();
//             // Console.WriteLine(BinarySearch(arr,6));
//             // Console.WriteLine(LinearSort(mylist));
//             // Console.WriteLine(LinearSort2(mylist));

//             int[] array = [4,3,2,1];
//             Console.WriteLine("Original Array:");
//             PrintArray(array);

//             MrgSrt(0, array.Length - 1, array);

//             Console.WriteLine("Sorted Array:");
//             PrintArray(array);
//             // time.Stop();
//             // Console.WriteLine(time.Elapsed);
//         }

// //         static public int BinarySearch(int[] arr, int num)
// //         {
// //             int left = 0;
// //             int right = arr.Length-1;

// //             while (left <= right)
// //             {
// //                 int mid = (right + left)/2;

// //                 if(num==arr[mid])
// //                 {
// //                     return mid;
// //                 }
// //                 else if(num>arr[mid])
// //                 {
// //                     left = mid + 1;
// //                     Console.WriteLine("Mid:"+mid);
// //                     Console.WriteLine("\nLeft:"+left);
// //                 }
// //                 else if(num<arr[mid])
// //                 {
// //                     right = mid - 1;
// //                 }
// //             }
// //             return -1;
// //         }

// //         static public string LinearSort(List<int> list)
// //         {
// //             // Stopwatch time = new();
// //             // time.Start();
// //             for(int i = 1; i<list.Count; i++)
// //             {
// //                 for(int j = 0; j<list.Count-1; j++)
// //                 {
// //                     if(list[i]<list[j])
// //                     {
// //                         (list[j], list[i]) = (list[i], list[j]);
// //                     }
// //                 }
// //             }
// //             // time.Stop();
// //             // Console.WriteLine(time.Elapsed);
// //             return string.Join(",", list);
// //         }
// //         //works alright but has more swap operations than regular linear sort. So it is ultimately less efficient.
// //         static public string LinearSort2(List<int> list)
// //         {
// //             // Stopwatch time = new();
// //             // time.Start();
// //             for(int i = 0; i<list.Count-1; i++)
// //             {//3,2,5,10,1,6
// //                 for(int j = i+1; j<list.Count; j++)
// //                 {
// //                     if(list[i]>list[j])
// //                     {
// //                         (list[j], list[i]) = (list[i], list[j]);
// //                     }
// //                 }
// //             }
// //             // time.Stop();
// //             // Console.WriteLine(time.Elapsed);
// //             return string.Join(",", list);
// //         }

// //         // static void MergeSort(int[] array, int left, int right)
// //         // {
// //         //     if (left < right)
// //         //     {
// //         //         // Find the middle point to divide the array into two halves
// //         //         int middle = (left + right) / 2;

// //         //         // Recursively sort the first and second halves
// //         //         MergeSort(array, left, middle);
// //         //         // Console.WriteLine(string.Join(",",array)+ left + middle);
// //         //         MergeSort(array, middle + 1, right);
// //         //         // Console.WriteLine(string.Join(",",array)+ right + middle);
// //         //         // Console.WriteLine(string.Join(",",array));
// //         //         // Merge the sorted halves
// //         //         Merge(array, left, middle, right);
// //         //         // return string.Join(",", array);
// //         //     }
// //         //     // return "ew";
// //         // }

// //         // static void Merge(int[] array, int left, int middle, int right)
// //         // {
// //         //     int n1 = middle - left + 1;
// //         //     int n2 = right - middle;

// //         //     // Create temporary arrays
// //         //     int[] leftArray = new int[n1];
// //         //     int[] rightArray = new int[n2];

// //         //     // Copy data to temporary arrays
// //         //     for (int i = 0; i < n1; ++i)
// //         //         leftArray[i] = array[left + i];
// //         //     for (int j = 0; j < n2; ++j)
// //         //         rightArray[j] = array[middle + 1 + j];

// //         //     // Merge the temporary arrays

// //         //     // Initial indexes of first and second subarrays
// //         //     int iLeft = 0, iRight = 0;

// //         //     // Initial index of merged subarray
// //         //     int k = left;

// //         //     while (iLeft < n1 && iRight < n2)
// //         //     {
// //         //         if (leftArray[iLeft] <= rightArray[iRight])
// //         //         {
// //         //             array[k] = leftArray[iLeft];
// //         //             iLeft++;
// //         //         }
// //         //         else
// //         //         {
// //         //             array[k] = rightArray[iRight];
// //         //             iRight++;
// //         //         }
// //         //         k++;
// //         //     }

// //         //     // Copy remaining elements of leftArray[] if any
// //         //     while (iLeft < n1)
// //         //     {
// //         //         array[k] = leftArray[iLeft];
// //         //         iLeft++;
// //         //         k++;
// //         //     }

// //         //     // Copy remaining elements of rightArray[] if any
// //         //     while (iRight < n2)
// //         //     {
// //         //         array[k] = rightArray[iRight];
// //         //         iRight++;
// //         //         k++;
// //         //     }
// //         // }

// //         // static void PrintArray(int[] array)
// //         // {
// //         //     foreach (int num in array)
// //         //         Console.Write(num + " ");
// //         //     Console.WriteLine();
// //         // }
//         static void MrgSrt(int left, int right, int[] arr)
//         {   
//             if(left<right)
//             {
//                 int mid = (left+right)/2;
//                 Console.WriteLine(1);
//                 MrgSrt(left, mid, arr);
//                 Console.WriteLine(2);
//                 MrgSrt(mid+1,right,arr);
//                 Mrg(arr,left,right,mid);
//             }
//         }
//         static void Mrg(int[] arr, int left, int right, int middle)
//         {
//             int n1 = middle-left+1;
//             int n2 = right-middle;

//             int[] leftarr = new int[n1];
//             int[] rightarr = new int[n2];
//             Console.WriteLine("Length of left sub array: " + $"{leftarr.Length}"); //\n{left}, {middle}, {right}");
//             Console.WriteLine("Length of right subarray: " + $"{rightarr.Length}\n{left}, {middle}, {right}");

//             for(int i=0; i<n1;++i)
//             {
//                 leftarr[i] = arr[left+i];
//             }
//             Console.WriteLine("Left Subarray: " + string.Join(",", leftarr));
//             for(int j=0; j<n2;++j)
//             {
//                 rightarr[j] = arr[j+middle+1];
//             }
//             Console.WriteLine("Right Subarray: " + string.Join(",", rightarr));
//             int k=left;
//             int iLeft=0;
//             int iRight=0;
//             while (iLeft<n1&&iRight<n2)
//             {
//                 if(leftarr[iLeft]<=rightarr[iRight])
//                 {
//                     arr[k] = leftarr[iLeft];
//                     iLeft++;
//                 }
//                 else
//                 {
//                     arr[k] = rightarr[iRight];
//                     iRight++;
//                 }
//                 k++;
//             }
//             while(iLeft<n1)
//             {
//                 arr[k]=leftarr[iLeft];
//                 iLeft++;
//                 k++;
//             }
//             while(iRight<n2)
//             {
//                 arr[k]=rightarr[iRight];
//                 iRight++;
//                 k++;
//             }
//         }
//         static void PrintArray(int[] array)
//         {
//             foreach (int num in array)
//                 Console.Write(num + " ");
//             Console.WriteLine();
//         }
//     }
// }
