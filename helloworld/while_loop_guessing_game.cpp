#include <iostream>

using namespace std;

int main() {
    int secNum = 5;
    int guess;
    int guessNum = 1;

    cout << "Please enter your guess: \n";

    while (guess!=secNum && guessNum<=3) {
        cin >> guess;
        if (guess==secNum) {
            cout << "Congratulations, you entered the right number!\n";
        } else if (guessNum<3) {
            cout << "Please guess again.\n";
        }
        guessNum++;
    }
}