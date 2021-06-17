import { __extends } from "tslib";
import { UpdateApprovalRuleTemplateContentInput, UpdateApprovalRuleTemplateContentOutput } from "../models/models_1";
import { deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand, serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the content of an approval rule template. You can change the number of
 *             required approvals, the membership of the approval rule, and whether an approval pool is
 *             defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApprovalRuleTemplateContentCommand = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateContentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApprovalRuleTemplateContentCommand(input) {
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
    UpdateApprovalRuleTemplateContentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdateApprovalRuleTemplateContentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApprovalRuleTemplateContentInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApprovalRuleTemplateContentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApprovalRuleTemplateContentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(input, context);
    };
    UpdateApprovalRuleTemplateContentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(output, context);
    };
    return UpdateApprovalRuleTemplateContentCommand;
}($Command));
export { UpdateApprovalRuleTemplateContentCommand };
//# sourceMappingURL=UpdateApprovalRuleTemplateContentCommand.js.map