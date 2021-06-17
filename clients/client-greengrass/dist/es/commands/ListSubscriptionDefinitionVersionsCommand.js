import { __extends } from "tslib";
import { ListSubscriptionDefinitionVersionsRequest, ListSubscriptionDefinitionVersionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand, serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListSubscriptionDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListSubscriptionDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListSubscriptionDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSubscriptionDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListSubscriptionDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSubscriptionDefinitionVersionsCommand(input) {
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
    ListSubscriptionDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListSubscriptionDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSubscriptionDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSubscriptionDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSubscriptionDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSubscriptionDefinitionVersionsCommand(input, context);
    };
    ListSubscriptionDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSubscriptionDefinitionVersionsCommand(output, context);
    };
    return ListSubscriptionDefinitionVersionsCommand;
}($Command));
export { ListSubscriptionDefinitionVersionsCommand };
//# sourceMappingURL=ListSubscriptionDefinitionVersionsCommand.js.map