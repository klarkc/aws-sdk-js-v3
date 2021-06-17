import { __extends } from "tslib";
import { ListInputsRequest, ListInputsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInputsCommand, serializeAws_restJson1ListInputsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the inputs you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListInputsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListInputsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListInputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputsCommandInput} for command's `input` shape.
 * @see {@link ListInputsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInputsCommand = /** @class */ (function (_super) {
    __extends(ListInputsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInputsCommand(input) {
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
    ListInputsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTEventsClient";
        var commandName = "ListInputsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInputsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInputsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInputsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInputsCommand(input, context);
    };
    ListInputsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInputsCommand(output, context);
    };
    return ListInputsCommand;
}($Command));
export { ListInputsCommand };
//# sourceMappingURL=ListInputsCommand.js.map