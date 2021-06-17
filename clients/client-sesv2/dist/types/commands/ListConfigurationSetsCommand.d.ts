import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListConfigurationSetsRequest, ListConfigurationSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConfigurationSetsCommandInput extends ListConfigurationSetsRequest {
}
export interface ListConfigurationSetsCommandOutput extends ListConfigurationSetsResponse, __MetadataBearer {
}
/**
 * <p>List all of the configuration sets associated with your account in the current
 *             region.</p>
 *         <p>
 *             <i>Configuration sets</i> are groups of rules that you can apply to the
 *             emails you send. You apply a configuration set to an email by including a reference to
 *             the configuration set in the headers of the email. When you apply a configuration set to
 *             an email, all of the rules in that configuration set are applied to the email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListConfigurationSetsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListConfigurationSetsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListConfigurationSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConfigurationSetsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationSetsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConfigurationSetsCommand extends $Command<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListConfigurationSetsCommandInput;
    constructor(input: ListConfigurationSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput>;
    private serialize;
    private deserialize;
}
