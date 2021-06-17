import { __extends } from "tslib";
import { DeleteOTAUpdateRequest, DeleteOTAUpdateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteOTAUpdateCommand, serializeAws_restJson1DeleteOTAUpdateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an OTA update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteOTAUpdateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteOTAUpdateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteOTAUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOTAUpdateCommandInput} for command's `input` shape.
 * @see {@link DeleteOTAUpdateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOTAUpdateCommand = /** @class */ (function (_super) {
    __extends(DeleteOTAUpdateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOTAUpdateCommand(input) {
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
    DeleteOTAUpdateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteOTAUpdateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOTAUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOTAUpdateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOTAUpdateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteOTAUpdateCommand(input, context);
    };
    DeleteOTAUpdateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteOTAUpdateCommand(output, context);
    };
    return DeleteOTAUpdateCommand;
}($Command));
export { DeleteOTAUpdateCommand };
//# sourceMappingURL=DeleteOTAUpdateCommand.js.map