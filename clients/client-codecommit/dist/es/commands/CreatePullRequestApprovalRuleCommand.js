import { __extends } from "tslib";
import { CreatePullRequestApprovalRuleInput, CreatePullRequestApprovalRuleOutput } from "../models/models_0";
import { deserializeAws_json1_1CreatePullRequestApprovalRuleCommand, serializeAws_json1_1CreatePullRequestApprovalRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an approval rule for a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreatePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePullRequestApprovalRuleCommand = /** @class */ (function (_super) {
    __extends(CreatePullRequestApprovalRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePullRequestApprovalRuleCommand(input) {
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
    CreatePullRequestApprovalRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "CreatePullRequestApprovalRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePullRequestApprovalRuleInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePullRequestApprovalRuleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePullRequestApprovalRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePullRequestApprovalRuleCommand(input, context);
    };
    CreatePullRequestApprovalRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePullRequestApprovalRuleCommand(output, context);
    };
    return CreatePullRequestApprovalRuleCommand;
}($Command));
export { CreatePullRequestApprovalRuleCommand };
//# sourceMappingURL=CreatePullRequestApprovalRuleCommand.js.map