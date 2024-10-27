function solution(A) {
  let stack = [];
  for (const c of A) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        (stack[stack.length - 1] === "(" && c !== ")") ||
        (stack[stack.length - 1] === "{" && c !== "}") ||
        (stack[stack.length - 1] === "[" && c !== "]") ||
        stack.length === 0
      ) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length > 0 ? 0 : 1;
}

console.log(solution("()[]{}()[]{}"));
console.log(solution("([{}])"));
console.log(solution("()]]"));
console.log(solution("([)]"));
console.log(solution(""));
console.log(solution("({[)]}"));
console.log(solution(")"));
