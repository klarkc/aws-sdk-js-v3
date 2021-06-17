import { __extends } from "tslib";
import { DeleteCoreDeviceRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteCoreDeviceCommand, serializeAws_restJson1DeleteCoreDeviceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a AWS IoT Greengrass core device, which is an AWS IoT thing. This operation removes the core
 *       device from the list of core devices. This operation doesn't delete the AWS IoT thing. For more
 *       information about how to delete the AWS IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the
 *         <i>AWS IoT API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DeleteCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DeleteCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new DeleteCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCoreDeviceCommand = /** @class */ (function (_super) {
    __extends(DeleteCoreDeviceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCoreDeviceCommand(input) {
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
    DeleteCoreDeviceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "DeleteCoreDeviceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCoreDeviceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCoreDeviceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCoreDeviceCommand(input, context);
    };
    DeleteCoreDeviceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCoreDeviceCommand(output, context);
    };
    return DeleteCoreDeviceCommand;
}($Command));
export { DeleteCoreDeviceCommand };
//# sourceMappingURL=DeleteCoreDeviceCommand.js.map