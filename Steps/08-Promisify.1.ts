declare class CallbackClient {
    method(req: Request, callback: (error: Error, response: Response) => void): void
}

declare class PromiseClient {
    method(req: Request): Promise<Response>
}
// (req: Request, callback: (error: Error, response: Response) => void) => void
// type methodType = typeof CallbackClient.prototype.method
type methodType = (req: Request, callback: (error: Error, response: Response) => void) => void

type ToPromiseMethod<T> = 
    T extends (p1: infer P, callback: (error: Error, response: infer R) => void) => void ?
    (p1: P) => Promise<R> : T;


