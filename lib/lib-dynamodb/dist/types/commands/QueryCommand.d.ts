import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { Condition, QueryCommandInput as __QueryCommandInput, QueryCommandOutput as __QueryCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type QueryCommandInput = Omit<__QueryCommandInput, "KeyConditions" | "QueryFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"> & {
    KeyConditions?: {
        [key: string]: Omit<Condition, "AttributeValueList"> & {
            AttributeValueList?: NativeAttributeValue[];
        };
    };
    QueryFilter?: {
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
export declare type QueryCommandOutput = Omit<__QueryCommandOutput, "Items" | "LastEvaluatedKey"> & {
    Items?: {
        [key: string]: NativeAttributeValue;
    }[];
    LastEvaluatedKey?: {
        [key: string]: NativeAttributeValue;
    };
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * QueryCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class QueryCommand extends $Command<QueryCommandInput, QueryCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: QueryCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: QueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<QueryCommandInput, QueryCommandOutput>;
}
