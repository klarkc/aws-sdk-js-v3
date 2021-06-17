import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { TerminateJobFlowsInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateJobFlowsCommandInput extends TerminateJobFlowsInput {
}
export interface TerminateJobFlowsCommandOutput extends __MetadataBearer {
}
/**
 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut
 *          down, any step not yet completed is canceled and the EC2 instances on which the cluster is
 *          running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri
 *          was specified when the cluster was created.</p>
 *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code>
 *          is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5
 *          minutes for the cluster to completely terminate and release allocated resources, such as
 *          Amazon EC2 instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, TerminateJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, TerminateJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new TerminateJobFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateJobFlowsCommandInput} for command's `input` shape.
 * @see {@link TerminateJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateJobFlowsCommand extends $Command<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput, EMRClientResolvedConfig> {
    readonly input: TerminateJobFlowsCommandInput;
    constructor(input: TerminateJobFlowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput>;
    private serialize;
    private deserialize;
}
