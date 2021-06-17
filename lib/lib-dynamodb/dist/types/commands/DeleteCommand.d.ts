import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { ExpectedAttributeValue, ItemCollectionMetrics, DeleteItemCommandInput as __DeleteItemCommandInput, DeleteItemCommandOutput as __DeleteItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type DeleteCommandInput = Omit<__DeleteItemCommandInput, "Key" | "Expected" | "ExpressionAttributeValues"> & {
    Key: {
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
export declare type DeleteCommandOutput = Omit<__DeleteItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
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
 * DeleteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class DeleteCommand extends $Command<DeleteCommandInput, DeleteCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: DeleteCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: DeleteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCommandInput, DeleteCommandOutput>;
}
