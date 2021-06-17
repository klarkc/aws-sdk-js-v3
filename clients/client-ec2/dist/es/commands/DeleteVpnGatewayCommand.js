import { __extends } from "tslib";
import { DeleteVpnGatewayRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteVpnGatewayCommand, serializeAws_ec2DeleteVpnGatewayCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified virtual private gateway. You must first detach the virtual private gateway from the VPC. Note that you don't need to delete the virtual private gateway if you plan to delete and recreate the VPN connection between your VPC and your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVpnGatewayCommand = /** @class */ (function (_super) {
    __extends(DeleteVpnGatewayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVpnGatewayCommand(input) {
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
    DeleteVpnGatewayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteVpnGatewayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVpnGatewayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVpnGatewayCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteVpnGatewayCommand(input, context);
    };
    DeleteVpnGatewayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteVpnGatewayCommand(output, context);
    };
    return DeleteVpnGatewayCommand;
}($Command));
export { DeleteVpnGatewayCommand };
//# sourceMappingURL=DeleteVpnGatewayCommand.js.map