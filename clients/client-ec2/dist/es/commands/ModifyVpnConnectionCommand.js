import { __extends } from "tslib";
import { ModifyVpnConnectionRequest, ModifyVpnConnectionResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpnConnectionCommand, serializeAws_ec2ModifyVpnConnectionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ModifyVpnConnectionCommand = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpnConnectionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ModifyVpnConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpnConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpnConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpnConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpnConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpnConnectionCommand(input, context);
    };
    ModifyVpnConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpnConnectionCommand(output, context);
    };
    return ModifyVpnConnectionCommand;
}($Command));
export { ModifyVpnConnectionCommand };
//# sourceMappingURL=ModifyVpnConnectionCommand.js.map