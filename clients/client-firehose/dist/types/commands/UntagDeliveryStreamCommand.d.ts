import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { UntagDeliveryStreamInput, UntagDeliveryStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagDeliveryStreamCommandInput extends UntagDeliveryStreamInput {
}
export interface UntagDeliveryStreamCommandOutput extends UntagDeliveryStreamOutput, __MetadataBearer {
}
/**
 * <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you
 *          can't recover them after this operation successfully completes.</p>
 *          <p>If you specify a tag that doesn't exist, the operation ignores it.</p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, UntagDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, UntagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new UntagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link UntagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagDeliveryStreamCommand extends $Command<UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: UntagDeliveryStreamCommandInput;
    constructor(input: UntagDeliveryStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
