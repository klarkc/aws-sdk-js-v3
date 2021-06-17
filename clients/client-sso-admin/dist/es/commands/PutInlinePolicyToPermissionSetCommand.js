import { __extends } from "tslib";
import { PutInlinePolicyToPermissionSetRequest, PutInlinePolicyToPermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand, serializeAws_json1_1PutInlinePolicyToPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attaches an IAM inline policy to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutInlinePolicyToPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutInlinePolicyToPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new PutInlinePolicyToPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInlinePolicyToPermissionSetCommandInput} for command's `input` shape.
 * @see {@link PutInlinePolicyToPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutInlinePolicyToPermissionSetCommand = /** @class */ (function (_super) {
    __extends(PutInlinePolicyToPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutInlinePolicyToPermissionSetCommand(input) {
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
    PutInlinePolicyToPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "PutInlinePolicyToPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutInlinePolicyToPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutInlinePolicyToPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutInlinePolicyToPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutInlinePolicyToPermissionSetCommand(input, context);
    };
    PutInlinePolicyToPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand(output, context);
    };
    return PutInlinePolicyToPermissionSetCommand;
}($Command));
export { PutInlinePolicyToPermissionSetCommand };
//# sourceMappingURL=PutInlinePolicyToPermissionSetCommand.js.map