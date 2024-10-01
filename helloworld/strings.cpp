#include <iostream>

using namespace std;

int main() {
    string name = "Fraudkuna";
    cout << name.length() << endl;
    cout << name[5] << endl;
    name[5]='l';
    cout << name << endl;
    cout << name.find("fraud", 0);
    string truth = name.substr(0,5);
    cout << "\nGege is a " << truth << endl;
    cout << 10.0 / 3;
}