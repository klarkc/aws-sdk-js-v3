import { __extends } from "tslib";
import { DetachManagedPolicyFromPermissionSetRequest, DetachManagedPolicyFromPermissionSetResponse, } from "../models/models_0";
import { deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand, serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Detaches the attached IAM managed policy ARN from the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DetachManagedPolicyFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DetachManagedPolicyFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachManagedPolicyFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachManagedPolicyFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachManagedPolicyFromPermissionSetCommand = /** @class */ (function (_super) {
    __extends(DetachManagedPolicyFromPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachManagedPolicyFromPermissionSetCommand(input) {
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
    DetachManagedPolicyFromPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DetachManagedPolicyFromPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachManagedPolicyFromPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetachManagedPolicyFromPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachManagedPolicyFromPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand(input, context);
    };
    DetachManagedPolicyFromPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand(output, context);
    };
    return DetachManagedPolicyFromPermissionSetCommand;
}($Command));
export { DetachManagedPolicyFromPermissionSetCommand };
//# sourceMappingURL=DetachManagedPolicyFromPermissionSetCommand.js.map