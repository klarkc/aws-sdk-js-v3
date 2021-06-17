import { __extends } from "tslib";
import { UpdateApprovalRuleTemplateDescriptionInput, UpdateApprovalRuleTemplateDescriptionOutput, } from "../models/models_1";
import { deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand, serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the description for a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateDescriptionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApprovalRuleTemplateDescriptionCommand = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateDescriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApprovalRuleTemplateDescriptionCommand(input) {
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
    UpdateApprovalRuleTemplateDescriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdateApprovalRuleTemplateDescriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApprovalRuleTemplateDescriptionInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApprovalRuleTemplateDescriptionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApprovalRuleTemplateDescriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand(input, context);
    };
    UpdateApprovalRuleTemplateDescriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateDescriptionCommand(output, context);
    };
    return UpdateApprovalRuleTemplateDescriptionCommand;
}($Command));
export { UpdateApprovalRuleTemplateDescriptionCommand };
//# sourceMappingURL=UpdateApprovalRuleTemplateDescriptionCommand.js.map