

export interface RadioCreaterItem {
    groupName: string;
    type: string;
    values: RadioCreaterValue[];
}

interface RadioCreaterValue {
    name?: string;
    info?: string;
    cost?: number;
    flagAdd?: string[];
    flagDelete?: string[];
    attrSet?: AttrSet;
    attrAdd?: AttrSet;
    attrReduce?: AttrSet;
}

interface AttrSet {
    [string: string]: string | number
}

export interface BaseInfoType {
    flags?: [string];
    attr?: AttrSet;
}

export interface scenarioType {
    name: string;
    info: string;
    baseAttr: BaseInfoType,
    creater: [RadioCreaterItem],
    properties,
}

export interface TextCreaterItem {
    groupName: string;
    type: string;
    values: TextCreaterValue;
}

interface TextCreaterValue {
    name: string;
    info: string;
    attrName: string;
}