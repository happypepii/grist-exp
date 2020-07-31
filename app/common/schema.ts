/*** THIS FILE IS AUTO-GENERATED BY sandbox/gen_js_schema.py ***/
// tslint:disable:object-literal-key-quotes

export const schema = {

  "_grist_DocInfo": {
    docId               : "Text",
    peers               : "Text",
    basketId            : "Text",
    schemaVersion       : "Int",
    timezone            : "Text",
  },

  "_grist_Tables": {
    tableId             : "Text",
    primaryViewId       : "Ref:_grist_Views",
    summarySourceTable  : "Ref:_grist_Tables",
    onDemand            : "Bool",
  },

  "_grist_Tables_column": {
    parentId            : "Ref:_grist_Tables",
    parentPos           : "PositionNumber",
    colId               : "Text",
    type                : "Text",
    widgetOptions       : "Text",
    isFormula           : "Bool",
    formula             : "Text",
    label               : "Text",
    untieColIdFromLabel : "Bool",
    summarySourceCol    : "Ref:_grist_Tables_column",
    displayCol          : "Ref:_grist_Tables_column",
    visibleCol          : "Ref:_grist_Tables_column",
  },

  "_grist_Imports": {
    tableRef            : "Ref:_grist_Tables",
    origFileName        : "Text",
    parseFormula        : "Text",
    delimiter           : "Text",
    doublequote         : "Bool",
    escapechar          : "Text",
    quotechar           : "Text",
    skipinitialspace    : "Bool",
    encoding            : "Text",
    hasHeaders          : "Bool",
  },

  "_grist_External_database": {
    host                : "Text",
    port                : "Int",
    username            : "Text",
    dialect             : "Text",
    database            : "Text",
    storage             : "Text",
  },

  "_grist_External_table": {
    tableRef            : "Ref:_grist_Tables",
    databaseRef         : "Ref:_grist_External_database",
    tableName           : "Text",
  },

  "_grist_TableViews": {
    tableRef            : "Ref:_grist_Tables",
    viewRef             : "Ref:_grist_Views",
  },

  "_grist_TabItems": {
    tableRef            : "Ref:_grist_Tables",
    viewRef             : "Ref:_grist_Views",
  },

  "_grist_TabBar": {
    viewRef             : "Ref:_grist_Views",
    tabPos              : "PositionNumber",
  },

  "_grist_Pages": {
    viewRef             : "Ref:_grist_Views",
    indentation         : "Int",
    pagePos             : "PositionNumber",
  },

  "_grist_Views": {
    name                : "Text",
    type                : "Text",
    layoutSpec          : "Text",
  },

  "_grist_Views_section": {
    tableRef            : "Ref:_grist_Tables",
    parentId            : "Ref:_grist_Views",
    parentKey           : "Text",
    title               : "Text",
    defaultWidth        : "Int",
    borderWidth         : "Int",
    theme               : "Text",
    options             : "Text",
    chartType           : "Text",
    layoutSpec          : "Text",
    filterSpec          : "Text",
    sortColRefs         : "Text",
    linkSrcSectionRef   : "Ref:_grist_Views_section",
    linkSrcColRef       : "Ref:_grist_Tables_column",
    linkTargetColRef    : "Ref:_grist_Tables_column",
    embedId             : "Text",
  },

  "_grist_Views_section_field": {
    parentId            : "Ref:_grist_Views_section",
    parentPos           : "PositionNumber",
    colRef              : "Ref:_grist_Tables_column",
    width               : "Int",
    widgetOptions       : "Text",
    displayCol          : "Ref:_grist_Tables_column",
    visibleCol          : "Ref:_grist_Tables_column",
    filter              : "Text",
  },

  "_grist_Validations": {
    formula             : "Text",
    name                : "Text",
    tableRef            : "Int",
  },

  "_grist_REPL_Hist": {
    code                : "Text",
    outputText          : "Text",
    errorText           : "Text",
  },

  "_grist_Attachments": {
    fileIdent           : "Text",
    fileName            : "Text",
    fileType            : "Text",
    fileSize            : "Int",
    imageHeight         : "Int",
    imageWidth          : "Int",
    timeUploaded        : "DateTime",
  },

  "_grist_ACLRules": {
    resource            : "Ref:_grist_ACLResources",
    permissions         : "Int",
    principals          : "Text",
    aclFormula          : "Text",
    aclColumn           : "Ref:_grist_Tables_column",
  },

  "_grist_ACLResources": {
    tableId             : "Text",
    colIds              : "Text",
  },

  "_grist_ACLPrincipals": {
    type                : "Text",
    userEmail           : "Text",
    userName            : "Text",
    groupName           : "Text",
    instanceId          : "Text",
  },

  "_grist_ACLMemberships": {
    parent              : "Ref:_grist_ACLPrincipals",
    child               : "Ref:_grist_ACLPrincipals",
  },

};

