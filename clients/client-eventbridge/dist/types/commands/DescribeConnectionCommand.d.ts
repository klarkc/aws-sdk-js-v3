import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeConnectionRequest, DescribeConnectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConnectionCommandInput extends DescribeConnectionRequest {
}
export interface DescribeConnectionCommandOutput extends DescribeConnectionResponse, __MetadataBearer {
}
/**
 * <p>Retrieves details about a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConnectionCommand extends $Command<DescribeConnectionCommandInput, DescribeConnectionCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeConnectionCommandInput;
    constructor(input: DescribeConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionCommandInput, DescribeConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
