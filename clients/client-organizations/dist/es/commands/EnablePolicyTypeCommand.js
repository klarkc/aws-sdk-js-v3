import { __extends } from "tslib";
import { EnablePolicyTypeRequest, EnablePolicyTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1EnablePolicyTypeCommand, serializeAws_json1_1EnablePolicyTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables a policy type in a root. After you enable a policy type in a root, you can
 *             attach policies of that type to the root, any organizational unit (OU), or account in
 *             that root. You can undo this by using the <a>DisablePolicyType</a>
 *             operation.</p>
 *         <p>This is an asynchronous request that AWS performs in the background. AWS
 *             recommends that you first use <a>ListRoots</a> to see the status of policy
 *             types for a specified root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p>You can enable a policy type in a root only if that policy type is available in the
 *             organization. To view the status of available policy types in the organization, use
 *                 <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnablePolicyTypeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link EnablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnablePolicyTypeCommand = /** @class */ (function (_super) {
    __extends(EnablePolicyTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnablePolicyTypeCommand(input) {
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
    EnablePolicyTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "EnablePolicyTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnablePolicyTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnablePolicyTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnablePolicyTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnablePolicyTypeCommand(input, context);
    };
    EnablePolicyTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnablePolicyTypeCommand(output, context);
    };
    return EnablePolicyTypeCommand;
}($Command));
export { EnablePolicyTypeCommand };
//# sourceMappingURL=EnablePolicyTypeCommand.js.map