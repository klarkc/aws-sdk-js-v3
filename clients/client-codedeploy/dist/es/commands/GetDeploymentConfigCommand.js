import { __extends } from "tslib";
import { GetDeploymentConfigInput, GetDeploymentConfigOutput } from "../models/models_0";
import { deserializeAws_json1_1GetDeploymentConfigCommand, serializeAws_json1_1GetDeploymentConfigCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a deployment configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeploymentConfigCommand = /** @class */ (function (_super) {
    __extends(GetDeploymentConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeploymentConfigCommand(input) {
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
    GetDeploymentConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetDeploymentConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeploymentConfigInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeploymentConfigOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeploymentConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeploymentConfigCommand(input, context);
    };
    GetDeploymentConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeploymentConfigCommand(output, context);
    };
    return GetDeploymentConfigCommand;
}($Command));
export { GetDeploymentConfigCommand };
//# sourceMappingURL=GetDeploymentConfigCommand.js.map