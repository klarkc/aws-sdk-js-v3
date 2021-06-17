import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListDeliveryStreamsInput, ListDeliveryStreamsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDeliveryStreamsCommandInput extends ListDeliveryStreamsInput {
}
export interface ListDeliveryStreamsCommandOutput extends ListDeliveryStreamsOutput, __MetadataBearer {
}
/**
 * <p>Lists your delivery streams in alphabetical order of their names.</p>
 *          <p>The number of delivery streams might be too large to return using a single call to
 *             <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned,
 *          using the <code>Limit</code> parameter. To determine whether there are more delivery
 *          streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If
 *          there are more delivery streams to list, you can request them by calling this operation
 *          again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name
 *          of the last delivery stream returned in the last call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListDeliveryStreamsCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListDeliveryStreamsCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new ListDeliveryStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeliveryStreamsCommandInput} for command's `input` shape.
 * @see {@link ListDeliveryStreamsCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDeliveryStreamsCommand extends $Command<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: ListDeliveryStreamsCommandInput;
    constructor(input: ListDeliveryStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
