import { __extends } from "tslib";
import { DeleteVpnConnectionRouteRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteVpnConnectionRouteCommand, serializeAws_ec2DeleteVpnConnectionRouteCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified static route associated with a VPN connection between an existing virtual private gateway and a VPN customer gateway. The static route allows traffic to be routed from the virtual private gateway to the VPN customer gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnConnectionRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnConnectionRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpnConnectionRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpnConnectionRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnConnectionRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpnConnectionRouteCommand = /** @class */ (function (_super) {
    __extends(DeleteVpnConnectionRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpnConnectionRouteCommand(input) {
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
    DeleteVpnConnectionRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVpnConnectionRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpnConnectionRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpnConnectionRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpnConnectionRouteCommand(input, context);
    };
    DeleteVpnConnectionRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpnConnectionRouteCommand(output, context);
    };
    return DeleteVpnConnectionRouteCommand;
}($Command));
export { DeleteVpnConnectionRouteCommand };
//# sourceMappingURL=DeleteVpnConnectionRouteCommand.js.map