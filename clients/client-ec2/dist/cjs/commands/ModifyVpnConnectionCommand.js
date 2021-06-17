"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVpnConnectionCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the customer gateway or the target gateway of an AWS Site-to-Site VPN connection. To modify the target gateway, the following migration
 *             options are available:</p>
 *         <ul>
 *             <li>
 *                 <p>An existing virtual private gateway to a new virtual private gateway</p>
 *             </li>
 *             <li>
 *                 <p>An existing virtual private gateway to a transit gateway</p>
 *             </li>
 *             <li>
 *                 <p>An existing transit gateway to a new transit gateway</p>
 *             </li>
 *             <li>
 *                 <p>An existing transit gateway to a virtual private gateway</p>
 *             </li>
 *          </ul>
 *         <p>Before you perform the migration to the new gateway, you must configure the new gateway. Use <a>CreateVpnGateway</a> to create a virtual private gateway, or <a>CreateTransitGateway</a> to create a transit gateway.</p>
 *         <p>This step is required when you migrate from a virtual private gateway with static routes to
 *             a transit gateway. </p>
 *         <p>You must delete the static routes before you migrate to the new gateway.</p>
 *
 *         <p>Keep a copy of the static route before you delete it. You will need to add back these
 *             routes to the transit gateway after the VPN connection migration is complete.</p>
 *
 *         <p>After you migrate to the new gateway, you might need to modify your VPC route table. Use <a>CreateRoute</a> and <a>DeleteRoute</a> to make the changes described in <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/modify-vpn-target.html#step-update-routing">VPN Gateway Target Modification Required VPC Route Table Updates</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 *         <p>
 *             When the new gateway is a transit gateway, modify the transit gateway route table to allow traffic between the VPC and the  AWS Site-to-Site VPN connection. Use <a>CreateTransitGatewayRoute</a> to add the routes.</p>
 *
 *         <p> If you deleted VPN static routes, you must add the static routes to the transit gateway
 *             route table.</p>
 *         <p>After you perform this operation, the AWS VPN endpoint's IP addresses on the AWS side and
 *             the tunnel options remain intact. Your AWS Site-to-Site VPN connection will be temporarily unavailable
 *             for a brief period while we provision the new endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVpnConnectionCommand extends smithy_client_1.Command {
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
        const clientName = "EC2Client";
        const commandName = "ModifyVpnConnectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVpnConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyVpnConnectionResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVpnConnectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVpnConnectionCommand(output, context);
    }
}
exports.ModifyVpnConnectionCommand = ModifyVpnConnectionCommand;
//# sourceMappingURL=ModifyVpnConnectionCommand.js.map