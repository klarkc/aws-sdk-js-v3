import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContactMethodRequest, CreateContactMethodResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContactMethodCommandInput extends CreateContactMethodRequest {
}
export interface CreateContactMethodCommandOutput extends CreateContactMethodResult, __MetadataBearer {
}
/**
 * <p>Creates an email or SMS text message contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContactMethodCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContactMethodCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateContactMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactMethodCommandInput} for command's `input` shape.
 * @see {@link CreateContactMethodCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContactMethodCommand extends $Command<CreateContactMethodCommandInput, CreateContactMethodCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateContactMethodCommandInput;
    constructor(input: CreateContactMethodCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactMethodCommandInput, CreateContactMethodCommandOutput>;
    private serialize;
    private deserialize;
}
