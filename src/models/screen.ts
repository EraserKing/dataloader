export interface ScreenInfo {
    systemid: string;
    screenname: string;
    screenprogram: string;
    updateby: string;
    updatetime: string;
    updatedate: string | null;
    createdby: string;
    createddate: string | null;
    reservedstandard: string;
    reservedcustom: string;
    screentype: string;
    maintlistobj: string;
    layercode: string;
    userorgroupid: string;
    layertype: string;
    skiplayer: boolean;
    templatecode: string;
    maintlisttype: string;
    maintdropname: string;
    specialcase: string;
    helpkey: string;
    focusfield: string;
    screentitle: string;
    screentooltip: string;
    changereferencenum: number;
    reservedfree: string;
    createdtime: string;
    reservedsupport: string;
    midupdate: string;
    virtualdates: boolean;
    autoscrsync: boolean;
}

export interface ScreenObject {
    systemid: string;
    screenname: string;
    objactive: boolean;
    screenobjname: string;
    screenorder: number;
    objrequired: boolean;
    objvisible: boolean;
    objenabled: boolean;
    updateby: boolean;
    updatetime: string;
    updatedate: string | null;
    createdby: string;
    createddate: string | null;
    reservedstandard: string;
    reservedcustom: string;
    objneedsvalidation: boolean;
    objparent: string;
    linkedbrowseobj: string;
    linkedbrowsehasparams: boolean;
    browsefilternum1: number;
    browseparamtype1: string;
    browseparamvalue1: string;
    browsefilternum2: number;
    browseparamtype2: string;
    browseparamvalue2: string;
    browsefilternum3: number;
    browseparamtype3: string;
    browseparamvalue3: string;
    objrow: number;
    objcol: number;
    objdisplay: boolean;
    objinitialvalue: string;
    layercode: string;
    userorgroupid: string;
    layertype: string;
    objheight: number;
    objwidth: number;
    rowspan: number;
    colspan: number;
    objprocessresponse: string;
    objalign: string;
    objcellalign: string;
    objcolon: boolean;
    gridattributes: string;
    objtype: string;
    objlabelcode: string;
    objtooltipcode: string;
    objformattype: string;
    objformat: string;
    objimage: string;
    buttontooltipcode: string;
    unlabelled: boolean;
    userdeftype: string;
    userdefnum: number;
    specialcase: string;
    reltabpagepgm: string;
    hotkeycode: string;
    hotkeyhdrname: string;
    changereferencenum: number;
    linkcollectionparent: string;
    reservedfree: string;
    createdtime: string;
    reservedsupport: string;
    dropname: string;
    alwayshidden: boolean;
    alwaysdisabled: boolean;
    supportsdotnotation: boolean;
    norelatedtable: boolean;
    tablename: string;
    fieldname: string;
    helpoverridesinglelanguage: string;
    fieldtype: string;
    objcreatedbyscreendesigner: boolean;
}

export interface ScreenChildObject {
    systemid: string;
    layercode: string;
    layertype: string;
    userorgroupid: string;
    screenname: string;
    objname: string;
    objparent: string;
    objtype: string;
    objvisible: boolean;
    objenabled: boolean;
    objimage: string;
    objseq: number;
    browsecellalign: string;
    objwidth: number;
    objlabelcode: string;
    objtooltipcode: string;
    objformattype: string;
    objformat: string;
    relatedfield: string;
    relatedtable: string;
    createdby: string;
    createddate: string | null;
    updateby: string;
    updatetime: string;
    updatedate: string | null;
    reservedstandard: string;
    reservedcustom: string;
    objinitialvalue: string;
    hotkeycode: string;
    hotkeyhdrname: string;
    changereferencenum: number;
    reservedfree: string;
    createdtime: string;
    reservedsupport: string;
    alwayshidden: boolean;
    alwaysdisabled: boolean;
    dropname: string;
    nullallowed: boolean;
    removelinefeed: boolean;
    norelatedtable: boolean;
    tablename: string;
    fieldname: string;
    userdefnum: number;
    userdeftype: string;
    fieldtype: string;
}
