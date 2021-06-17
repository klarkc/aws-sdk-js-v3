import { __extends } from "tslib";
import { DeleteRemoteAccessSessionRequest, DeleteRemoteAccessSessionResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteRemoteAccessSessionCommand, serializeAws_json1_1DeleteRemoteAccessSessionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a completed remote access session and its results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new DeleteRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteRemoteAccessSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRemoteAccessSessionCommand = /** @class */ (function (_super) {
    __extends(DeleteRemoteAccessSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRemoteAccessSessionCommand(input) {
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
    DeleteRemoteAccessSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "DeleteRemoteAccessSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRemoteAccessSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRemoteAccessSessionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRemoteAccessSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRemoteAccessSessionCommand(input, context);
    };
    DeleteRemoteAccessSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRemoteAccessSessionCommand(output, context);
    };
    return DeleteRemoteAccessSessionCommand;
}($Command));
export { DeleteRemoteAccessSessionCommand };
//# sourceMappingURL=DeleteRemoteAccessSessionCommand.js.map