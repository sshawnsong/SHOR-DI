#include <iostream>
#include <vector>

using namespace std;

extern "C" {
void calculateShorDi(int begin, int end, int* result, int* result_size) {
    vector<int> result_vector;

    result_vector.push_back(begin);
    result_vector.push_back(end);

    *result_size = result_vector.size();

    for (int i = 0; i < *result_size; i++) {
        result[i] = result_vector[i];
    }
}
}
