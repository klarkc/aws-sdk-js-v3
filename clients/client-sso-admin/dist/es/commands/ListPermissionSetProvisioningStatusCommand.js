import { __extends } from "tslib";
import { ListPermissionSetProvisioningStatusRequest, ListPermissionSetProvisioningStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand, serializeAws_json1_1ListPermissionSetProvisioningStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the status of the permission set provisioning requests for a specified SSO
 *       instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListPermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPermissionSetProvisioningStatusCommand = /** @class */ (function (_super) {
    __extends(ListPermissionSetProvisioningStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPermissionSetProvisioningStatusCommand(input) {
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
    ListPermissionSetProvisioningStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListPermissionSetProvisioningStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPermissionSetProvisioningStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPermissionSetProvisioningStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPermissionSetProvisioningStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPermissionSetProvisioningStatusCommand(input, context);
    };
    ListPermissionSetProvisioningStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand(output, context);
    };
    return ListPermissionSetProvisioningStatusCommand;
}($Command));
export { ListPermissionSetProvisioningStatusCommand };
//# sourceMappingURL=ListPermissionSetProvisioningStatusCommand.js.map