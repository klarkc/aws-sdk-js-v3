import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DescribeArchiveRequest, DescribeArchiveResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeArchiveCommandInput extends DescribeArchiveRequest {
}
export interface DescribeArchiveCommandOutput extends DescribeArchiveResponse, __MetadataBearer {
}
/**
 * <p>Retrieves details about an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeArchiveCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeArchiveCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeArchiveCommandInput} for command's `input` shape.
 * @see {@link DescribeArchiveCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeArchiveCommand extends $Command<DescribeArchiveCommandInput, DescribeArchiveCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DescribeArchiveCommandInput;
    constructor(input: DescribeArchiveCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeArchiveCommandInput, DescribeArchiveCommandOutput>;
    private serialize;
    private deserialize;
}
