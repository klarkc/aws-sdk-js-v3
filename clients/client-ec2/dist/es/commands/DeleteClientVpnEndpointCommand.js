import { __extends } from "tslib";
import { DeleteClientVpnEndpointRequest, DeleteClientVpnEndpointResult } from "../models/models_1";
import { deserializeAws_ec2DeleteClientVpnEndpointCommand, serializeAws_ec2DeleteClientVpnEndpointCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified Client VPN endpoint. You must disassociate all target networks before you
 * 			can delete a Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteClientVpnEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteClientVpnEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteClientVpnEndpointCommand(input) {
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
    DeleteClientVpnEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteClientVpnEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteClientVpnEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteClientVpnEndpointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteClientVpnEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteClientVpnEndpointCommand(input, context);
    };
    DeleteClientVpnEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteClientVpnEndpointCommand(output, context);
    };
    return DeleteClientVpnEndpointCommand;
}($Command));
export { DeleteClientVpnEndpointCommand };
//# sourceMappingURL=DeleteClientVpnEndpointCommand.js.map