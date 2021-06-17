"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateSubnetsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
 *          subnet for each of the Availability Zones that the VPC spans. </p>
 *          <p>This request creates an AWS Network Firewall firewall endpoint in each of the subnets. To
 *          enable the firewall's protections, you must also modify the VPC's route tables for each
 *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
 *          zone through the firewall endpoint. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, AssociateSubnetsCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, AssociateSubnetsCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new AssociateSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSubnetsCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetsCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssociateSubnetsCommand extends smithy_client_1.Command {
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
        const commandName = "AssociateSubnetsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssociateSubnetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AssociateSubnetsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0AssociateSubnetsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0AssociateSubnetsCommand(output, context);
    }
}
exports.AssociateSubnetsCommand = AssociateSubnetsCommand;
//# sourceMappingURL=AssociateSubnetsCommand.js.map