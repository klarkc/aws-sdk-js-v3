import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { KeysAndAttributes, BatchGetItemCommandInput as __BatchGetItemCommandInput, BatchGetItemCommandOutput as __BatchGetItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type BatchGetCommandInput = Omit<__BatchGetItemCommandInput, "RequestItems"> & {
    RequestItems: {
        [key: string]: Omit<KeysAndAttributes, "Keys"> & {
            Keys: {
                [key: string]: NativeAttributeValue;
            }[] | undefined;
        };
    } | undefined;
};
export declare type BatchGetCommandOutput = Omit<__BatchGetItemCommandOutput, "Responses" | "UnprocessedKeys"> & {
    Responses?: {
        [key: string]: {
            [key: string]: NativeAttributeValue;
        }[];
    };
    UnprocessedKeys?: {
        [key: string]: Omit<KeysAndAttributes, "Keys"> & {
            Keys: {
                [key: string]: NativeAttributeValue;
            }[] | undefined;
        };
    };
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchGetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class BatchGetCommand extends $Command<BatchGetCommandInput, BatchGetCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: BatchGetCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: BatchGetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetCommandInput, BatchGetCommandOutput>;
}
