import { __extends } from "tslib";
import { ModifyClientVpnEndpointRequest, ModifyClientVpnEndpointResult } from "../models/models_4";
import { deserializeAws_ec2ModifyClientVpnEndpointCommand, serializeAws_ec2ModifyClientVpnEndpointCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the specified Client VPN endpoint. Modifying the DNS server resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyClientVpnEndpointCommand = /** @class */ (function (_super) {
    __extends(ModifyClientVpnEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyClientVpnEndpointCommand(input) {
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
    ModifyClientVpnEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyClientVpnEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyClientVpnEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyClientVpnEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyClientVpnEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyClientVpnEndpointCommand(input, context);
    };
    ModifyClientVpnEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyClientVpnEndpointCommand(output, context);
    };
    return ModifyClientVpnEndpointCommand;
}($Command));
export { ModifyClientVpnEndpointCommand };
//# sourceMappingURL=ModifyClientVpnEndpointCommand.js.map