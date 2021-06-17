import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DisableSecurityHubRequest, DisableSecurityHubResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableSecurityHubCommandInput extends DisableSecurityHubRequest {
}
export interface DisableSecurityHubCommandOutput extends DisableSecurityHubResponse, __MetadataBearer {
}
/**
 * <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all
 *          Regions, you must submit one request per Region where you have enabled Security Hub.</p>
 *          <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated
 *          member accounts.</p>
 *          <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration
 *          settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
 *          are disabled, and your administrator and member account associations are removed.</p>
 *          <p>If you want to save your existing findings, you must export them before you disable
 *          Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisableSecurityHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link DisableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableSecurityHubCommand extends $Command<DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DisableSecurityHubCommandInput;
    constructor(input: DisableSecurityHubCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput>;
    private serialize;
    private deserialize;
}
