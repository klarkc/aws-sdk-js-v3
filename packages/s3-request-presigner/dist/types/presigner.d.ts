import { SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { RequestPresigner, RequestPresigningArguments } from "@aws-sdk/types";
import { HttpRequest as IHttpRequest } from "@aws-sdk/types";
/**
 * PartialBy<T, K> makes properties specified in K optional in interface T
 * see: https://stackoverflow.com/questions/43159887/make-a-single-property-optional-in-typescript
 * */
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare type S3RequestPresignerOptions = PartialBy<SignatureV4Init & SignatureV4CryptoInit, "service" | "uriEscapePath"> & {
    signingName?: string;
};
export declare class S3RequestPresigner implements RequestPresigner {
    private readonly signer;
    constructor(options: S3RequestPresignerOptions);
    presign(requestToSign: IHttpRequest, { unsignableHeaders, unhoistableHeaders, ...options }?: RequestPresigningArguments): Promise<IHttpRequest>;
}
export {};
