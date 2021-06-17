import { __extends } from "tslib";
import { DeleteAccessControlRuleRequest, DeleteAccessControlRuleResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAccessControlRuleCommand, serializeAws_json1_1DeleteAccessControlRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an access control rule for the specified WorkMail organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccessControlRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteAccessControlRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccessControlRuleCommand(input) {
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
    DeleteAccessControlRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DeleteAccessControlRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccessControlRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccessControlRuleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccessControlRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAccessControlRuleCommand(input, context);
    };
    DeleteAccessControlRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAccessControlRuleCommand(output, context);
    };
    return DeleteAccessControlRuleCommand;
}($Command));
export { DeleteAccessControlRuleCommand };
//# sourceMappingURL=DeleteAccessControlRuleCommand.js.map