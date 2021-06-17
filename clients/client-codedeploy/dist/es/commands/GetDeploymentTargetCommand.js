import { __extends } from "tslib";
import { GetDeploymentTargetInput, GetDeploymentTargetOutput } from "../models/models_0";
import { deserializeAws_json1_1GetDeploymentTargetCommand, serializeAws_json1_1GetDeploymentTargetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns information about a deployment target. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentTargetCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentTargetCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetDeploymentTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentTargetCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentTargetCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeploymentTargetCommand = /** @class */ (function (_super) {
    __extends(GetDeploymentTargetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeploymentTargetCommand(input) {
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
    GetDeploymentTargetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetDeploymentTargetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeploymentTargetInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeploymentTargetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeploymentTargetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeploymentTargetCommand(input, context);
    };
    GetDeploymentTargetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeploymentTargetCommand(output, context);
    };
    return GetDeploymentTargetCommand;
}($Command));
export { GetDeploymentTargetCommand };
//# sourceMappingURL=GetDeploymentTargetCommand.js.map