import { __extends } from "tslib";
import { ListInputRoutingsRequest, ListInputRoutingsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInputRoutingsCommand, serializeAws_restJson1ListInputRoutingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Lists one or more input routings.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListInputRoutingsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListInputRoutingsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListInputRoutingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputRoutingsCommandInput} for command's `input` shape.
 * @see {@link ListInputRoutingsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInputRoutingsCommand = /** @class */ (function (_super) {
    __extends(ListInputRoutingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInputRoutingsCommand(input) {
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
    ListInputRoutingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "ListInputRoutingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInputRoutingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInputRoutingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInputRoutingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInputRoutingsCommand(input, context);
    };
    ListInputRoutingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInputRoutingsCommand(output, context);
    };
    return ListInputRoutingsCommand;
}($Command));
export { ListInputRoutingsCommand };
//# sourceMappingURL=ListInputRoutingsCommand.js.map