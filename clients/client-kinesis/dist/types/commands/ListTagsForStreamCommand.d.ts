import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { ListTagsForStreamInput, ListTagsForStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForStreamCommandInput extends ListTagsForStreamInput {
}
export interface ListTagsForStreamCommandOutput extends ListTagsForStreamOutput, __MetadataBearer {
}
/**
 * <p>Lists the tags for the specified Kinesis data stream. This operation has a limit of
 *             five transactions per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, ListTagsForStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, ListTagsForStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new ListTagsForStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForStreamCommand extends $Command<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput, KinesisClientResolvedConfig> {
    readonly input: ListTagsForStreamCommandInput;
    constructor(input: ListTagsForStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput>;
    private serialize;
    private deserialize;
}
