import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteContactMethodRequest, DeleteContactMethodResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContactMethodCommandInput extends DeleteContactMethodRequest {
}
export interface DeleteContactMethodCommandOutput extends DeleteContactMethodResult, __MetadataBearer {
}
/**
 * <p>Deletes a contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContactMethodCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContactMethodCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContactMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContactMethodCommandInput} for command's `input` shape.
 * @see {@link DeleteContactMethodCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContactMethodCommand extends $Command<DeleteContactMethodCommandInput, DeleteContactMethodCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteContactMethodCommandInput;
    constructor(input: DeleteContactMethodCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContactMethodCommandInput, DeleteContactMethodCommandOutput>;
    private serialize;
    private deserialize;
}
