import { __extends } from "tslib";
import { PutLifecycleEventHookExecutionStatusInput, PutLifecycleEventHookExecutionStatusOutput, } from "../models/models_0";
import { deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand, serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Sets the result of a Lambda validation function. The function validates lifecycle
 *             hooks during a deployment that uses the AWS Lambda or Amazon ECS compute platform. For
 *             AWS Lambda deployments, the available lifecycle hooks are
 *                 <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS
 *             deployments, the available lifecycle hooks are <code>BeforeInstall</code>,
 *                 <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>,
 *                 <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda
 *             validation functions return <code>Succeeded</code> or <code>Failed</code>. For more
 *             information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an AWS Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, PutLifecycleEventHookExecutionStatusCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new PutLifecycleEventHookExecutionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecycleEventHookExecutionStatusCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleEventHookExecutionStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLifecycleEventHookExecutionStatusCommand = /** @class */ (function (_super) {
    __extends(PutLifecycleEventHookExecutionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutLifecycleEventHookExecutionStatusCommand(input) {
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
    PutLifecycleEventHookExecutionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "PutLifecycleEventHookExecutionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutLifecycleEventHookExecutionStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutLifecycleEventHookExecutionStatusOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutLifecycleEventHookExecutionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(input, context);
    };
    PutLifecycleEventHookExecutionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(output, context);
    };
    return PutLifecycleEventHookExecutionStatusCommand;
}($Command));
export { PutLifecycleEventHookExecutionStatusCommand };
//# sourceMappingURL=PutLifecycleEventHookExecutionStatusCommand.js.map