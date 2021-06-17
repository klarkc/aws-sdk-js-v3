import { __extends } from "tslib";
import { DeleteLayerRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteLayerCommand, serializeAws_json1_1DeleteLayerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified layer. You must first stop and then delete all associated instances or
 *       unassign registered instances. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-delete.html">How to
 *         Delete a Layer</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DeleteLayerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DeleteLayerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DeleteLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLayerCommandInput} for command's `input` shape.
 * @see {@link DeleteLayerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLayerCommand = /** @class */ (function (_super) {
    __extends(DeleteLayerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLayerCommand(input) {
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
    DeleteLayerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DeleteLayerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLayerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLayerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLayerCommand(input, context);
    };
    DeleteLayerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLayerCommand(output, context);
    };
    return DeleteLayerCommand;
}($Command));
export { DeleteLayerCommand };
//# sourceMappingURL=DeleteLayerCommand.js.map