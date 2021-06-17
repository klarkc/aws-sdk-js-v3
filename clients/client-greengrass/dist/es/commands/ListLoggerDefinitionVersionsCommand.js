import { __extends } from "tslib";
import { ListLoggerDefinitionVersionsRequest, ListLoggerDefinitionVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListLoggerDefinitionVersionsCommand, serializeAws_restJson1ListLoggerDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListLoggerDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLoggerDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLoggerDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListLoggerDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLoggerDefinitionVersionsCommand(input) {
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
    ListLoggerDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListLoggerDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLoggerDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLoggerDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLoggerDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListLoggerDefinitionVersionsCommand(input, context);
    };
    ListLoggerDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListLoggerDefinitionVersionsCommand(output, context);
    };
    return ListLoggerDefinitionVersionsCommand;
}($Command));
export { ListLoggerDefinitionVersionsCommand };
//# sourceMappingURL=ListLoggerDefinitionVersionsCommand.js.map