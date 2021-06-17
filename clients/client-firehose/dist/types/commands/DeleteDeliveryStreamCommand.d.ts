import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { DeleteDeliveryStreamInput, DeleteDeliveryStreamOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDeliveryStreamCommandInput extends DeleteDeliveryStreamInput {
}
export interface DeleteDeliveryStreamCommandOutput extends DeleteDeliveryStreamOutput, __MetadataBearer {
}
/**
 * <p>Deletes a delivery stream and its data.</p>
 *          <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states:
 *             <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or
 *             <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the
 *             <code>CREATING</code> state. While the deletion request is in process, the delivery
 *          stream is in the <code>DELETING</code> state.</p>
 *          <p>While the delivery stream is in the <code>DELETING</code> state, the service might
 *          continue to accept records, but it doesn't make any guarantees with respect to delivering
 *          the data. Therefore, as a best practice, first stop any applications that are sending
 *          records before you delete a delivery stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DeleteDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DeleteDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new DeleteDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDeliveryStreamCommand extends $Command<DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: DeleteDeliveryStreamCommandInput;
    constructor(input: DeleteDeliveryStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
