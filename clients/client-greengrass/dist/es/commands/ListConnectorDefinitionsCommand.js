import { __extends } from "tslib";
import { ListConnectorDefinitionsRequest, ListConnectorDefinitionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConnectorDefinitionsCommand, serializeAws_restJson1ListConnectorDefinitionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves a list of connector definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListConnectorDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListConnectorDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListConnectorDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConnectorDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConnectorDefinitionsCommand(input) {
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
    ListConnectorDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListConnectorDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConnectorDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConnectorDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConnectorDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConnectorDefinitionsCommand(input, context);
    };
    ListConnectorDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConnectorDefinitionsCommand(output, context);
    };
    return ListConnectorDefinitionsCommand;
}($Command));
export { ListConnectorDefinitionsCommand };
//# sourceMappingURL=ListConnectorDefinitionsCommand.js.map