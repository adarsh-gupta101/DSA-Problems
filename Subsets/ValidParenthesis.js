function generateParenthesis(n) {
    let result = [];

    function isValid(brackets) {
        let stack = [];
        for (i = 0; i < brackets.length; i++) {
            if (stack[0] == '(' && brackets[i] == ')') {
                stack.shift();
            } else {
                stack.push(brackets[i]);
            }
        }

        return stack.length == 0;
    }

    const DFS = (i, n, slate) => {
        if (i == n * 2) {
            if (isValid(slate.join(''))) {
                result.push(slate.join(''));
            }

            return;
        }

        // dfs recursive

        // add open para
        slate.push('(');
        DFS(i + 1, n, slate);
        slate.pop();

        slate.push(')');
        DFS(i + 1, n, slate);
        slate.pop();
    };

    DFS(0, n, []);

    return result;
}

console.log(generateParenthesis(3));
