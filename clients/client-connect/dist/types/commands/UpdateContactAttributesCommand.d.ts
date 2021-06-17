import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { UpdateContactAttributesRequest, UpdateContactAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateContactAttributesCommandInput extends UpdateContactAttributesRequest {
}
export interface UpdateContactAttributesCommandOutput extends UpdateContactAttributesResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates
 *    user-defined contact attributes
 *    associated with the specified contact.</p>
 *          <p>You can create or update user-defined attributes for both ongoing and completed contacts.
 *    For example, while the call is active, you can update the customer's name or the reason the
 *    customer called. You can add notes about steps that the agent took during the call that display
 *    to the next agent that takes the call. You can also update attributes for a contact using data
 *    from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls
 *    for additional analysis, such as legal review or to identify abusive callers.</p>
 *          <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For
 *    information about CTR retention and the maximum size of the CTR attributes section, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature
 *     specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *
 *          <p>
 *             <b>Important:</b> You cannot use the operation to update
 *    attributes for contacts that occurred prior to the release of the API, which was September 12,
 *    2018. You can update attributes only for contacts that started after the release of the API. If
 *    you attempt to update attributes for a contact that occurred prior to the release of the API, a
 *    400 error is returned. This applies also to queued callbacks that were initiated prior to the
 *    release of the API but are still active in your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateContactAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContactAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateContactAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateContactAttributesCommand extends $Command<UpdateContactAttributesCommandInput, UpdateContactAttributesCommandOutput, ConnectClientResolvedConfig> {
    readonly input: UpdateContactAttributesCommandInput;
    constructor(input: UpdateContactAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContactAttributesCommandInput, UpdateContactAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
