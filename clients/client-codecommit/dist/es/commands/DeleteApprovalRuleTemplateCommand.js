import { __extends } from "tslib";
import { DeleteApprovalRuleTemplateInput, DeleteApprovalRuleTemplateOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteApprovalRuleTemplateCommand, serializeAws_json1_1DeleteApprovalRuleTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DeleteApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DeleteApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DeleteApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApprovalRuleTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteApprovalRuleTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApprovalRuleTemplateCommand(input) {
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
    DeleteApprovalRuleTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "DeleteApprovalRuleTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApprovalRuleTemplateInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApprovalRuleTemplateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApprovalRuleTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteApprovalRuleTemplateCommand(input, context);
    };
    DeleteApprovalRuleTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteApprovalRuleTemplateCommand(output, context);
    };
    return DeleteApprovalRuleTemplateCommand;
}($Command));
export { DeleteApprovalRuleTemplateCommand };
//# sourceMappingURL=DeleteApprovalRuleTemplateCommand.js.map