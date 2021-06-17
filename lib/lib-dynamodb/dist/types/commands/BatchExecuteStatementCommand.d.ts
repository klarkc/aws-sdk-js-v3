import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { BatchStatementRequest, BatchStatementResponse, BatchExecuteStatementCommandInput as __BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput as __BatchExecuteStatementCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type BatchExecuteStatementCommandInput = Omit<__BatchExecuteStatementCommandInput, "Statements"> & {
    Statements: (Omit<BatchStatementRequest, "Parameters"> & {
        Parameters?: NativeAttributeValue[];
    })[] | undefined;
};
export declare type BatchExecuteStatementCommandOutput = Omit<__BatchExecuteStatementCommandOutput, "Responses"> & {
    Responses?: (Omit<BatchStatementResponse, "Item"> & {
        Item?: {
            [key: string]: NativeAttributeValue;
        };
    })[];
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchExecuteStatementCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class BatchExecuteStatementCommand extends $Command<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: BatchExecuteStatementCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: BatchExecuteStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput>;
}
