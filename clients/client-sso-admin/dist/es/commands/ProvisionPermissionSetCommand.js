import { __extends } from "tslib";
import { ProvisionPermissionSetRequest, ProvisionPermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1ProvisionPermissionSetCommand, serializeAws_json1_1ProvisionPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The process by which a specified permission set is provisioned to the specified target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ProvisionPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ProvisionPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ProvisionPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ProvisionPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ProvisionPermissionSetCommand = /** @class */ (function (_super) {
    __extends(ProvisionPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ProvisionPermissionSetCommand(input) {
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
    ProvisionPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ProvisionPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ProvisionPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ProvisionPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ProvisionPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ProvisionPermissionSetCommand(input, context);
    };
    ProvisionPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ProvisionPermissionSetCommand(output, context);
    };
    return ProvisionPermissionSetCommand;
}($Command));
export { ProvisionPermissionSetCommand };
//# sourceMappingURL=ProvisionPermissionSetCommand.js.map