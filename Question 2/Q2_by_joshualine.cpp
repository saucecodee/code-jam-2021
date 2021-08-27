#include <bits/stdc++.h>
using namespace std;
class Solution {
   public:
   int lastStoneWeight(vector<int>& stones) {
      int n = stones.size();
      int total = 0;
      for(int i = 0; i < n; i++){
         total += stones[i];
      }
      int req = total / 2;
      vector <bool> dp(req + 1, false);
      dp[0] = true;
      int reach = 0;
      for(int i = 0; i < n; i++){
         for(int j = req; j - stones[i] >= 0; j--){
            dp[j] = dp[j] || dp[j - stones[i]];
            if(dp[j]) reach = max(reach, j);
         }
      }
      return total - (2 * reach);
   }
};

main(){
   vector<int> v = {4,3,4,3,2}; //Test case
   Solution ob;
   cout << (ob.lastStoneWeight(v)) << endl;
}