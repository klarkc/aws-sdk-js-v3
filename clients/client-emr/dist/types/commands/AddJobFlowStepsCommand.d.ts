import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddJobFlowStepsInput, AddJobFlowStepsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddJobFlowStepsCommandInput extends AddJobFlowStepsInput {
}
export interface AddJobFlowStepsCommandOutput extends AddJobFlowStepsOutput, __MetadataBearer {
}
/**
 * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed
 *          in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using SSH to connect to the master node and submitting queries
 *          directly to the software running on the master node, such as Hive and Hadoop. For more
 *          information on how to do this, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/AddMoreThan256Steps.html">Add More than 256 Steps to a
 *             Cluster</a> in the <i>Amazon EMR Management Guide</i>.</p>
 *          <p>A step specifies the location of a JAR file stored either on the master node of the
 *          cluster or in Amazon S3. Each step is performed by the main function of the main class of
 *          the JAR file. The main class can be specified either in the manifest of the JAR or by using
 *          the MainFunction parameter of the step.</p>
 *          <p>Amazon EMR executes each step in the order listed. For a step to be considered complete,
 *          the main function must exit with a zero exit code and all Hadoop jobs started while the
 *          step was running must have completed and run successfully.</p>
 *          <p>You can only add steps to a cluster that is in one of the following states: STARTING,
 *          BOOTSTRAPPING, RUNNING, or WAITING.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddJobFlowStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddJobFlowStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddJobFlowStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddJobFlowStepsCommandInput} for command's `input` shape.
 * @see {@link AddJobFlowStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddJobFlowStepsCommand extends $Command<AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput, EMRClientResolvedConfig> {
    readonly input: AddJobFlowStepsCommandInput;
    constructor(input: AddJobFlowStepsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput>;
    private serialize;
    private deserialize;
}
