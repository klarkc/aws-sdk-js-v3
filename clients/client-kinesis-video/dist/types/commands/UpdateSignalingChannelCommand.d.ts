import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UpdateSignalingChannelInput, UpdateSignalingChannelOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSignalingChannelCommandInput extends UpdateSignalingChannelInput {
}
export interface UpdateSignalingChannelCommandOutput extends UpdateSignalingChannelOutput, __MetadataBearer {
}
/**
 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes
 *             time to complete. </p>
 *         <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced),
 *             it only applies to new messages sent via this channel after it's been updated. Existing
 *             messages are still expired as per the previous <code>MessageTtlSeconds</code>
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSignalingChannelCommand extends $Command<UpdateSignalingChannelCommandInput, UpdateSignalingChannelCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: UpdateSignalingChannelCommandInput;
    constructor(input: UpdateSignalingChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSignalingChannelCommandInput, UpdateSignalingChannelCommandOutput>;
    private serialize;
    private deserialize;
}
