#include <iostream>

using namespace std;

void sayHi(string name, int age);

double cube(int num)
{
    return num * num * num;
}

int main() {
    // string name;
    // int age;
    // cout << "Please enter your name: " << endl;
    // cin >> name;
    // cin.ignore(numeric_limits<streamsize>::max(), '\n');
    // cout << "Please enter your age: " << endl;
    // cin >> age;
    // sayHi(name, age);
    cout << cube(3);
}

void sayHi(string name, int age) {
    cout << "Hi " << name << "!" <<endl;
    cout << "You are " << age << " years old.";
}