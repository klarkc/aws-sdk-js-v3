import { __extends } from "tslib";
import { ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListResourceDefinitionVersionsCommand, serializeAws_restJson1ListResourceDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListResourceDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListResourceDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListResourceDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListResourceDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceDefinitionVersionsCommand(input) {
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
    ListResourceDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListResourceDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListResourceDefinitionVersionsCommand(input, context);
    };
    ListResourceDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListResourceDefinitionVersionsCommand(output, context);
    };
    return ListResourceDefinitionVersionsCommand;
}($Command));
export { ListResourceDefinitionVersionsCommand };
//# sourceMappingURL=ListResourceDefinitionVersionsCommand.js.map