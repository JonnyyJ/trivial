function addStrings(num1, num2) {
    let s = '';
    for (let i = num1.length - 1, j = num2.length - 1, carry = 0; i >= 0 || j >= 0 || carry === 1; i--, j--) {
      const n1 = i < 0 ? 0 : Number(num1[i]);
      const n2 = j < 0 ? 0 : Number(num2[j]);
      const sum = n1 + n2 + carry;
      s = String(sum % 10) + s;
      carry = ~~(sum / 10);
    }
    return s;
  }