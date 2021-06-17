import { __extends } from "tslib";
import { UpdateUploadRequest, UpdateUploadResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateUploadCommand, serializeAws_json1_1UpdateUploadCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an uploaded test spec.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUploadCommandInput} for command's `input` shape.
 * @see {@link UpdateUploadCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUploadCommand = /** @class */ (function (_super) {
    __extends(UpdateUploadCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUploadCommand(input) {
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
    UpdateUploadCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "UpdateUploadCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUploadRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUploadResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUploadCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateUploadCommand(input, context);
    };
    UpdateUploadCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateUploadCommand(output, context);
    };
    return UpdateUploadCommand;
}($Command));
export { UpdateUploadCommand };
//# sourceMappingURL=UpdateUploadCommand.js.map