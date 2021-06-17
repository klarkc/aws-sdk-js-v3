import { HttpRequest } from "@aws-sdk/protocol-http";
import { Client, Command } from "@aws-sdk/smithy-client";
import { MetadataBearer } from "@aws-sdk/types";
export interface OperationInput {
    String: string;
}
export declare type InputTypesUnion = OperationInput;
export interface OperationOutput extends MetadataBearer {
    Data: string;
    $metadata: {};
}
export declare type OutputTypesUnion = OperationOutput;
export declare const fooClient: Client<any, InputTypesUnion, OutputTypesUnion, any>;
export declare const operationCommand: Command<InputTypesUnion, OutputTypesUnion, any, OperationInput, MetadataBearer>;
export declare const httpRequest: HttpRequest;
