import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DescribeSignalingChannelInput, DescribeSignalingChannelOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSignalingChannelCommandInput extends DescribeSignalingChannelInput {
}
export interface DescribeSignalingChannelCommandOutput extends DescribeSignalingChannelOutput, __MetadataBearer {
}
/**
 * <p>Returns the most current information about the signaling channel. You must specify
 *             either the name or the Amazon Resource Name (ARN) of the channel that you want to
 *             describe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DescribeSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSignalingChannelCommand extends $Command<DescribeSignalingChannelCommandInput, DescribeSignalingChannelCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: DescribeSignalingChannelCommandInput;
    constructor(input: DescribeSignalingChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSignalingChannelCommandInput, DescribeSignalingChannelCommandOutput>;
    private serialize;
    private deserialize;
}
