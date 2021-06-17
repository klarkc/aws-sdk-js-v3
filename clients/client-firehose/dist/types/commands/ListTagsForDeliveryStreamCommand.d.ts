import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForDeliveryStreamCommandInput extends ListTagsForDeliveryStreamInput {
}
export interface ListTagsForDeliveryStreamCommandOutput extends ListTagsForDeliveryStreamOutput, __MetadataBearer {
}
/**
 * <p>Lists the tags for the specified delivery stream. This operation has a limit of five
 *          transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListTagsForDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListTagsForDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new ListTagsForDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForDeliveryStreamCommand extends $Command<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: ListTagsForDeliveryStreamCommandInput;
    constructor(input: ListTagsForDeliveryStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
