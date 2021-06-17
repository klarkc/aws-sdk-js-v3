import { __extends } from "tslib";
import { RegisterDelegatedAdministratorRequest } from "../models/models_0";
import { deserializeAws_json1_1RegisterDelegatedAdministratorCommand, serializeAws_json1_1RegisterDelegatedAdministratorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the specified member account to administer the Organizations features of the specified
 *             AWS service. It grants read-only access to AWS Organizations service data. The account still
 *             requires IAM permissions to access and administer the AWS service.</p>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, RegisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, RegisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new RegisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link RegisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterDelegatedAdministratorCommand = /** @class */ (function (_super) {
    __extends(RegisterDelegatedAdministratorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterDelegatedAdministratorCommand(input) {
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
    RegisterDelegatedAdministratorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OrganizationsClient";
        var commandName = "RegisterDelegatedAdministratorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterDelegatedAdministratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterDelegatedAdministratorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterDelegatedAdministratorCommand(input, context);
    };
    RegisterDelegatedAdministratorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterDelegatedAdministratorCommand(output, context);
    };
    return RegisterDelegatedAdministratorCommand;
}($Command));
export { RegisterDelegatedAdministratorCommand };
//# sourceMappingURL=RegisterDelegatedAdministratorCommand.js.map