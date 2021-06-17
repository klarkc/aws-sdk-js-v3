import { __extends } from "tslib";
import { DeletePermissionPolicyRequest, DeletePermissionPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DeletePermissionPolicyCommand, serializeAws_json1_1DeletePermissionPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes an IAM policy from the specified rule group.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeletePermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeletePermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeletePermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePermissionPolicyCommand = /** @class */ (function (_super) {
    __extends(DeletePermissionPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePermissionPolicyCommand(input) {
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
    DeletePermissionPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "DeletePermissionPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePermissionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePermissionPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePermissionPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePermissionPolicyCommand(input, context);
    };
    DeletePermissionPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePermissionPolicyCommand(output, context);
    };
    return DeletePermissionPolicyCommand;
}($Command));
export { DeletePermissionPolicyCommand };
//# sourceMappingURL=DeletePermissionPolicyCommand.js.map