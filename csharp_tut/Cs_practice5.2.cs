// namespace Tutorial
// {
//     class Cs_practice
//     {
//         static void Main(string[] args)
//         {
//             int[] arr = [8,7,6,5,4,3,2,1];
//             MrgSrt(0,arr.Length-1,arr);
//             PrintArray(arr);
//         }

//         static void MrgSrt(int left, int right, int[] arr)
//         {
//             if (left<right)
//             {
//                 int mid = (left + right)/2;
                
//                 MrgSrt(left, mid, arr);
                
//                 MrgSrt(mid+1, right, arr);

//                 Mrg(left,mid,right,arr);
//             }
//         }

//         static void Mrg(int left, int mid, int right, int[] arr)
//         {
//             int n1 = mid - left + 1;
//             int n2 = right - mid;

//             int[] leftarr = new int[n1];
//             int[] rightarr = new int[n2];
            
//             for(int i=0; i<n1; i++)
//             {
//                 leftarr[i] = arr[left+i];
//             }

//             for(int j=0; j<n2; j++)
//             {
//                 rightarr[j] = arr[mid+j+1];
//             }

//             int iLeft = 0;
//             int iRight = 0;
//             int k = left;

//             while(iLeft<n1&&iRight<n2)
//             {
//                 if(leftarr[iLeft]<rightarr[iRight])
//                 {
//                     arr[k]=leftarr[iLeft];
//                     iLeft++;
//                     k++;
//                 }
//                 else
//                 {
//                     arr[k]=rightarr[iRight];
//                     iRight++;
//                     k++;
//                 }
//             }

//             while(iLeft<n1)
//             {
//                 arr[k]=leftarr[iLeft];
//                 k++;
//                 iLeft++;
//             }

//             while(iRight<n2)
//             {
//                 arr[k]=rightarr[iRight];
//                 k++;
//                 iRight++;
//             }
//         }
//         static void PrintArray(int[] arr)
//         {
//             int[] print = new int[arr.Length];
//             for(int i=0; i<arr.Length; i++)
//             {
//                 print[i] = arr[i];
//             }
//             Console.WriteLine(string.Join(",", print));
//         }
//     }
// }