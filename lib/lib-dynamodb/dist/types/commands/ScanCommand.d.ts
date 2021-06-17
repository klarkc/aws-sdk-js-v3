import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { Condition, ScanCommandInput as __ScanCommandInput, ScanCommandOutput as __ScanCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type ScanCommandInput = Omit<__ScanCommandInput, "ScanFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"> & {
    ScanFilter?: {
        [key: string]: Omit<Condition, "AttributeValueList"> & {
            AttributeValueList?: NativeAttributeValue[];
        };
    };
    ExclusiveStartKey?: {
        [key: string]: NativeAttributeValue;
    };
    ExpressionAttributeValues?: {
        [key: string]: NativeAttributeValue;
    };
};
export declare type ScanCommandOutput = Omit<__ScanCommandOutput, "Items" | "LastEvaluatedKey"> & {
    Items?: {
        [key: string]: NativeAttributeValue;
    }[];
    LastEvaluatedKey?: {
        [key: string]: NativeAttributeValue;
    };
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ScanCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class ScanCommand extends $Command<ScanCommandInput, ScanCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: ScanCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: ScanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ScanCommandInput, ScanCommandOutput>;
}
