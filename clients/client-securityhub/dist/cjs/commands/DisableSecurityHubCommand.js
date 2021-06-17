"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableSecurityHubCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DisableSecurityHubCommand extends smithy_client_1.Command {
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
        const commandName = "DisableSecurityHubCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DisableSecurityHubRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.DisableSecurityHubResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DisableSecurityHubCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DisableSecurityHubCommand(output, context);
    }
}
exports.DisableSecurityHubCommand = DisableSecurityHubCommand;
//# sourceMappingURL=DisableSecurityHubCommand.js.map