/**
 * Checks if the given value is a Smithy structure of the given type.
 */
export declare function isa<T>(o: any, ...ids: string[]): o is T;
/**
 * Type that is implemented by all Smithy shapes marked with the
 * error trait.
 */
export interface SmithyException {
    /**
     * The shape ID name of the exception.
     */
    readonly __type: string;
    /**
     * Whether the client or server are at fault.
     */
    readonly $fault: "client" | "server";
    /**
     * The service that encountered the exception.
     */
    readonly $service?: string;
}
/**
 * Smithy document type values.
 */
export declare namespace DocumentType {
    type Value = Scalar | Structure | List;
    type Scalar = string | number | boolean | null;
    type Structure = {
        [member: string]: Value;
    };
    interface List extends Array<Value> {
    }
}
