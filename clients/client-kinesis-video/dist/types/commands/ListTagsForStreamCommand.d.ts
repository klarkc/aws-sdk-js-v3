import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForStreamCommandInput extends ListTagsForStreamInput {
}
export interface ListTagsForStreamCommandOutput extends ListTagsForStreamOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of tags associated with the specified stream.</p>
 *         <p>In the request, you must specify either the <code>StreamName</code> or the
 *                 <code>StreamARN</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListTagsForStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListTagsForStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListTagsForStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForStreamCommand extends $Command<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput, KinesisVideoClientResolvedConfig> {
    readonly input: ListTagsForStreamCommandInput;
    constructor(input: ListTagsForStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput>;
    private serialize;
    private deserialize;
}
