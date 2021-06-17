import { __extends } from "tslib";
import { AssociateClientVpnTargetNetworkRequest, AssociateClientVpnTargetNetworkResult } from "../models/models_0";
import { deserializeAws_ec2AssociateClientVpnTargetNetworkCommand, serializeAws_ec2AssociateClientVpnTargetNetworkCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
 * 	        <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link AssociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateClientVpnTargetNetworkCommand = /** @class */ (function (_super) {
    __extends(AssociateClientVpnTargetNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateClientVpnTargetNetworkCommand(input) {
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
    AssociateClientVpnTargetNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "AssociateClientVpnTargetNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateClientVpnTargetNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateClientVpnTargetNetworkResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateClientVpnTargetNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2AssociateClientVpnTargetNetworkCommand(input, context);
    };
    AssociateClientVpnTargetNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2AssociateClientVpnTargetNetworkCommand(output, context);
    };
    return AssociateClientVpnTargetNetworkCommand;
}($Command));
export { AssociateClientVpnTargetNetworkCommand };
//# sourceMappingURL=AssociateClientVpnTargetNetworkCommand.js.map