

export interface CreaterItem {
    groupName: string;
    type: string;
    values: CreaterValue[];
}

interface CreaterValue {
    name: string;
    info: string;
    cost: number;
    flagAdd: string[];
    flagDelete: any[];
    attrSet: AttrSet;
    attrAdd: AttrSet;
    attrReduce: AttrSet;
}

interface AttrSet {
    [string: string]: string | number
}