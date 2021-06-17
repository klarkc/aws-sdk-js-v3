import { __extends } from "tslib";
import { ListAccountsForProvisionedPermissionSetRequest, ListAccountsForProvisionedPermissionSetResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand, serializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the AWS accounts where the specified permission set is provisioned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountsForProvisionedPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsForProvisionedPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListAccountsForProvisionedPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAccountsForProvisionedPermissionSetCommand = /** @class */ (function (_super) {
    __extends(ListAccountsForProvisionedPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAccountsForProvisionedPermissionSetCommand(input) {
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
    ListAccountsForProvisionedPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListAccountsForProvisionedPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAccountsForProvisionedPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAccountsForProvisionedPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAccountsForProvisionedPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand(input, context);
    };
    ListAccountsForProvisionedPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand(output, context);
    };
    return ListAccountsForProvisionedPermissionSetCommand;
}($Command));
export { ListAccountsForProvisionedPermissionSetCommand };
//# sourceMappingURL=ListAccountsForProvisionedPermissionSetCommand.js.map