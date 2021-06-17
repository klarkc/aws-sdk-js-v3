import { __extends } from "tslib";
import { DeleteThingRequest, DeleteThingResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteThingCommand, serializeAws_restJson1DeleteThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified thing. Returns successfully with no error if the deletion is
 * 			successful or you specify a thing that doesn't exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThingCommandInput} for command's `input` shape.
 * @see {@link DeleteThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThingCommand = /** @class */ (function (_super) {
    __extends(DeleteThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThingCommand(input) {
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
    DeleteThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteThingCommand(input, context);
    };
    DeleteThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteThingCommand(output, context);
    };
    return DeleteThingCommand;
}($Command));
export { DeleteThingCommand };
//# sourceMappingURL=DeleteThingCommand.js.map