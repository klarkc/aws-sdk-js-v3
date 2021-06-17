import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { Get, ItemResponse, TransactGetItem, TransactGetItemsCommandInput as __TransactGetItemsCommandInput, TransactGetItemsCommandOutput as __TransactGetItemsCommandOutput } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
export declare type TransactGetCommandInput = Omit<__TransactGetItemsCommandInput, "TransactItems"> & {
    TransactItems: (Omit<TransactGetItem, "Get"> & {
        Get: (Omit<Get, "Key"> & {
            Key: {
                [key: string]: NativeAttributeValue;
            } | undefined;
        }) | undefined;
    })[] | undefined;
};
export declare type TransactGetCommandOutput = Omit<__TransactGetItemsCommandOutput, "Responses"> & {
    Responses?: (Omit<ItemResponse, "Item"> & {
        Item?: {
            [key: string]: NativeAttributeValue;
        };
    })[];
};
/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactGetItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export declare class TransactGetCommand extends $Command<TransactGetCommandInput, TransactGetCommandOutput, DynamoDBDocumentClientResolvedConfig> {
    readonly input: TransactGetCommandInput;
    private readonly inputKeyNodes;
    private readonly outputKeyNodes;
    constructor(input: TransactGetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBDocumentClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransactGetCommandInput, TransactGetCommandOutput>;
}
