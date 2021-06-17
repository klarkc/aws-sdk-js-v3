import { __extends } from "tslib";
import { ListGroupVersionsRequest, ListGroupVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGroupVersionsCommand, serializeAws_restJson1ListGroupVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListGroupVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupVersionsCommandInput} for command's `input` shape.
 * @see {@link ListGroupVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGroupVersionsCommand = /** @class */ (function (_super) {
    __extends(ListGroupVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGroupVersionsCommand(input) {
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
    ListGroupVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListGroupVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGroupVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGroupVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGroupVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGroupVersionsCommand(input, context);
    };
    ListGroupVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGroupVersionsCommand(output, context);
    };
    return ListGroupVersionsCommand;
}($Command));
export { ListGroupVersionsCommand };
//# sourceMappingURL=ListGroupVersionsCommand.js.map