import { __extends } from "tslib";
import { CreateApprovalRuleTemplateInput, CreateApprovalRuleTemplateOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateApprovalRuleTemplateCommand, serializeAws_json1_1CreateApprovalRuleTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a template for approval rules that can then be associated with one or more
 *             repositories in your AWS account. When you associate a template with a repository, AWS
 *             CodeCommit creates an approval rule that matches the conditions of the template for all
 *             pull requests that meet the conditions of the template. For more information, see
 *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApprovalRuleTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateApprovalRuleTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateApprovalRuleTemplateCommand(input) {
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
    CreateApprovalRuleTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "CreateApprovalRuleTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateApprovalRuleTemplateInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateApprovalRuleTemplateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateApprovalRuleTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateApprovalRuleTemplateCommand(input, context);
    };
    CreateApprovalRuleTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateApprovalRuleTemplateCommand(output, context);
    };
    return CreateApprovalRuleTemplateCommand;
}($Command));
export { CreateApprovalRuleTemplateCommand };
//# sourceMappingURL=CreateApprovalRuleTemplateCommand.js.map