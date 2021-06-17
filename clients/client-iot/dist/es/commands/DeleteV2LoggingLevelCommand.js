import { __extends } from "tslib";
import { DeleteV2LoggingLevelRequest } from "../models/models_1";
import { deserializeAws_restJson1DeleteV2LoggingLevelCommand, serializeAws_restJson1DeleteV2LoggingLevelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a logging level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link DeleteV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteV2LoggingLevelCommand = /** @class */ (function (_super) {
    __extends(DeleteV2LoggingLevelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteV2LoggingLevelCommand(input) {
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
    DeleteV2LoggingLevelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteV2LoggingLevelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteV2LoggingLevelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteV2LoggingLevelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteV2LoggingLevelCommand(input, context);
    };
    DeleteV2LoggingLevelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteV2LoggingLevelCommand(output, context);
    };
    return DeleteV2LoggingLevelCommand;
}($Command));
export { DeleteV2LoggingLevelCommand };
//# sourceMappingURL=DeleteV2LoggingLevelCommand.js.map