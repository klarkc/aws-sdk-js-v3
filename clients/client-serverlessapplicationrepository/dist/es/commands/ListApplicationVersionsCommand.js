import { __extends } from "tslib";
import { ListApplicationVersionsRequest, ListApplicationVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListApplicationVersionsCommand, serializeAws_restJson1ListApplicationVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists versions for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationVersionsCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationVersionsCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new ListApplicationVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationVersionsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationVersionsCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationVersionsCommand = /** @class */ (function (_super) {
    __extends(ListApplicationVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationVersionsCommand(input) {
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
    ListApplicationVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "ListApplicationVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListApplicationVersionsCommand(input, context);
    };
    ListApplicationVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListApplicationVersionsCommand(output, context);
    };
    return ListApplicationVersionsCommand;
}($Command));
export { ListApplicationVersionsCommand };
//# sourceMappingURL=ListApplicationVersionsCommand.js.map