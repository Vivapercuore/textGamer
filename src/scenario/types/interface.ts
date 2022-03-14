

export interface RadioCreaterItem {
    require?: boolean;
    groupName: string;
    type: RadioTypes | string;
    values: RadioCreaterValue[];
}

export enum RadioTypes {
    单选器 = "单选器",
    多选器 = "多选器",
    文本输入 = "文本输入",
    数据调整 = "数据调整",
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
    creater: Array<RadioCreaterItem | TextCreaterItem>,
    properties,
    startBtnLable?: string;
}

export interface TextCreaterItem {
    require?: boolean;
    groupName: string;
    type: string;
    values: TextCreaterValue;
}

interface TextCreaterValue {
    name: string;
    info: string;
    attrName: string;
}