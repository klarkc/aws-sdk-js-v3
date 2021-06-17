import { __extends } from "tslib";
import { ListRepositoriesInDomainRequest, ListRepositoriesInDomainResult } from "../models/models_0";
import { deserializeAws_restJson1ListRepositoriesInDomainCommand, serializeAws_restJson1ListRepositoriesInDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified domain and that matches the input
 *        parameters.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListRepositoriesInDomainCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListRepositoriesInDomainCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListRepositoriesInDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesInDomainCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesInDomainCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRepositoriesInDomainCommand = /** @class */ (function (_super) {
    __extends(ListRepositoriesInDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRepositoriesInDomainCommand(input) {
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
    ListRepositoriesInDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "ListRepositoriesInDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRepositoriesInDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRepositoriesInDomainResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRepositoriesInDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRepositoriesInDomainCommand(input, context);
    };
    ListRepositoriesInDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRepositoriesInDomainCommand(output, context);
    };
    return ListRepositoriesInDomainCommand;
}($Command));
export { ListRepositoriesInDomainCommand };
//# sourceMappingURL=ListRepositoriesInDomainCommand.js.map