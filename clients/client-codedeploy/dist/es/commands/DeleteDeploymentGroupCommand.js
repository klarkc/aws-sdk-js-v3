import { __extends } from "tslib";
import { DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteDeploymentGroupCommand, serializeAws_json1_1DeleteDeploymentGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDeploymentGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteDeploymentGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDeploymentGroupCommand(input) {
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
    DeleteDeploymentGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "DeleteDeploymentGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDeploymentGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDeploymentGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDeploymentGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDeploymentGroupCommand(input, context);
    };
    DeleteDeploymentGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDeploymentGroupCommand(output, context);
    };
    return DeleteDeploymentGroupCommand;
}($Command));
export { DeleteDeploymentGroupCommand };
//# sourceMappingURL=DeleteDeploymentGroupCommand.js.map