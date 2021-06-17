import { __extends } from "tslib";
import { ListV2LoggingLevelsRequest, ListV2LoggingLevelsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListV2LoggingLevelsCommand, serializeAws_restJson1ListV2LoggingLevelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists logging levels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListV2LoggingLevelsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListV2LoggingLevelsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListV2LoggingLevelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListV2LoggingLevelsCommandInput} for command's `input` shape.
 * @see {@link ListV2LoggingLevelsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListV2LoggingLevelsCommand = /** @class */ (function (_super) {
    __extends(ListV2LoggingLevelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListV2LoggingLevelsCommand(input) {
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
    ListV2LoggingLevelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListV2LoggingLevelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListV2LoggingLevelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListV2LoggingLevelsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListV2LoggingLevelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListV2LoggingLevelsCommand(input, context);
    };
    ListV2LoggingLevelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListV2LoggingLevelsCommand(output, context);
    };
    return ListV2LoggingLevelsCommand;
}($Command));
export { ListV2LoggingLevelsCommand };
//# sourceMappingURL=ListV2LoggingLevelsCommand.js.map