import { __extends } from "tslib";
import { DeleteInstanceProfileRequest, DeleteInstanceProfileResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteInstanceProfileCommand, serializeAws_json1_1DeleteInstanceProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a profile that can be applied to one or more private device instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInstanceProfileCommand(input) {
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
    DeleteInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "DeleteInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInstanceProfileResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteInstanceProfileCommand(input, context);
    };
    DeleteInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteInstanceProfileCommand(output, context);
    };
    return DeleteInstanceProfileCommand;
}($Command));
export { DeleteInstanceProfileCommand };
//# sourceMappingURL=DeleteInstanceProfileCommand.js.map