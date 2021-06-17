import { __extends } from "tslib";
import { ListLoggerDefinitionsRequest, ListLoggerDefinitionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLoggerDefinitionsCommand, serializeAws_restJson1ListLoggerDefinitionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves a list of logger definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListLoggerDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLoggerDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLoggerDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLoggerDefinitionsCommand(input) {
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
    ListLoggerDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListLoggerDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLoggerDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLoggerDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLoggerDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLoggerDefinitionsCommand(input, context);
    };
    ListLoggerDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLoggerDefinitionsCommand(output, context);
    };
    return ListLoggerDefinitionsCommand;
}($Command));
export { ListLoggerDefinitionsCommand };
//# sourceMappingURL=ListLoggerDefinitionsCommand.js.map