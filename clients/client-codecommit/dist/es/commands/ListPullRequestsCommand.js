import { __extends } from "tslib";
import { ListPullRequestsInput, ListPullRequestsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListPullRequestsCommand, serializeAws_json1_1ListPullRequestsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of pull requests for a specified repository. The return list can be refined by pull request
 *         status or pull request author ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListPullRequestsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListPullRequestsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListPullRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPullRequestsCommandInput} for command's `input` shape.
 * @see {@link ListPullRequestsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPullRequestsCommand = /** @class */ (function (_super) {
    __extends(ListPullRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPullRequestsCommand(input) {
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
    ListPullRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "ListPullRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPullRequestsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPullRequestsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPullRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPullRequestsCommand(input, context);
    };
    ListPullRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPullRequestsCommand(output, context);
    };
    return ListPullRequestsCommand;
}($Command));
export { ListPullRequestsCommand };
//# sourceMappingURL=ListPullRequestsCommand.js.map