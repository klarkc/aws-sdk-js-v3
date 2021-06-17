import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DeleteSignalingChannelInput, DeleteSignalingChannelOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSignalingChannelCommandInput extends DeleteSignalingChannelInput {
}
export interface DeleteSignalingChannelCommandOutput extends DeleteSignalingChannelOutput, __MetadataBearer {
}
/**
 * <p>Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an
 *             asynchronous operation. If you don't specify the channel's current version, the most
 *             recent version is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DeleteSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSignalingChannelCommand extends $Command<DeleteSignalingChannelCommandInput, DeleteSignalingChannelCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: DeleteSignalingChannelCommandInput;
    constructor(input: DeleteSignalingChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSignalingChannelCommandInput, DeleteSignalingChannelCommandOutput>;
    private serialize;
    private deserialize;
}
