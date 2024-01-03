import { merge }  from './merge';

describe('Merge function', () => {
    it('test1', () => {
        const arr1 = [1, 3, 5];
        const arr2 = [2, 4, 6];
        const result = merge(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('different lengths', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6, 7, 8];
        const result = merge(arr1, arr2);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('empty arrays', () => {
        const arr1: number[] = [];
        const arr2: number[] = [];
        const result = merge(arr1, arr2);
        expect(result).toEqual([]);
      });

      it('first empty test', () => {
        const arr1: number[] = [1, 3, 5];
        const arr2: number[] = [];
        const result = merge(arr1, arr2);
        expect(result).toEqual([1, 3, 5]);
    });

    it('second empty test', () => {
        const arr1: number[] = [];
        const arr2: number[] = [2, 4, 6];
        const result = merge(arr1, arr2);
        expect(result).toEqual([2, 4, 6]);
    });
    
});
