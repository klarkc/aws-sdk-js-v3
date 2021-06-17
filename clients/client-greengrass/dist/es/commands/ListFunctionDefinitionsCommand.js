import { __extends } from "tslib";
import { ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFunctionDefinitionsCommand, serializeAws_restJson1ListFunctionDefinitionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves a list of Lambda function definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListFunctionDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListFunctionDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFunctionDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFunctionDefinitionsCommand(input) {
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
    ListFunctionDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListFunctionDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFunctionDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFunctionDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFunctionDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFunctionDefinitionsCommand(input, context);
    };
    ListFunctionDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFunctionDefinitionsCommand(output, context);
    };
    return ListFunctionDefinitionsCommand;
}($Command));
export { ListFunctionDefinitionsCommand };
//# sourceMappingURL=ListFunctionDefinitionsCommand.js.map