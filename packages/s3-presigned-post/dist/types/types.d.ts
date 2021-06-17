declare type EqualCondition = ["eq", string, string] | {
    [key: string]: string;
};
declare type StartsWithCondition = ["starts-with", string, string];
declare type ContentLengthRangeCondition = ["content-length-range", number, number];
export declare type Conditions = EqualCondition | StartsWithCondition | ContentLengthRangeCondition;
export {};
