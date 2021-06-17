import { __extends } from "tslib";
import { ListResourceDefinitionsRequest, ListResourceDefinitionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListResourceDefinitionsCommand, serializeAws_restJson1ListResourceDefinitionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves a list of resource definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListResourceDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListResourceDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListResourceDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceDefinitionsCommand = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceDefinitionsCommand(input) {
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
    ListResourceDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListResourceDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListResourceDefinitionsCommand(input, context);
    };
    ListResourceDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListResourceDefinitionsCommand(output, context);
    };
    return ListResourceDefinitionsCommand;
}($Command));
export { ListResourceDefinitionsCommand };
//# sourceMappingURL=ListResourceDefinitionsCommand.js.map