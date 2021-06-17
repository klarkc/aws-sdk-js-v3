import { __extends } from "tslib";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesInput, BatchAssociateApprovalRuleTemplateWithRepositoriesOutput, } from "../models/models_0";
import { deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand, serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an association between an approval rule template and one or more specified repositories. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchAssociateApprovalRuleTemplateWithRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateApprovalRuleTemplateWithRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchAssociateApprovalRuleTemplateWithRepositoriesCommand = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input) {
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
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "BatchAssociateApprovalRuleTemplateWithRepositoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchAssociateApprovalRuleTemplateWithRepositoriesInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchAssociateApprovalRuleTemplateWithRepositoriesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(input, context);
    };
    BatchAssociateApprovalRuleTemplateWithRepositoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchAssociateApprovalRuleTemplateWithRepositoriesCommand(output, context);
    };
    return BatchAssociateApprovalRuleTemplateWithRepositoriesCommand;
}($Command));
export { BatchAssociateApprovalRuleTemplateWithRepositoriesCommand };
//# sourceMappingURL=BatchAssociateApprovalRuleTemplateWithRepositoriesCommand.js.map