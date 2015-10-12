function sqsum(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

sqsum(2, 3);
sqsum.call(null, 2, 3);
sqsum.apply(null, [2, 3]);