import { __extends } from "tslib";
import { DeleteOrganizationConfigRuleRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteOrganizationConfigRuleCommand, serializeAws_json1_1DeleteOrganizationConfigRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization. </p>
 * 	        <p>Only a master account and a delegated administrator account can delete an organization config rule.
 * 		When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 			<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 		       <p>AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete.
 * 			You cannot update a rule while it is in this state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOrganizationConfigRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteOrganizationConfigRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOrganizationConfigRuleCommand(input) {
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
    DeleteOrganizationConfigRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteOrganizationConfigRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOrganizationConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOrganizationConfigRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOrganizationConfigRuleCommand(input, context);
    };
    DeleteOrganizationConfigRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOrganizationConfigRuleCommand(output, context);
    };
    return DeleteOrganizationConfigRuleCommand;
}($Command));
export { DeleteOrganizationConfigRuleCommand };
//# sourceMappingURL=DeleteOrganizationConfigRuleCommand.js.map