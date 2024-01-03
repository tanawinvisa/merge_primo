export function merge(collection_1: number[], collection_2: number[]): number[] {
    let result: number[] = [];
    let idx1 = 0;
    let idx2 = 0;
  
    while (idx1 < collection_1.length && idx2 < collection_2.length) {
      if (collection_1[idx1] <= collection_2[idx2]) {
        result.push(collection_1[idx1]);
        idx1++;
      } else {
        result.push(collection_2[idx2]);
        idx2++;
      }
    }
  
    while (idx1 < collection_1.length) {
      result.push(collection_1[idx1]);
      idx1++;
    }
  
    while (idx2 < collection_2.length) {
      result.push(collection_2[idx2]);
      idx2++;
    }
  
    return result;
  }
  