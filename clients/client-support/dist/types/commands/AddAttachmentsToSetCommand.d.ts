import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddAttachmentsToSetCommandInput extends AddAttachmentsToSetRequest {
}
export interface AddAttachmentsToSetCommandOutput extends AddAttachmentsToSetResponse, __MetadataBearer {
}
/**
 * <p>Adds one or more attachments to an attachment set. </p>
 *         <p>An attachment set is a temporary container for attachments that you add to a case or
 *             case communication. The set is available for 1 hour after it's created. The
 *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise Support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddAttachmentsToSetCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddAttachmentsToSetCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * const client = new SupportClient(config);
 * const command = new AddAttachmentsToSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAttachmentsToSetCommandInput} for command's `input` shape.
 * @see {@link AddAttachmentsToSetCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddAttachmentsToSetCommand extends $Command<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput, SupportClientResolvedConfig> {
    readonly input: AddAttachmentsToSetCommandInput;
    constructor(input: AddAttachmentsToSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SupportClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput>;
    private serialize;
    private deserialize;
}
