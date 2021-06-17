import { __extends } from "tslib";
import { ListFunctionDefinitionVersionsRequest, ListFunctionDefinitionVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFunctionDefinitionVersionsCommand, serializeAws_restJson1ListFunctionDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListFunctionDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListFunctionDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFunctionDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListFunctionDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFunctionDefinitionVersionsCommand(input) {
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
    ListFunctionDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListFunctionDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFunctionDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFunctionDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFunctionDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFunctionDefinitionVersionsCommand(input, context);
    };
    ListFunctionDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFunctionDefinitionVersionsCommand(output, context);
    };
    return ListFunctionDefinitionVersionsCommand;
}($Command));
export { ListFunctionDefinitionVersionsCommand };
//# sourceMappingURL=ListFunctionDefinitionVersionsCommand.js.map