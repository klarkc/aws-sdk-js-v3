import { __extends } from "tslib";
import { CreateServiceLinkedRoleRequest, CreateServiceLinkedRoleResponse } from "../models/models_0";
import { deserializeAws_queryCreateServiceLinkedRoleCommand, serializeAws_queryCreateServiceLinkedRoleCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an IAM role that is linked to a specific AWS service. The service controls
 *             the attached policies and when the role can be deleted. This helps ensure that the
 *             service is not broken by an unexpectedly changed or deleted role, which could put your
 *             AWS resources into an unknown state. Allowing the service to control the role helps
 *             improve service stability and proper cleanup when a service and its role are no longer
 *             needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked
 *                 roles</a> in the <i>IAM User Guide</i>. </p>
 *         <p>To attach a policy to this service-linked role, you must make the request using the
 *             AWS service that depends on this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link CreateServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateServiceLinkedRoleCommand = /** @class */ (function (_super) {
    __extends(CreateServiceLinkedRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateServiceLinkedRoleCommand(input) {
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
    CreateServiceLinkedRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateServiceLinkedRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateServiceLinkedRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateServiceLinkedRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateServiceLinkedRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateServiceLinkedRoleCommand(input, context);
    };
    CreateServiceLinkedRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateServiceLinkedRoleCommand(output, context);
    };
    return CreateServiceLinkedRoleCommand;
}($Command));
export { CreateServiceLinkedRoleCommand };
//# sourceMappingURL=CreateServiceLinkedRoleCommand.js.map