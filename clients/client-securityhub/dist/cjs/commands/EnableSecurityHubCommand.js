"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableSecurityHubCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class EnableSecurityHubCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SecurityHubClient";
        const commandName = "EnableSecurityHubCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.EnableSecurityHubRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.EnableSecurityHubResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1EnableSecurityHubCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1EnableSecurityHubCommand(output, context);
    }
}
exports.EnableSecurityHubCommand = EnableSecurityHubCommand;
//# sourceMappingURL=EnableSecurityHubCommand.js.map