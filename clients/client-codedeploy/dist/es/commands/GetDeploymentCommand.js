import { __extends } from "tslib";
import { GetDeploymentInput, GetDeploymentOutput } from "../models/models_0";
import { deserializeAws_json1_1GetDeploymentCommand, serializeAws_json1_1GetDeploymentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a deployment.</p>
 *         <note>
 *             <p> The <code>content</code> property of the <code>appSpecContent</code> object in
 *                 the returned revision is always null. Use <code>GetApplicationRevision</code> and
 *                 the <code>sha256</code> property of the returned <code>appSpecContent</code> object
 *                 to get the content of the deployment’s AppSpec file. </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDeploymentCommand = /** @class */ (function (_super) {
    __extends(GetDeploymentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDeploymentCommand(input) {
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
    GetDeploymentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "GetDeploymentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDeploymentInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetDeploymentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDeploymentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDeploymentCommand(input, context);
    };
    GetDeploymentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDeploymentCommand(output, context);
    };
    return GetDeploymentCommand;
}($Command));
export { GetDeploymentCommand };
//# sourceMappingURL=GetDeploymentCommand.js.map