import { __extends } from "tslib";
import { ListRepositoriesRequest, ListRepositoriesResult } from "../models/models_0";
import { deserializeAws_restJson1ListRepositoriesCommand, serializeAws_restJson1ListRepositoriesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_RepositorySummary.html">RepositorySummary</a>
 *        objects. Each <code>RepositorySummary</code> contains information about a repository in the specified AWS account and that matches the input
 *        parameters.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListRepositoriesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListRepositoriesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRepositoriesCommand = /** @class */ (function (_super) {
    __extends(ListRepositoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRepositoriesCommand(input) {
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
    ListRepositoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "ListRepositoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRepositoriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRepositoriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRepositoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRepositoriesCommand(input, context);
    };
    ListRepositoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRepositoriesCommand(output, context);
    };
    return ListRepositoriesCommand;
}($Command));
export { ListRepositoriesCommand };
//# sourceMappingURL=ListRepositoriesCommand.js.map