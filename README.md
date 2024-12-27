# Unexpected NaN Result in JavaScript Function Due to Unhandled Undefined

This repository demonstrates a common, yet subtle bug in JavaScript: unexpected NaN results from unhandled undefined values.  The `foo` function correctly handles null and negative numbers, but fails to explicitly check for `undefined`, leading to unexpected NaN output.

The solution involves adding a check for `undefined` to improve the robustness of the function and handle all possible input cases effectively.