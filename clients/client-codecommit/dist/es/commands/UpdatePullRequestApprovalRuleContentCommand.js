import { __extends } from "tslib";
import { UpdatePullRequestApprovalRuleContentInput, UpdatePullRequestApprovalRuleContentOutput, } from "../models/models_1";
import { deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand, serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and
 *             the approval pool for approvers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalRuleContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalRuleContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestApprovalRuleContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestApprovalRuleContentCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestApprovalRuleContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePullRequestApprovalRuleContentCommand = /** @class */ (function (_super) {
    __extends(UpdatePullRequestApprovalRuleContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePullRequestApprovalRuleContentCommand(input) {
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
    UpdatePullRequestApprovalRuleContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdatePullRequestApprovalRuleContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePullRequestApprovalRuleContentInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePullRequestApprovalRuleContentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePullRequestApprovalRuleContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand(input, context);
    };
    UpdatePullRequestApprovalRuleContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand(output, context);
    };
    return UpdatePullRequestApprovalRuleContentCommand;
}($Command));
export { UpdatePullRequestApprovalRuleContentCommand };
//# sourceMappingURL=UpdatePullRequestApprovalRuleContentCommand.js.map