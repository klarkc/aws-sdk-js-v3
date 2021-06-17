import { __extends } from "tslib";
import { ModifyVpnConnectionOptionsRequest, ModifyVpnConnectionOptionsResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpnConnectionOptionsCommand, serializeAws_ec2ModifyVpnConnectionOptionsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the connection options for your Site-to-Site VPN connection.</p>
 *         <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the AWS side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpnConnectionOptionsCommand = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpnConnectionOptionsCommand(input) {
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
    ModifyVpnConnectionOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpnConnectionOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpnConnectionOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpnConnectionOptionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpnConnectionOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpnConnectionOptionsCommand(input, context);
    };
    ModifyVpnConnectionOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpnConnectionOptionsCommand(output, context);
    };
    return ModifyVpnConnectionOptionsCommand;
}($Command));
export { ModifyVpnConnectionOptionsCommand };
//# sourceMappingURL=ModifyVpnConnectionOptionsCommand.js.map