import { __extends } from "tslib";
import { DisableAWSServiceAccessRequest } from "../models/models_0";
import { deserializeAws_json1_1DisableAWSServiceAccessCommand, serializeAws_json1_1DisableAWSServiceAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the integration of an AWS service (the service that is specified by
 *                 <code>ServicePrincipal</code>) with AWS Organizations. When you disable integration, the
 *             specified service no longer can create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
 *                 <i>new</i> accounts in your organization. This means the service can't
 *             perform operations on your behalf on any new accounts in your organization. The service
 *             can still perform operations in older accounts until the service completes its clean-up
 *             from AWS Organizations.</p>
 *         <important>
 *             <p>We <b>
 *                   <i>strongly recommend</i>
 *                </b> that
 *                 you don't use this command to disable integration between AWS Organizations and the specified
 *                 AWS service. Instead, use the console or commands that are provided by the
 *                 specified service. This lets the trusted service perform any required initialization
 *                 when enabling trusted access, such as creating any required resources and any
 *                 required clean up of resources when disabling trusted access. </p>
 *             <p>For information about how to disable trusted service access to your organization
 *                 using the trusted service, see the <b>Learn more</b> link
 *                 under the <b>Supports Trusted Access</b> column at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS services that you can use with AWS Organizations</a>. on this page.</p>
 *             <p>If you disable access by using this command, it causes the following actions to
 *                 occur:</p>
 *             <ul>
 *                <li>
 *                     <p>The service can no longer create a service-linked role in the accounts in
 *                         your organization. This means that the service can't perform operations on
 *                         your behalf on any new accounts in your organization. The service can still
 *                         perform operations in older accounts until the service completes its
 *                         clean-up from AWS Organizations. </p>
 *                 </li>
 *                <li>
 *                     <p>The service can no longer perform tasks in the member accounts in the
 *                         organization, unless those operations are explicitly permitted by the IAM
 *                         policies that are attached to your roles. This includes any data aggregation
 *                         from the member accounts to the management account, or to a delegated
 *                         administrator account, where relevant.</p>
 *                 </li>
 *                <li>
 *                     <p>Some services detect this and clean up any remaining data or resources
 *                         related to the integration, while other services stop accessing the
 *                         organization but leave any historical data and configuration in place to
 *                         support a possible re-enabling of the integration.</p>
 *                 </li>
 *             </ul>
 *             <p>Using the other service's console or commands to disable the integration ensures
 *                 that the other service is aware that it can clean up any resources that are required
 *                 only for the integration. How the service cleans up its resources in the
 *                 organization's accounts depends on that service. For more information, see the
 *                 documentation for the other AWS service. </p>
 *         </important>
 *         <p>After you perform the <code>DisableAWSServiceAccess</code> operation, the specified
 *             service can no longer perform operations in your organization's accounts </p>
 *         <p>For more information about integrating other services with AWS Organizations, including the
 *             list of services that work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DisableAWSServiceAccessCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DisableAWSServiceAccessCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DisableAWSServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAWSServiceAccessCommandInput} for command's `input` shape.
 * @see {@link DisableAWSServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableAWSServiceAccessCommand = /** @class */ (function (_super) {
    __extends(DisableAWSServiceAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableAWSServiceAccessCommand(input) {
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
    DisableAWSServiceAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DisableAWSServiceAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableAWSServiceAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableAWSServiceAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableAWSServiceAccessCommand(input, context);
    };
    DisableAWSServiceAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableAWSServiceAccessCommand(output, context);
    };
    return DisableAWSServiceAccessCommand;
}($Command));
export { DisableAWSServiceAccessCommand };
//# sourceMappingURL=DisableAWSServiceAccessCommand.js.map