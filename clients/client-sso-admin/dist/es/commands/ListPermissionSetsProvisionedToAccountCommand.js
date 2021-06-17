import { __extends } from "tslib";
import { ListPermissionSetsProvisionedToAccountRequest, ListPermissionSetsProvisionedToAccountResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand, serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the permission sets that are provisioned to a specified AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListPermissionSetsProvisionedToAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionSetsProvisionedToAccountCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsProvisionedToAccountCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPermissionSetsProvisionedToAccountCommand = /** @class */ (function (_super) {
    __extends(ListPermissionSetsProvisionedToAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPermissionSetsProvisionedToAccountCommand(input) {
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
    ListPermissionSetsProvisionedToAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "ListPermissionSetsProvisionedToAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPermissionSetsProvisionedToAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPermissionSetsProvisionedToAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPermissionSetsProvisionedToAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand(input, context);
    };
    ListPermissionSetsProvisionedToAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand(output, context);
    };
    return ListPermissionSetsProvisionedToAccountCommand;
}($Command));
export { ListPermissionSetsProvisionedToAccountCommand };
//# sourceMappingURL=ListPermissionSetsProvisionedToAccountCommand.js.map