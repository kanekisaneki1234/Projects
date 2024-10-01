#include <iostream>
// #include <cmath>
#include <iterator>

using namespace std;

int main() {
   // int luckyNums[] = {1,2,3,4};
   // cout << luckyNums[1] << endl;
   // luckyNums[1]=69;
   // cout << luckyNums[1] << endl;

   // int notLuckyNums[5] = {1,2,3,4,5};
   // notLuckyNums[0]=0;
   // notLuckyNums[1]=1;
   // notLuckyNums[2]=2;
   // notLuckyNums[3]=3;
   // notLuckyNums[4]=4;
   // cout << notLuckyNums[3] << endl;
   int arr[] = {1, 2, 3, 4, 5};
   
   cout << begin(arr) << endl;
   cout << *begin(arr) << endl;
   return 0;

}