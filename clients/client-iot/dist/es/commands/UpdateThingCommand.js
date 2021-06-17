import { __extends } from "tslib";
import { UpdateThingRequest, UpdateThingResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateThingCommand, serializeAws_restJson1UpdateThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the data for a thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThingCommand = /** @class */ (function (_super) {
    __extends(UpdateThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThingCommand(input) {
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
    UpdateThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateThingCommand(input, context);
    };
    UpdateThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateThingCommand(output, context);
    };
    return UpdateThingCommand;
}($Command));
export { UpdateThingCommand };
//# sourceMappingURL=UpdateThingCommand.js.map