import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { ExecuteStatementCommandInput as __ExecuteStatementCommandInput, ExecuteStatementCommandOutput as __ExecuteStatementCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type ExecuteStatementCommandInput = Omit<__ExecuteStatementCommandInput, "Parameters"> & {
    Parameters?: NativeAttributeValue[];
};
export declare type ExecuteStatementCommandOutput = Omit<__ExecuteStatementCommandOutput, "Items"> & {
    Items?: {
        [key: string]: NativeAttributeValue;
    }[];
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteStatementCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class ExecuteStatementCommand extends $Command<ExecuteStatementCommandInput, ExecuteStatementCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: ExecuteStatementCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: ExecuteStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput>;
}
