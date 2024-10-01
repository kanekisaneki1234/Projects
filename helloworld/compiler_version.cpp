#include <iostream>

// int main() {
//     std::cout << __clang_version__ << std::endl;
//     return 0;
// }

int main() {
    // Check C++ version using __cplusplus
    if (__cplusplus == 202002L)
        std::cout << "C++20\n";
    else if (__cplusplus == 201703L)
        std::cout << "C++17\n";
    else if (__cplusplus == 201402L)
        std::cout << "C++14\n";
    else if (__cplusplus == 201103L)
        std::cout << "C++11\n";
    else if (__cplusplus == 199711L)
        std::cout << "C++98\n";
    else
        std::cout << "Unknown C++ version\n";

    return 0;
}