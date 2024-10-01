#include <iostream>

using namespace std;

int main() {
    int age;
    string name;
    cout << "Please enter your age: ";
    cin >> age;
    cout << "Please enter your name: ";
    // cin.ignore(numeric_limits<streamsize>::max(), '\n');
    // getline(cin, name);
    cin >> name;
    cout << "Your name is: " << name << endl;
    cout << "Your age is: " << age << endl;
    // std::cout << "Hello World";
}