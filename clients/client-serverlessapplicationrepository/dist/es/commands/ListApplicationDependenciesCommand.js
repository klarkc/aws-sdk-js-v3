import { __extends } from "tslib";
import { ListApplicationDependenciesRequest, ListApplicationDependenciesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListApplicationDependenciesCommand, serializeAws_restJson1ListApplicationDependenciesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the list of applications nested in the containing application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new ListApplicationDependenciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApplicationDependenciesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationDependenciesCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApplicationDependenciesCommand = /** @class */ (function (_super) {
    __extends(ListApplicationDependenciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApplicationDependenciesCommand(input) {
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
    ListApplicationDependenciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServerlessApplicationRepositoryClient";
        var commandName = "ListApplicationDependenciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApplicationDependenciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApplicationDependenciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApplicationDependenciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListApplicationDependenciesCommand(input, context);
    };
    ListApplicationDependenciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListApplicationDependenciesCommand(output, context);
    };
    return ListApplicationDependenciesCommand;
}($Command));
export { ListApplicationDependenciesCommand };
//# sourceMappingURL=ListApplicationDependenciesCommand.js.map