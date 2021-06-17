"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFirewallDescriptionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the description for the specified firewall. Use the description to help you
 *          identify the firewall when you're working with it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallDescriptionCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallDescriptionCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new UpdateFirewallDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFirewallDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDescriptionCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateFirewallDescriptionCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateFirewallDescriptionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFirewallDescriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateFirewallDescriptionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateFirewallDescriptionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateFirewallDescriptionCommand(output, context);
    }
}
exports.UpdateFirewallDescriptionCommand = UpdateFirewallDescriptionCommand;
//# sourceMappingURL=UpdateFirewallDescriptionCommand.js.map