import { __extends } from "tslib";
import { ListStreamsRequest, ListStreamsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListStreamsCommand, serializeAws_restJson1ListStreamsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the streams in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListStreamsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListStreamsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamsCommandInput} for command's `input` shape.
 * @see {@link ListStreamsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStreamsCommand = /** @class */ (function (_super) {
    __extends(ListStreamsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStreamsCommand(input) {
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
    ListStreamsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListStreamsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStreamsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStreamsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStreamsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListStreamsCommand(input, context);
    };
    ListStreamsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListStreamsCommand(output, context);
    };
    return ListStreamsCommand;
}($Command));
export { ListStreamsCommand };
//# sourceMappingURL=ListStreamsCommand.js.map