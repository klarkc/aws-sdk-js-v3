import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeEventSourceRequest, DescribeEventSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEventSourceCommandInput extends DescribeEventSourceRequest {
}
export interface DescribeEventSourceCommandOutput extends DescribeEventSourceResponse, __MetadataBearer {
}
/**
 * <p>This operation lists details about a partner event source that is shared with your
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEventSourceCommand extends $Command<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeEventSourceCommandInput;
    constructor(input: DescribeEventSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
