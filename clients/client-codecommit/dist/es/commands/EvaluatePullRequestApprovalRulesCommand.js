import { __extends } from "tslib";
import { EvaluatePullRequestApprovalRulesInput, EvaluatePullRequestApprovalRulesOutput } from "../models/models_0";
import { deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand, serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, EvaluatePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, EvaluatePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new EvaluatePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EvaluatePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link EvaluatePullRequestApprovalRulesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EvaluatePullRequestApprovalRulesCommand = /** @class */ (function (_super) {
    __extends(EvaluatePullRequestApprovalRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EvaluatePullRequestApprovalRulesCommand(input) {
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
    EvaluatePullRequestApprovalRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "EvaluatePullRequestApprovalRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EvaluatePullRequestApprovalRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: EvaluatePullRequestApprovalRulesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EvaluatePullRequestApprovalRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EvaluatePullRequestApprovalRulesCommand(input, context);
    };
    EvaluatePullRequestApprovalRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EvaluatePullRequestApprovalRulesCommand(output, context);
    };
    return EvaluatePullRequestApprovalRulesCommand;
}($Command));
export { EvaluatePullRequestApprovalRulesCommand };
//# sourceMappingURL=EvaluatePullRequestApprovalRulesCommand.js.map