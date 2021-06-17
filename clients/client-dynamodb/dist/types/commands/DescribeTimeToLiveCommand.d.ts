import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTimeToLiveCommandInput extends DescribeTimeToLiveInput {
}
export interface DescribeTimeToLiveCommandOutput extends DescribeTimeToLiveOutput, __MetadataBearer {
}
/**
 * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeTimeToLiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTimeToLiveCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeToLiveCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTimeToLiveCommand extends $Command<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeTimeToLiveCommandInput;
    constructor(input: DescribeTimeToLiveCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput>;
    private serialize;
    private deserialize;
}
