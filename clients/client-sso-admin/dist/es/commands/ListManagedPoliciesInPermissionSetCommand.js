import { __extends } from "tslib";
import { ListManagedPoliciesInPermissionSetRequest, ListManagedPoliciesInPermissionSetResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand, serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the IAM managed policy that is attached to a specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListManagedPoliciesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedPoliciesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListManagedPoliciesInPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListManagedPoliciesInPermissionSetCommand = /** @class */ (function (_super) {
    __extends(ListManagedPoliciesInPermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListManagedPoliciesInPermissionSetCommand(input) {
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
    ListManagedPoliciesInPermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListManagedPoliciesInPermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListManagedPoliciesInPermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListManagedPoliciesInPermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListManagedPoliciesInPermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand(input, context);
    };
    ListManagedPoliciesInPermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand(output, context);
    };
    return ListManagedPoliciesInPermissionSetCommand;
}($Command));
export { ListManagedPoliciesInPermissionSetCommand };
//# sourceMappingURL=ListManagedPoliciesInPermissionSetCommand.js.map