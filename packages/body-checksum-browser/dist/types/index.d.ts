import { Decoder, HashConstructor, HttpRequest } from "@aws-sdk/types";
export declare function bodyChecksumGenerator(request: HttpRequest, options: {
    sha256: HashConstructor;
    utf8Decoder: Decoder;
}): Promise<[string, string]>;
