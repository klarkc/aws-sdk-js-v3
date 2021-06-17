import { __extends } from "tslib";
import { OverridePullRequestApprovalRulesInput } from "../models/models_1";
import { deserializeAws_json1_1OverridePullRequestApprovalRulesCommand, serializeAws_json1_1OverridePullRequestApprovalRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets aside (overrides) all approval rule requirements for a specified pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, OverridePullRequestApprovalRulesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, OverridePullRequestApprovalRulesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new OverridePullRequestApprovalRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OverridePullRequestApprovalRulesCommandInput} for command's `input` shape.
 * @see {@link OverridePullRequestApprovalRulesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var OverridePullRequestApprovalRulesCommand = /** @class */ (function (_super) {
    __extends(OverridePullRequestApprovalRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function OverridePullRequestApprovalRulesCommand(input) {
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
    OverridePullRequestApprovalRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "OverridePullRequestApprovalRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: OverridePullRequestApprovalRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    OverridePullRequestApprovalRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1OverridePullRequestApprovalRulesCommand(input, context);
    };
    OverridePullRequestApprovalRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1OverridePullRequestApprovalRulesCommand(output, context);
    };
    return OverridePullRequestApprovalRulesCommand;
}($Command));
export { OverridePullRequestApprovalRulesCommand };
//# sourceMappingURL=OverridePullRequestApprovalRulesCommand.js.map