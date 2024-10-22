<!-- 169. 多数元素
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：nums = [3,2,3]
输出：3

示例 2：
输入：nums = [2,2,1,1,1,2,2]
输出：2
 
提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。 -->
<template>
    169. 多数元素
</template>
<script  setup>
    const nums1 = [3,2,3]
    const nums2 = [2,2,1,1,1,2,2]

    const majorityElement = function(nums) {
        if(nums.length<=1){
            return nums[0]
        }

        const map = new Map()
        
        for (let num of nums) {
            if(!map.get(num)){
                map.set(num,1)
            }else{
                map.set(num,map.get(num)+1)

                if(map.get(num)>nums.length/2){
                    return num
                }
            }
        }
    };

    majorityElement(nums1)
    majorityElement(nums2)
</script>