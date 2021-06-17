import { __extends } from "tslib";
import { ModifyVpnTunnelOptionsRequest, ModifyVpnTunnelOptionsResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpnTunnelOptionsCommand, serializeAws_ec2ModifyVpnTunnelOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the options for a VPN tunnel in an AWS Site-to-Site VPN connection. You can modify
 *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
 *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN Tunnel Options for Your Site-to-Site VPN
 *                 Connection</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnTunnelOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnTunnelOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpnTunnelOptionsCommand = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpnTunnelOptionsCommand(input) {
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
    ModifyVpnTunnelOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpnTunnelOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpnTunnelOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpnTunnelOptionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpnTunnelOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpnTunnelOptionsCommand(input, context);
    };
    ModifyVpnTunnelOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpnTunnelOptionsCommand(output, context);
    };
    return ModifyVpnTunnelOptionsCommand;
}($Command));
export { ModifyVpnTunnelOptionsCommand };
//# sourceMappingURL=ModifyVpnTunnelOptionsCommand.js.map