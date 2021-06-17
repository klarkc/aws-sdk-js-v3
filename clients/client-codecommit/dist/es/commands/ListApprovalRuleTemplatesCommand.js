import { __extends } from "tslib";
import { ListApprovalRuleTemplatesInput, ListApprovalRuleTemplatesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListApprovalRuleTemplatesCommand, serializeAws_json1_1ListApprovalRuleTemplatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all approval rule templates in the specified AWS Region in your AWS account. If
 *             an AWS Region is not specified, the AWS Region where you are signed in is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListApprovalRuleTemplatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListApprovalRuleTemplatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListApprovalRuleTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApprovalRuleTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListApprovalRuleTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApprovalRuleTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListApprovalRuleTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApprovalRuleTemplatesCommand(input) {
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
    ListApprovalRuleTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "ListApprovalRuleTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApprovalRuleTemplatesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListApprovalRuleTemplatesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApprovalRuleTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApprovalRuleTemplatesCommand(input, context);
    };
    ListApprovalRuleTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApprovalRuleTemplatesCommand(output, context);
    };
    return ListApprovalRuleTemplatesCommand;
}($Command));
export { ListApprovalRuleTemplatesCommand };
//# sourceMappingURL=ListApprovalRuleTemplatesCommand.js.map