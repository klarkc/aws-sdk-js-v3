import { __extends } from "tslib";
import { ListCoreDefinitionVersionsRequest, ListCoreDefinitionVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListCoreDefinitionVersionsCommand, serializeAws_restJson1ListCoreDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListCoreDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListCoreDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListCoreDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCoreDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCoreDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListCoreDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCoreDefinitionVersionsCommand(input) {
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
    ListCoreDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListCoreDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCoreDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCoreDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCoreDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListCoreDefinitionVersionsCommand(input, context);
    };
    ListCoreDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListCoreDefinitionVersionsCommand(output, context);
    };
    return ListCoreDefinitionVersionsCommand;
}($Command));
export { ListCoreDefinitionVersionsCommand };
//# sourceMappingURL=ListCoreDefinitionVersionsCommand.js.map