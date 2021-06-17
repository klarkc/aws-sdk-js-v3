import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { GetItemCommandInput as __GetItemCommandInput, GetItemCommandOutput as __GetItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type GetCommandInput = Omit<__GetItemCommandInput, "Key"> & {
    Key: {
        [key: string]: NativeAttributeValue;
    } | undefined;
};
export declare type GetCommandOutput = Omit<__GetItemCommandOutput, "Item"> & {
    Item?: {
        [key: string]: NativeAttributeValue;
    };
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * GetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class GetCommand extends $Command<GetCommandInput, GetCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: GetCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: GetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommandInput, GetCommandOutput>;
}
