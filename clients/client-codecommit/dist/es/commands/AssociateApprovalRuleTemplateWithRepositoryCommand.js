import { __extends } from "tslib";
import { AssociateApprovalRuleTemplateWithRepositoryInput } from "../models/models_0";
import { deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand, serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an association between an approval rule template and a specified repository.
 *             Then, the next time a pull request is created in the repository where the destination
 *             reference (if specified) matches the destination reference (branch) for the pull
 *             request, an approval rule that matches the template conditions is automatically created
 *             for that pull request. If no destination references are specified in the template, an
 *             approval rule that matches the template contents is created for all pull requests in
 *             that repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateApprovalRuleTemplateWithRepositoryCommand = /** @class */ (function (_super) {
    __extends(AssociateApprovalRuleTemplateWithRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateApprovalRuleTemplateWithRepositoryCommand(input) {
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
    AssociateApprovalRuleTemplateWithRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "AssociateApprovalRuleTemplateWithRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateApprovalRuleTemplateWithRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateApprovalRuleTemplateWithRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand(input, context);
    };
    AssociateApprovalRuleTemplateWithRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand(output, context);
    };
    return AssociateApprovalRuleTemplateWithRepositoryCommand;
}($Command));
export { AssociateApprovalRuleTemplateWithRepositoryCommand };
//# sourceMappingURL=AssociateApprovalRuleTemplateWithRepositoryCommand.js.map