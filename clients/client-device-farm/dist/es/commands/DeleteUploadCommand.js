import { __extends } from "tslib";
import { DeleteUploadRequest, DeleteUploadResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteUploadCommand, serializeAws_json1_1DeleteUploadCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an upload given the upload ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUploadCommandInput} for command's `input` shape.
 * @see {@link DeleteUploadCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUploadCommand = /** @class */ (function (_super) {
    __extends(DeleteUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUploadCommand(input) {
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
    DeleteUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "DeleteUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteUploadResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteUploadCommand(input, context);
    };
    DeleteUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteUploadCommand(output, context);
    };
    return DeleteUploadCommand;
}($Command));
export { DeleteUploadCommand };
//# sourceMappingURL=DeleteUploadCommand.js.map