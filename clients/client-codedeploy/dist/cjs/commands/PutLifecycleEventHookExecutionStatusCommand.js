"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutLifecycleEventHookExecutionStatusCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class PutLifecycleEventHookExecutionStatusCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CodeDeployClient";
        const commandName = "PutLifecycleEventHookExecutionStatusCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutLifecycleEventHookExecutionStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutLifecycleEventHookExecutionStatusOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutLifecycleEventHookExecutionStatusCommand(output, context);
    }
}
exports.PutLifecycleEventHookExecutionStatusCommand = PutLifecycleEventHookExecutionStatusCommand;
//# sourceMappingURL=PutLifecycleEventHookExecutionStatusCommand.js.map