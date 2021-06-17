import { __extends } from "tslib";
import { UpdateDeploymentGroupInput, UpdateDeploymentGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateDeploymentGroupCommand, serializeAws_json1_1UpdateDeploymentGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes information about a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, UpdateDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, UpdateDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new UpdateDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDeploymentGroupCommand = /** @class */ (function (_super) {
    __extends(UpdateDeploymentGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDeploymentGroupCommand(input) {
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
    UpdateDeploymentGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "UpdateDeploymentGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDeploymentGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDeploymentGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDeploymentGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDeploymentGroupCommand(input, context);
    };
    UpdateDeploymentGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDeploymentGroupCommand(output, context);
    };
    return UpdateDeploymentGroupCommand;
}($Command));
export { UpdateDeploymentGroupCommand };
//# sourceMappingURL=UpdateDeploymentGroupCommand.js.map