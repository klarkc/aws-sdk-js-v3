import { __extends } from "tslib";
import { ListAWSServiceAccessForOrganizationRequest, ListAWSServiceAccessForOrganizationResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand, serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the AWS services that you enabled to integrate with your
 *             organization. After a service on this list creates the resources that it requires for
 *             the integration, it can perform operations on your organization and its accounts.</p>
 *         <p>For more information about integrating other services with AWS Organizations, including the
 *             list of services that currently work with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Integrating AWS Organizations with Other
 *                 AWS Services</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListAWSServiceAccessForOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAWSServiceAccessForOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListAWSServiceAccessForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSServiceAccessForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListAWSServiceAccessForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAWSServiceAccessForOrganizationCommand = /** @class */ (function (_super) {
    __extends(ListAWSServiceAccessForOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAWSServiceAccessForOrganizationCommand(input) {
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
    ListAWSServiceAccessForOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "ListAWSServiceAccessForOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAWSServiceAccessForOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAWSServiceAccessForOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAWSServiceAccessForOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(input, context);
    };
    ListAWSServiceAccessForOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(output, context);
    };
    return ListAWSServiceAccessForOrganizationCommand;
}($Command));
export { ListAWSServiceAccessForOrganizationCommand };
//# sourceMappingURL=ListAWSServiceAccessForOrganizationCommand.js.map