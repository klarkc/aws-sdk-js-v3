import { __extends } from "tslib";
import { EnableAWSServiceAccessRequest } from "../models/models_0";
import { deserializeAws_json1_1EnableAWSServiceAccessCommand, serializeAws_json1_1EnableAWSServiceAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the integration of an AWS service (the service that is specified by
 *                 <code>ServicePrincipal</code>) with AWS Organizations. When you enable integration, you allow
 *             the specified service to create a <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">service-linked role</a> in
 *             all the accounts in your organization. This allows the service to perform operations on
 *             your behalf in your organization and its accounts.</p>
 *         <important>
 *             <p>We recommend that you enable integration between AWS Organizations and the specified AWS
 *                 service by using the console or commands that are provided by the specified service.
 *                 Doing so ensures that the service is aware that it can create the resources that are
 *                 required for the integration. How the service creates those resources in the
 *                 organization's accounts depends on that service. For more information, see the
 *                 documentation for the other AWS service.</p>
 *         </important>
 *         <p>For more information about enabling services to integrate with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account and only
 *             if the organization has <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">enabled all
 *                 features</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, EnableAWSServiceAccessCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, EnableAWSServiceAccessCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new EnableAWSServiceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAWSServiceAccessCommandInput} for command's `input` shape.
 * @see {@link EnableAWSServiceAccessCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableAWSServiceAccessCommand = /** @class */ (function (_super) {
    __extends(EnableAWSServiceAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableAWSServiceAccessCommand(input) {
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
    EnableAWSServiceAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "EnableAWSServiceAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableAWSServiceAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableAWSServiceAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableAWSServiceAccessCommand(input, context);
    };
    EnableAWSServiceAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableAWSServiceAccessCommand(output, context);
    };
    return EnableAWSServiceAccessCommand;
}($Command));
export { EnableAWSServiceAccessCommand };
//# sourceMappingURL=EnableAWSServiceAccessCommand.js.map