import { __extends } from "tslib";
import { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/models_2";
import { deserializeAws_json1_1UpdateManagedInstanceRoleCommand, serializeAws_json1_1UpdateManagedInstanceRoleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the Amazon Identity and Access Management (IAM) role that is assigned to the
 *    on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid
 *    instances during the activation process. For more information, see <a>CreateActivation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateManagedInstanceRoleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateManagedInstanceRoleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateManagedInstanceRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateManagedInstanceRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedInstanceRoleCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateManagedInstanceRoleCommand = /** @class */ (function (_super) {
    __extends(UpdateManagedInstanceRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateManagedInstanceRoleCommand(input) {
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
    UpdateManagedInstanceRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateManagedInstanceRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateManagedInstanceRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateManagedInstanceRoleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateManagedInstanceRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateManagedInstanceRoleCommand(input, context);
    };
    UpdateManagedInstanceRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateManagedInstanceRoleCommand(output, context);
    };
    return UpdateManagedInstanceRoleCommand;
}($Command));
export { UpdateManagedInstanceRoleCommand };
//# sourceMappingURL=UpdateManagedInstanceRoleCommand.js.map