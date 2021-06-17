import { __extends } from "tslib";
import { CreateRoleRequest, CreateRoleResponse } from "../models/models_0";
import { deserializeAws_queryCreateRoleCommand, serializeAws_queryCreateRoleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new role for your AWS account. For more information about roles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM
 *                 roles</a>. For information about quotas for role names and the number of roles
 *             you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoleCommandInput} for command's `input` shape.
 * @see {@link CreateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRoleCommand = /** @class */ (function (_super) {
    __extends(CreateRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRoleCommand(input) {
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
    CreateRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRoleResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateRoleCommand(input, context);
    };
    CreateRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateRoleCommand(output, context);
    };
    return CreateRoleCommand;
}($Command));
export { CreateRoleCommand };
//# sourceMappingURL=CreateRoleCommand.js.map