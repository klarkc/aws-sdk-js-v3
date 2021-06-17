import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { PutLifecycleEventHookExecutionStatusInput, PutLifecycleEventHookExecutionStatusOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutLifecycleEventHookExecutionStatusCommandInput extends PutLifecycleEventHookExecutionStatusInput {
}
export interface PutLifecycleEventHookExecutionStatusCommandOutput extends PutLifecycleEventHookExecutionStatusOutput, __MetadataBearer {
}
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
export declare class PutLifecycleEventHookExecutionStatusCommand extends $Command<PutLifecycleEventHookExecutionStatusCommandInput, PutLifecycleEventHookExecutionStatusCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: PutLifecycleEventHookExecutionStatusCommandInput;
    constructor(input: PutLifecycleEventHookExecutionStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLifecycleEventHookExecutionStatusCommandInput, PutLifecycleEventHookExecutionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
