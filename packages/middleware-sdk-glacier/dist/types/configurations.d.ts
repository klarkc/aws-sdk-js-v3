import { Decoder, HashConstructor, HttpRequest, Pluggable } from "@aws-sdk/types";
export interface GlacierMiddlewareInputConfig {
}
export interface PreviouslyResolved {
    apiVersion: string;
    sha256: HashConstructor;
    utf8Decoder: Decoder;
    bodyChecksumGenerator: (request: HttpRequest, Options: {
        sha256: HashConstructor;
        utf8Decoder: Decoder;
    }) => Promise<[string, string]>;
}
export declare const getGlacierPlugin: (config: PreviouslyResolved) => Pluggable<any, any>;
