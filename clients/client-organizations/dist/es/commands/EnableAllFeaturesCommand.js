import { __extends } from "tslib";
import { EnableAllFeaturesRequest, EnableAllFeaturesResponse } from "../models/models_0";
import { deserializeAws_json1_1EnableAllFeaturesCommand, serializeAws_json1_1EnableAllFeaturesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables all features in an organization. This enables the use of organization policies
 *             that can restrict the services and actions that can be called in each account. Until you
 *             enable all features, you have access only to consolidated billing, and you can't use any
 *             of the advanced account administration features that AWS Organizations supports. For more
 *             information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <important>
 *             <p>This operation is required only for organizations that were created explicitly
 *                 with only the consolidated billing features enabled. Calling this operation sends a
 *                 handshake to every invited account in the organization. The feature set change can
 *                 be finalized and the additional features enabled only after all administrators in
 *                 the invited accounts approve the change by accepting the handshake.</p>
 *         </important>
 *         <p>After you enable all features, you can separately enable or disable individual policy
 *             types in a root using <a>EnablePolicyType</a> and <a>DisablePolicyType</a>. To see the status of policy types in a root, use
 *                 <a>ListRoots</a>.</p>
 *         <p>After all invited member accounts accept the handshake, you finalize the feature set
 *             change by accepting the handshake that contains <code>"Action":
 *                 "ENABLE_ALL_FEATURES"</code>. This completes the change.</p>
 *         <p>After you enable all features in your organization, the management account in the
 *             organization can apply policies on all member accounts. These policies can restrict what
 *             users and even administrators in those accounts can do. The management account can apply
 *             policies that prevent accounts from leaving the organization. Ensure that your account
 *             administrators are aware of this.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnableAllFeaturesCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnableAllFeaturesCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnableAllFeaturesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAllFeaturesCommandInput} for command's `input` shape.
 * @see {@link EnableAllFeaturesCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableAllFeaturesCommand = /** @class */ (function (_super) {
    __extends(EnableAllFeaturesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableAllFeaturesCommand(input) {
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
    EnableAllFeaturesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "EnableAllFeaturesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableAllFeaturesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: EnableAllFeaturesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableAllFeaturesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableAllFeaturesCommand(input, context);
    };
    EnableAllFeaturesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableAllFeaturesCommand(output, context);
    };
    return EnableAllFeaturesCommand;
}($Command));
export { EnableAllFeaturesCommand };
//# sourceMappingURL=EnableAllFeaturesCommand.js.map