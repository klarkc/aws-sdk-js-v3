import { __extends } from "tslib";
import { ListDestinationsRequest, ListDestinationsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDestinationsCommand, serializeAws_restJson1ListDestinationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the destinations registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDestinationsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDestinationsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListDestinationsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDestinationsCommand = /** @class */ (function (_super) {
    __extends(ListDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDestinationsCommand(input) {
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
    ListDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTWirelessClient";
        var commandName = "ListDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDestinationsCommand(input, context);
    };
    ListDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDestinationsCommand(output, context);
    };
    return ListDestinationsCommand;
}($Command));
export { ListDestinationsCommand };
//# sourceMappingURL=ListDestinationsCommand.js.map