import { __extends } from "tslib";
import { DeleteVirtualMFADeviceRequest } from "../models/models_0";
import { deserializeAws_queryDeleteVirtualMFADeviceCommand, serializeAws_queryDeleteVirtualMFADeviceCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a virtual MFA device.</p>
 *         <note>
 *             <p> You must deactivate a user's virtual MFA device before you can delete it. For
 *                 information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVirtualMFADeviceCommand = /** @class */ (function (_super) {
    __extends(DeleteVirtualMFADeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVirtualMFADeviceCommand(input) {
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
    DeleteVirtualMFADeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteVirtualMFADeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVirtualMFADeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVirtualMFADeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteVirtualMFADeviceCommand(input, context);
    };
    DeleteVirtualMFADeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteVirtualMFADeviceCommand(output, context);
    };
    return DeleteVirtualMFADeviceCommand;
}($Command));
export { DeleteVirtualMFADeviceCommand };
//# sourceMappingURL=DeleteVirtualMFADeviceCommand.js.map