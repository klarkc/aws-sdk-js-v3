import { __extends } from "tslib";
import { DeregisterDelegatedAdministratorRequest } from "../models/models_0";
import { deserializeAws_json1_1DeregisterDelegatedAdministratorCommand, serializeAws_json1_1DeregisterDelegatedAdministratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified member AWS account as a delegated administrator for the
 *             specified AWS service.</p>
 *         <important>
 *             <p>Deregistering a delegated administrator can have unintended impacts on the
 *                 functionality of the enabled AWS service. See the documentation for the enabled
 *                 service before you deregister a delegated administrator so that you understand any
 *                 potential impacts.</p>
 *         </important>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeregisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeregisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeregisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link DeregisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterDelegatedAdministratorCommand = /** @class */ (function (_super) {
    __extends(DeregisterDelegatedAdministratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterDelegatedAdministratorCommand(input) {
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
    DeregisterDelegatedAdministratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "DeregisterDelegatedAdministratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterDelegatedAdministratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterDelegatedAdministratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterDelegatedAdministratorCommand(input, context);
    };
    DeregisterDelegatedAdministratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterDelegatedAdministratorCommand(output, context);
    };
    return DeregisterDelegatedAdministratorCommand;
}($Command));
export { DeregisterDelegatedAdministratorCommand };
//# sourceMappingURL=DeregisterDelegatedAdministratorCommand.js.map