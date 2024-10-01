#include <iostream>

using namespace std;

int main() {
    cout << "Please enter the numbers you want to perform the operations on: \n";
    int num1, num2;
    cin >> num1 >> num2;
    cout << "Please enter the opeartion you want to perform: \n";
    char op;
    cin >> op;
    int result;
    string errorhandler="";

    if (op=='+') {
        result = num1+num2;
    } else if (op=='-') {
        result = num1-num2;
    } else if (op=='*') {
        result = num1*num2;
    } else if (op=='/') {
        result = num1/num2;
    } else {
        errorhandler="Invalid operator.\n";
    }

    if (errorhandler=="") {
        cout << "The result of the operation is: \n" << result;
    } else {
        cout << errorhandler;
    }
}