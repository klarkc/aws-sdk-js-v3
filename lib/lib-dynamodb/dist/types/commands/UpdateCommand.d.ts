import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { AttributeValueUpdate, ExpectedAttributeValue, ItemCollectionMetrics, UpdateItemCommandInput as __UpdateItemCommandInput, UpdateItemCommandOutput as __UpdateItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type UpdateCommandInput = Omit<__UpdateItemCommandInput, "Key" | "AttributeUpdates" | "Expected" | "ExpressionAttributeValues"> & {
    Key: {
        [key: string]: NativeAttributeValue;
    } | undefined;
    AttributeUpdates?: {
        [key: string]: Omit<AttributeValueUpdate, "Value"> & {
            Value?: NativeAttributeValue;
        };
    };
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
export declare type UpdateCommandOutput = Omit<__UpdateItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
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
 * UpdateItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class UpdateCommand extends $Command<UpdateCommandInput, UpdateCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: UpdateCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: UpdateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCommandInput, UpdateCommandOutput>;
}
