type Obj = {capture?: boolean, once?: boolean, excess?: true}
declare function myFunc(eventName: string, handler: ()=>void, obj?:Obj): void