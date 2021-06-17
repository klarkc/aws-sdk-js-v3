import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetDeploymentTargetsCommandInput extends BatchGetDeploymentTargetsInput {
}
export interface BatchGetDeploymentTargetsCommandOutput extends BatchGetDeploymentTargetsOutput, __MetadataBearer {
}
/**
 * <p> Returns an array of one or more targets associated with a deployment. This method
 *             works with all compute types and should be used instead of the deprecated
 *                 <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be
 *             returned is 25.</p>
 *         <p> The type of targets returned depends on the deployment's compute platform or
 *             deployment method: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>EC2/On-premises</b>: Information about EC2 instance
 *                     targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>AWS Lambda</b>: Information about Lambda functions
 *                     targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>Amazon ECS</b>: Information about Amazon ECS
 *                     service targets. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>CloudFormation</b>: Information about targets of
 *                     blue/green deployments initiated by a CloudFormation stack update.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentTargetsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new BatchGetDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetDeploymentTargetsCommand extends $Command<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetDeploymentTargetsCommandInput;
    constructor(input: BatchGetDeploymentTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
