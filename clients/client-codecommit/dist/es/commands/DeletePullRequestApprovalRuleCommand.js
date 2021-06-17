import { __extends } from "tslib";
import { DeletePullRequestApprovalRuleInput, DeletePullRequestApprovalRuleOutput } from "../models/models_0";
import { deserializeAws_json1_1DeletePullRequestApprovalRuleCommand, serializeAws_json1_1DeletePullRequestApprovalRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
 *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
 *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeletePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeletePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeletePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePullRequestApprovalRuleCommand = /** @class */ (function (_super) {
    __extends(DeletePullRequestApprovalRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePullRequestApprovalRuleCommand(input) {
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
    DeletePullRequestApprovalRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DeletePullRequestApprovalRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePullRequestApprovalRuleInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePullRequestApprovalRuleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePullRequestApprovalRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePullRequestApprovalRuleCommand(input, context);
    };
    DeletePullRequestApprovalRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePullRequestApprovalRuleCommand(output, context);
    };
    return DeletePullRequestApprovalRuleCommand;
}($Command));
export { DeletePullRequestApprovalRuleCommand };
//# sourceMappingURL=DeletePullRequestApprovalRuleCommand.js.map