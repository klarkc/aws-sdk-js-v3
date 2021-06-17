import { __extends } from "tslib";
import { ListGitHubAccountTokenNamesInput, ListGitHubAccountTokenNamesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListGitHubAccountTokenNamesCommand, serializeAws_json1_1ListGitHubAccountTokenNamesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the names of stored connections to GitHub accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListGitHubAccountTokenNamesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListGitHubAccountTokenNamesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new ListGitHubAccountTokenNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGitHubAccountTokenNamesCommandInput} for command's `input` shape.
 * @see {@link ListGitHubAccountTokenNamesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGitHubAccountTokenNamesCommand = /** @class */ (function (_super) {
    __extends(ListGitHubAccountTokenNamesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGitHubAccountTokenNamesCommand(input) {
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
    ListGitHubAccountTokenNamesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "ListGitHubAccountTokenNamesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGitHubAccountTokenNamesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListGitHubAccountTokenNamesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGitHubAccountTokenNamesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGitHubAccountTokenNamesCommand(input, context);
    };
    ListGitHubAccountTokenNamesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGitHubAccountTokenNamesCommand(output, context);
    };
    return ListGitHubAccountTokenNamesCommand;
}($Command));
export { ListGitHubAccountTokenNamesCommand };
//# sourceMappingURL=ListGitHubAccountTokenNamesCommand.js.map