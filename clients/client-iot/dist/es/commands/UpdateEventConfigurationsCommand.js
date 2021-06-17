import { __extends } from "tslib";
import { UpdateEventConfigurationsRequest, UpdateEventConfigurationsResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateEventConfigurationsCommand, serializeAws_restJson1UpdateEventConfigurationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the event configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateEventConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateEventConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link UpdateEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEventConfigurationsCommand = /** @class */ (function (_super) {
    __extends(UpdateEventConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEventConfigurationsCommand(input) {
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
    UpdateEventConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateEventConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEventConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEventConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEventConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEventConfigurationsCommand(input, context);
    };
    UpdateEventConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEventConfigurationsCommand(output, context);
    };
    return UpdateEventConfigurationsCommand;
}($Command));
export { UpdateEventConfigurationsCommand };
//# sourceMappingURL=UpdateEventConfigurationsCommand.js.map