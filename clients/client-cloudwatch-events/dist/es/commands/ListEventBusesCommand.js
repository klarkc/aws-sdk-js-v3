import { __extends } from "tslib";
import { ListEventBusesRequest, ListEventBusesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListEventBusesCommand, serializeAws_json1_1ListEventBusesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the event buses in your account, including the default event bus, custom event
 *       buses, and partner event buses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListEventBusesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListEventBusesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListEventBusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventBusesCommandInput} for command's `input` shape.
 * @see {@link ListEventBusesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventBusesCommand = /** @class */ (function (_super) {
    __extends(ListEventBusesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEventBusesCommand(input) {
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
    ListEventBusesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "ListEventBusesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEventBusesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEventBusesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEventBusesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEventBusesCommand(input, context);
    };
    ListEventBusesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEventBusesCommand(output, context);
    };
    return ListEventBusesCommand;
}($Command));
export { ListEventBusesCommand };
//# sourceMappingURL=ListEventBusesCommand.js.map