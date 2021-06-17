import { __extends } from "tslib";
import { UpdateApprovalRuleTemplateNameInput, UpdateApprovalRuleTemplateNameOutput } from "../models/models_1";
import { deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand, serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the name of a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateNameCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateNameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateNameCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateNameCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApprovalRuleTemplateNameCommand = /** @class */ (function (_super) {
    __extends(UpdateApprovalRuleTemplateNameCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApprovalRuleTemplateNameCommand(input) {
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
    UpdateApprovalRuleTemplateNameCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "UpdateApprovalRuleTemplateNameCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApprovalRuleTemplateNameInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApprovalRuleTemplateNameOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApprovalRuleTemplateNameCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateApprovalRuleTemplateNameCommand(input, context);
    };
    UpdateApprovalRuleTemplateNameCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateApprovalRuleTemplateNameCommand(output, context);
    };
    return UpdateApprovalRuleTemplateNameCommand;
}($Command));
export { UpdateApprovalRuleTemplateNameCommand };
//# sourceMappingURL=UpdateApprovalRuleTemplateNameCommand.js.map