# Index-Capped Sums

# NOT SOLVED

https://www.codewars.com/kata/69d0cce318db0019fe9c640b

## kyu 4

Problem Statement
The index-capped sum of an array [v_0, v_1, ..., v_k] is

∑
i
=
0
k
min
⁡
(
v
i
,
i
)
,
∑
i=0
k
​
min(v
i
​
,i),
where i is the 0-based index (the first element is capped by 0, the second by 1, and so on).

You are given an array arr and a list of queries. For each query [l, r] the task is to answer the index-capped sum of the subarray arr[l..r] (from index l to r-1).

Input
arr — a list of n nonnegative integers.
queries — a list of q pairs [l, r].
Constraints
0 < n < 1e5
0 < q < 1e5
0 <= arr[i] for all valid i
0 <= l <= r <= n for each query
Output
A list of integers: one index-capped sum per query, in the same order as queries.
Example
Input
arr: [6, 2, 3, 1, 1, 5]
queries: [[0, 3], [2, 5], [4, 4], [0, 6]]
The first subarray is [6, 2, 3]. Contributions: min(6,0) + min(2,1) + min(3,2) = 0 + 1 + 2 = 3.

The second subarray is [3, 1, 1]. Contributions: min(3,0) + min(1,1) + min(1,2) = 0 + 1 + 1 = 2.

The third subarray is []. Empty arrays have sum 0.

The fourth subarray is [6, 2, 3, 1, 1, 5]. Contributions: min(6,0) + min(2,1) + min(3,2) + min(1,3) + min(1,4) + min(5,5) = 0 + 1 + 2 + 1 + 1 + 5 = 10.

Output
[3, 2, 0, 10]
