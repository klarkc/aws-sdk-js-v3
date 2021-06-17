import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { EnableSecurityHubRequest, EnableSecurityHubResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableSecurityHubCommandInput extends EnableSecurityHubRequest {
}
export interface EnableSecurityHubCommandOutput extends EnableSecurityHubResponse, __MetadataBearer {
}
/**
 * <p>Enables Security Hub for your account in the current Region or the Region you specify in the
 *          request.</p>
 *          <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings
 *          from other services that are integrated with Security Hub.</p>
 *          <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also
 *          automatically enable the following standards.</p>
 *          <ul>
 *             <li>
 *                <p>CIS AWS Foundations</p>
 *             </li>
 *             <li>
 *                <p>AWS Foundational Security Best Practices</p>
 *             </li>
 *          </ul>
 *          <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p>
 *          <p>To not enable the automatically enabled standards, set
 *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
 *          <p>After you enable Security Hub, to enable a standard, use the <code>
 *                <a>BatchEnableStandards</a>
 *             </code> operation. To disable a standard, use the
 *                <code>
 *                <a>BatchDisableStandards</a>
 *             </code> operation.</p>
 *          <p>To learn more, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">Setting Up
 *             AWS Security Hub</a> in the <i>AWS Security Hub User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableSecurityHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableSecurityHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new EnableSecurityHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSecurityHubCommandInput} for command's `input` shape.
 * @see {@link EnableSecurityHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableSecurityHubCommand extends $Command<EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: EnableSecurityHubCommandInput;
    constructor(input: EnableSecurityHubCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput>;
    private serialize;
    private deserialize;
}
