import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { ExpectedAttributeValue, ItemCollectionMetrics, PutItemCommandInput as __PutItemCommandInput, PutItemCommandOutput as __PutItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type PutCommandInput = Omit<__PutItemCommandInput, "Item" | "Expected" | "ExpressionAttributeValues"> & {
    Item: {
        [key: string]: NativeAttributeValue;
    } | undefined;
    Expected?: {
        [key: string]: Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
            Value?: NativeAttributeValue;
            AttributeValueList?: NativeAttributeValue[];
        };
    };
    ExpressionAttributeValues?: {
        [key: string]: NativeAttributeValue;
    };
};
export declare type PutCommandOutput = Omit<__PutItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
    Attributes?: {
        [key: string]: NativeAttributeValue;
    };
    ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
        ItemCollectionKey?: {
            [key: string]: NativeAttributeValue;
        };
    };
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * PutItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class PutCommand extends $Command<PutCommandInput, PutCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: PutCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: PutCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutCommandInput, PutCommandOutput>;
}
