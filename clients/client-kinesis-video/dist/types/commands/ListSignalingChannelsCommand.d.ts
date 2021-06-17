import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { ListSignalingChannelsInput, ListSignalingChannelsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSignalingChannelsCommandInput extends ListSignalingChannelsInput {
}
export interface ListSignalingChannelsCommandOutput extends ListSignalingChannelsOutput, __MetadataBearer {
}
/**
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition, you can
 *             specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSignalingChannelsCommand extends $Command<ListSignalingChannelsCommandInput, ListSignalingChannelsCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: ListSignalingChannelsCommandInput;
    constructor(input: ListSignalingChannelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSignalingChannelsCommandInput, ListSignalingChannelsCommandOutput>;
    private serialize;
    private deserialize;
}
