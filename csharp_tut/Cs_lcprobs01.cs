using System.Formats.Asn1;

namespace Tutorial
{
    class lcprobs01
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            int[] list = [1,2,3];
            int target = 4;
            int[] ans = TwoSum(list, target);
            for (int x = 0; x<ans.Length; x++)
                Console.Write(ans[x] + " ");
        }

        static int[] TwoSum(int[] nums, int target) {
            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = i+1; j < nums.Length; j++)
                {
                    if (nums[i]+nums[j]==target)
                    {
                        return [i,j];
                    }
                }
            }
            return [];
        }
    }
}