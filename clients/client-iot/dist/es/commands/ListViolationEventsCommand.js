import { __extends } from "tslib";
import { ListViolationEventsRequest, ListViolationEventsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListViolationEventsCommand, serializeAws_restJson1ListViolationEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Device Defender security profile violations discovered during the given time period.
 *       You can use filters to limit the results to those alerts issued for a particular security profile,
 *       behavior, or thing (device).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListViolationEventsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListViolationEventsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListViolationEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListViolationEventsCommandInput} for command's `input` shape.
 * @see {@link ListViolationEventsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListViolationEventsCommand = /** @class */ (function (_super) {
    __extends(ListViolationEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListViolationEventsCommand(input) {
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
    ListViolationEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListViolationEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListViolationEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListViolationEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListViolationEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListViolationEventsCommand(input, context);
    };
    ListViolationEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListViolationEventsCommand(output, context);
    };
    return ListViolationEventsCommand;
}($Command));
export { ListViolationEventsCommand };
//# sourceMappingURL=ListViolationEventsCommand.js.map