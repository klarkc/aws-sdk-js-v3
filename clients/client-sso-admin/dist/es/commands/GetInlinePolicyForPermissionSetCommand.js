import { __extends } from "tslib";
import { GetInlinePolicyForPermissionSetRequest, GetInlinePolicyForPermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand, serializeAws_json1_1GetInlinePolicyForPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtains the inline policy assigned to the permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new GetInlinePolicyForPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInlinePolicyForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetInlinePolicyForPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInlinePolicyForPermissionSetCommand = /** @class */ (function (_super) {
    __extends(GetInlinePolicyForPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInlinePolicyForPermissionSetCommand(input) {
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
    GetInlinePolicyForPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "GetInlinePolicyForPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInlinePolicyForPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInlinePolicyForPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInlinePolicyForPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetInlinePolicyForPermissionSetCommand(input, context);
    };
    GetInlinePolicyForPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand(output, context);
    };
    return GetInlinePolicyForPermissionSetCommand;
}($Command));
export { GetInlinePolicyForPermissionSetCommand };
//# sourceMappingURL=GetInlinePolicyForPermissionSetCommand.js.map