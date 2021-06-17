import { __extends } from "tslib";
import { GetApprovalRuleTemplateInput, GetApprovalRuleTemplateOutput } from "../models/models_0";
import { deserializeAws_json1_1GetApprovalRuleTemplateCommand, serializeAws_json1_1GetApprovalRuleTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specified approval rule template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link GetApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApprovalRuleTemplateCommand = /** @class */ (function (_super) {
    __extends(GetApprovalRuleTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApprovalRuleTemplateCommand(input) {
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
    GetApprovalRuleTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetApprovalRuleTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApprovalRuleTemplateInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetApprovalRuleTemplateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApprovalRuleTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetApprovalRuleTemplateCommand(input, context);
    };
    GetApprovalRuleTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetApprovalRuleTemplateCommand(output, context);
    };
    return GetApprovalRuleTemplateCommand;
}($Command));
export { GetApprovalRuleTemplateCommand };
//# sourceMappingURL=GetApprovalRuleTemplateCommand.js.map