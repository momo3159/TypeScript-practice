
type setterFunc<T> = {
    (newValue: T | ((oldValue: T)=>T)): T
}
declare function useState<T>(arg: T): [T, setterFunc<T>]