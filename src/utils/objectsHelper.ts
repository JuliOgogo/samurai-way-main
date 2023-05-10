export const objectsHelper = (items: Array<any>, itemID: string | number, objPropName: string, newObjProps: any) => {
    return items.map(u => u[objPropName] === itemID ? {...u, ...newObjProps} : u)
}