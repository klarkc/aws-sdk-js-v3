import { __extends } from "tslib";
import { ListConnectorDefinitionVersionsRequest, ListConnectorDefinitionVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListConnectorDefinitionVersionsCommand, serializeAws_restJson1ListConnectorDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListConnectorDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListConnectorDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListConnectorDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConnectorDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListConnectorDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListConnectorDefinitionVersionsCommand(input) {
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
    ListConnectorDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListConnectorDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListConnectorDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListConnectorDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListConnectorDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListConnectorDefinitionVersionsCommand(input, context);
    };
    ListConnectorDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListConnectorDefinitionVersionsCommand(output, context);
    };
    return ListConnectorDefinitionVersionsCommand;
}($Command));
export { ListConnectorDefinitionVersionsCommand };
//# sourceMappingURL=ListConnectorDefinitionVersionsCommand.js.map