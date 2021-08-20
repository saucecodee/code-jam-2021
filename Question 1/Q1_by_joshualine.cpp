#include <iostream>
using namespace std;

int wiggleMaxLength(vector<int>& nums)
{
    int len = nums.size(), i = 1, ans = 1;
    while (i < len && nums[i] == nums[i-1]) i++;
    if (i == len) return 1;
    bool up = nums[i-1] > nums[i];
    for (; i < len; i++)
        if ((up && nums[i] < nums[i-1]) || (!up && nums[i] > nums[i-1]))
            up = !up, ans++;
    return ans;
}

// UTILITY FUNCTIONS
// Function to print an array
void printArray(int A[], int size)
{
    for (auto i = 0; i < size; i++)
        cout << A[i] << " ";
}
 
// Driver code
int main()
{
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    auto arr_size = sizeof(arr) / sizeof(arr[0]);
 
    cout << "Given array is \n";
    printArray(arr, arr_size);
 
    mergeSort(arr, 0, arr_size - 1);
 
    cout << "\nSorted array is \n";
    printArray(arr, arr_size);
    return 0;
}