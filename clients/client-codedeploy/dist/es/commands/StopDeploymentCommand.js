import { __extends } from "tslib";
import { StopDeploymentInput, StopDeploymentOutput } from "../models/models_0";
import { deserializeAws_json1_1StopDeploymentCommand, serializeAws_json1_1StopDeploymentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Attempts to stop an ongoing deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, StopDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, StopDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new StopDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDeploymentCommand = /** @class */ (function (_super) {
    __extends(StopDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopDeploymentCommand(input) {
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
    StopDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "StopDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopDeploymentInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopDeploymentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopDeploymentCommand(input, context);
    };
    StopDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopDeploymentCommand(output, context);
    };
    return StopDeploymentCommand;
}($Command));
export { StopDeploymentCommand };
//# sourceMappingURL=StopDeploymentCommand.js.map