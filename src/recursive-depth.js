
module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;
    
    arr.forEach(el => {
      if (Array.isArray(el)) {
        count = Math.max(count, this.calculateDepth(el) + 1);
      }
    });

    return count
  }
};