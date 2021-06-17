import { __extends } from "tslib";
import { AttachManagedPolicyToPermissionSetRequest, AttachManagedPolicyToPermissionSetResponse, } from "../models/models_0";
import { deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand, serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an IAM managed policy ARN to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AttachManagedPolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new AttachManagedPolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachManagedPolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link AttachManagedPolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachManagedPolicyToPermissionSetCommand = /** @class */ (function (_super) {
    __extends(AttachManagedPolicyToPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachManagedPolicyToPermissionSetCommand(input) {
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
    AttachManagedPolicyToPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "AttachManagedPolicyToPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachManagedPolicyToPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AttachManagedPolicyToPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachManagedPolicyToPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand(input, context);
    };
    AttachManagedPolicyToPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand(output, context);
    };
    return AttachManagedPolicyToPermissionSetCommand;
}($Command));
export { AttachManagedPolicyToPermissionSetCommand };
//# sourceMappingURL=AttachManagedPolicyToPermissionSetCommand.js.map