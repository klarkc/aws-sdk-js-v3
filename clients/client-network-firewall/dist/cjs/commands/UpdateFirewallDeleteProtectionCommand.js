"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFirewallDeleteProtectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible
 *          to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
 *          against deletion. This setting helps protect against accidentally deleting a firewall
 *          that's in use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDeleteProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallDeleteProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDeleteProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDeleteProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFirewallDeleteProtectionCommand extends smithy_client_1.Command {
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
        const clientName = "NetworkFirewallClient";
        const commandName = "UpdateFirewallDeleteProtectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFirewallDeleteProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFirewallDeleteProtectionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateFirewallDeleteProtectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateFirewallDeleteProtectionCommand(output, context);
    }
}
exports.UpdateFirewallDeleteProtectionCommand = UpdateFirewallDeleteProtectionCommand;
//# sourceMappingURL=UpdateFirewallDeleteProtectionCommand.js.map