import { __extends } from "tslib";
import { DeleteNetworkInterfacePermissionRequest, DeleteNetworkInterfacePermissionResult } from "../models/models_2";
import { deserializeAws_ec2DeleteNetworkInterfacePermissionCommand, serializeAws_ec2DeleteNetworkInterfacePermissionCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a permission for a network interface. By default, you cannot delete the
 * 			permission if the account for which you're removing the permission has attached the
 * 			network interface to an instance. However, you can force delete the permission,
 * 			regardless of any attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNetworkInterfacePermissionCommand = /** @class */ (function (_super) {
    __extends(DeleteNetworkInterfacePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNetworkInterfacePermissionCommand(input) {
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
    DeleteNetworkInterfacePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DeleteNetworkInterfacePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNetworkInterfacePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNetworkInterfacePermissionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNetworkInterfacePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DeleteNetworkInterfacePermissionCommand(input, context);
    };
    DeleteNetworkInterfacePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DeleteNetworkInterfacePermissionCommand(output, context);
    };
    return DeleteNetworkInterfacePermissionCommand;
}($Command));
export { DeleteNetworkInterfacePermissionCommand };
//# sourceMappingURL=DeleteNetworkInterfacePermissionCommand.js.map