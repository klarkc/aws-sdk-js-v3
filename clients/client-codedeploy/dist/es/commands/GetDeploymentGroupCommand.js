import { __extends } from "tslib";
import { GetDeploymentGroupInput, GetDeploymentGroupOutput } from "../models/models_0";
import { deserializeAws_json1_1GetDeploymentGroupCommand, serializeAws_json1_1GetDeploymentGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a deployment group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeploymentGroupCommand = /** @class */ (function (_super) {
    __extends(GetDeploymentGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeploymentGroupCommand(input) {
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
    GetDeploymentGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetDeploymentGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeploymentGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeploymentGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeploymentGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeploymentGroupCommand(input, context);
    };
    GetDeploymentGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeploymentGroupCommand(output, context);
    };
    return GetDeploymentGroupCommand;
}($Command));
export { GetDeploymentGroupCommand };
//# sourceMappingURL=GetDeploymentGroupCommand.js.map