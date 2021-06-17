import { __extends } from "tslib";
import { DisablePolicyTypeRequest, DisablePolicyTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1DisablePolicyTypeCommand, serializeAws_json1_1DisablePolicyTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables an organizational policy type in a root. A policy of a certain type can be
 *             attached to entities in a root only if that type is enabled in the root. After you
 *             perform this operation, you no longer can attach policies of the specified type to that
 *             root or to any organizational unit (OU) or account in that root. You can undo this by
 *             using the <a>EnablePolicyType</a> operation.</p>
 *         <p>This is an asynchronous request that AWS performs in the background. If you disable
 *             a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. AWS recommends that you
 *             first use <a>ListRoots</a> to see the status of policy types for a specified
 *             root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DisablePolicyTypeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DisablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DisablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link DisablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisablePolicyTypeCommand = /** @class */ (function (_super) {
    __extends(DisablePolicyTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisablePolicyTypeCommand(input) {
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
    DisablePolicyTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DisablePolicyTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisablePolicyTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisablePolicyTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisablePolicyTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisablePolicyTypeCommand(input, context);
    };
    DisablePolicyTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisablePolicyTypeCommand(output, context);
    };
    return DisablePolicyTypeCommand;
}($Command));
export { DisablePolicyTypeCommand };
//# sourceMappingURL=DisablePolicyTypeCommand.js.map