export interface SchemaTypes {

  "_grist_DocInfo": {
    docId: string;
    peers: string;
    basketId: string;
    schemaVersion: number;
    timezone: string;
  };

  "_grist_Tables": {
    tableId: string;
    primaryViewId: number;
    summarySourceTable: number;
    onDemand: boolean;
  };

  "_grist_Tables_column": {
    parentId: number;
    parentPos: number;
    colId: string;
    type: string;
    widgetOptions: string;
    isFormula: boolean;
    formula: string;
    label: string;
    untieColIdFromLabel: boolean;
    summarySourceCol: number;
    displayCol: number;
    visibleCol: number;
  };

  "_grist_Imports": {
    tableRef: number;
    origFileName: string;
    parseFormula: string;
    delimiter: string;
    doublequote: boolean;
    escapechar: string;
    quotechar: string;
    skipinitialspace: boolean;
    encoding: string;
    hasHeaders: boolean;
  };

  "_grist_External_database": {
    host: string;
    port: number;
    username: string;
    dialect: string;
    database: string;
    storage: string;
  };

  "_grist_External_table": {
    tableRef: number;
    databaseRef: number;
    tableName: string;
  };

  "_grist_TableViews": {
    tableRef: number;
    viewRef: number;
  };

  "_grist_TabItems": {
    tableRef: number;
    viewRef: number;
  };

  "_grist_TabBar": {
    viewRef: number;
    tabPos: number;
  };

  "_grist_Pages": {
    viewRef: number;
    indentation: number;
    pagePos: number;
  };

  "_grist_Views": {
    name: string;
    type: string;
    layoutSpec: string;
  };

  "_grist_Views_section": {
    tableRef: number;
    parentId: number;
    parentKey: string;
    title: string;
    defaultWidth: number;
    borderWidth: number;
    theme: string;
    options: string;
    chartType: string;
    layoutSpec: string;
    filterSpec: string;
    sortColRefs: string;
    linkSrcSectionRef: number;
    linkSrcColRef: number;
    linkTargetColRef: number;
    embedId: string;
  };

  "_grist_Views_section_field": {
    parentId: number;
    parentPos: number;
    colRef: number;
    width: number;
    widgetOptions: string;
    displayCol: number;
    visibleCol: number;
    filter: string;
  };

  "_grist_Validations": {
    formula: string;
    name: string;
    tableRef: number;
  };

  "_grist_REPL_Hist": {
    code: string;
    outputText: string;
    errorText: string;
  };

  "_grist_Attachments": {
    fileIdent: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    imageHeight: number;
    imageWidth: number;
    timeUploaded: number;
  };

  "_grist_ACLRules": {
    resource: number;
    permissions: number;
    principals: string;
    aclFormula: string;
    aclColumn: number;
  };

  "_grist_ACLResources": {
    tableId: string;
    colIds: string;
  };

  "_grist_ACLPrincipals": {
    type: string;
    userEmail: string;
    userName: string;
    groupName: string;
    instanceId: string;
  };

  "_grist_ACLMemberships": {
    parent: number;
    child: number;
  };

}