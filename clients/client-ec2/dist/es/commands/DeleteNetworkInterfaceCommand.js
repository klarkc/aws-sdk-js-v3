import { __extends } from "tslib";
import { DeleteNetworkInterfaceRequest } from "../models/models_2";
import { deserializeAws_ec2DeleteNetworkInterfaceCommand, serializeAws_ec2DeleteNetworkInterfaceCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified network interface. You must detach the network interface before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkInterfaceCommand = /** @class */ (function (_super) {
    __extends(DeleteNetworkInterfaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNetworkInterfaceCommand(input) {
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
    DeleteNetworkInterfaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNetworkInterfaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNetworkInterfaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNetworkInterfaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNetworkInterfaceCommand(input, context);
    };
    DeleteNetworkInterfaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNetworkInterfaceCommand(output, context);
    };
    return DeleteNetworkInterfaceCommand;
}($Command));
export { DeleteNetworkInterfaceCommand };
//# sourceMappingURL=DeleteNetworkInterfaceCommand.js.map