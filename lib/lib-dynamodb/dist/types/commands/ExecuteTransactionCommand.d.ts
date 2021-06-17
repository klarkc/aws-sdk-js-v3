import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { ItemResponse, ParameterizedStatement, ExecuteTransactionCommandInput as __ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput as __ExecuteTransactionCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type ExecuteTransactionCommandInput = Omit<__ExecuteTransactionCommandInput, "TransactStatements"> & {
    TransactStatements: (Omit<ParameterizedStatement, "Parameters"> & {
        Parameters?: NativeAttributeValue[];
    })[] | undefined;
};
export declare type ExecuteTransactionCommandOutput = Omit<__ExecuteTransactionCommandOutput, "Responses"> & {
    Responses?: (Omit<ItemResponse, "Item"> & {
        Item?: {
            [key: string]: NativeAttributeValue;
        };
    })[];
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteTransactionCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class ExecuteTransactionCommand extends $Command<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: ExecuteTransactionCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: ExecuteTransactionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput>;
}
