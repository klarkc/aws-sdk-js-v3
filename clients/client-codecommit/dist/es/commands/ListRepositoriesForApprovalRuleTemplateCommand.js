import { __extends } from "tslib";
import { ListRepositoriesForApprovalRuleTemplateInput, ListRepositoriesForApprovalRuleTemplateOutput, } from "../models/models_1";
import { deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand, serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all repositories associated with the specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListRepositoriesForApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRepositoriesForApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesForApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRepositoriesForApprovalRuleTemplateCommand = /** @class */ (function (_super) {
    __extends(ListRepositoriesForApprovalRuleTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRepositoriesForApprovalRuleTemplateCommand(input) {
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
    ListRepositoriesForApprovalRuleTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "ListRepositoriesForApprovalRuleTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRepositoriesForApprovalRuleTemplateInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListRepositoriesForApprovalRuleTemplateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRepositoriesForApprovalRuleTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand(input, context);
    };
    ListRepositoriesForApprovalRuleTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRepositoriesForApprovalRuleTemplateCommand(output, context);
    };
    return ListRepositoriesForApprovalRuleTemplateCommand;
}($Command));
export { ListRepositoriesForApprovalRuleTemplateCommand };
//# sourceMappingURL=ListRepositoriesForApprovalRuleTemplateCommand.js.map