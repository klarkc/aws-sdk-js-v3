"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFirewallPolicyChangeProtectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyChangeProtectionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallPolicyChangeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyChangeProtectionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFirewallPolicyChangeProtectionCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateFirewallPolicyChangeProtectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFirewallPolicyChangeProtectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFirewallPolicyChangeProtectionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(output, context);
    }
}
exports.UpdateFirewallPolicyChangeProtectionCommand = UpdateFirewallPolicyChangeProtectionCommand;
//# sourceMappingURL=UpdateFirewallPolicyChangeProtectionCommand.js.map