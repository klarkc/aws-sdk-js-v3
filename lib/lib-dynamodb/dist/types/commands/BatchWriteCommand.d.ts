import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { DeleteRequest, ItemCollectionMetrics, PutRequest, WriteRequest, BatchWriteItemCommandInput as __BatchWriteItemCommandInput, BatchWriteItemCommandOutput as __BatchWriteItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type BatchWriteCommandInput = Omit<__BatchWriteItemCommandInput, "RequestItems"> & {
    RequestItems: {
        [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
            PutRequest?: Omit<PutRequest, "Item"> & {
                Item: {
                    [key: string]: NativeAttributeValue;
                } | undefined;
            };
            DeleteRequest?: Omit<DeleteRequest, "Key"> & {
                Key: {
                    [key: string]: NativeAttributeValue;
                } | undefined;
            };
        })[];
    } | undefined;
};
export declare type BatchWriteCommandOutput = Omit<__BatchWriteItemCommandOutput, "UnprocessedItems" | "ItemCollectionMetrics"> & {
    UnprocessedItems?: {
        [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
            PutRequest?: Omit<PutRequest, "Item"> & {
                Item: {
                    [key: string]: NativeAttributeValue;
                } | undefined;
            };
            DeleteRequest?: Omit<DeleteRequest, "Key"> & {
                Key: {
                    [key: string]: NativeAttributeValue;
                } | undefined;
            };
        })[];
    };
    ItemCollectionMetrics?: {
        [key: string]: (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
            ItemCollectionKey?: {
                [key: string]: NativeAttributeValue;
            };
        })[];
    };
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchWriteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class BatchWriteCommand extends $Command<BatchWriteCommandInput, BatchWriteCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: BatchWriteCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: BatchWriteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchWriteCommandInput, BatchWriteCommandOutput>;
}
