import { __extends } from "tslib";
import { DisassociateApprovalRuleTemplateFromRepositoryInput } from "../models/models_0";
import { deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand, serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the association between a template and a repository so that approval rules
 *             based on the template are not automatically created when pull requests are created in
 *             the specified repository. This does not delete any approval rules previously created for
 *             pull requests through the template association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DisassociateApprovalRuleTemplateFromRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateApprovalRuleTemplateFromRepositoryCommand = /** @class */ (function (_super) {
    __extends(DisassociateApprovalRuleTemplateFromRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateApprovalRuleTemplateFromRepositoryCommand(input) {
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
    DisassociateApprovalRuleTemplateFromRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DisassociateApprovalRuleTemplateFromRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateApprovalRuleTemplateFromRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateApprovalRuleTemplateFromRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(input, context);
    };
    DisassociateApprovalRuleTemplateFromRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(output, context);
    };
    return DisassociateApprovalRuleTemplateFromRepositoryCommand;
}($Command));
export { DisassociateApprovalRuleTemplateFromRepositoryCommand };
//# sourceMappingURL=DisassociateApprovalRuleTemplateFromRepositoryCommand.js.map