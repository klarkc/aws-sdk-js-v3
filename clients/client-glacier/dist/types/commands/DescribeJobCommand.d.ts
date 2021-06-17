import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DescribeJobInput, GlacierJobDescription } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeJobCommandInput extends DescribeJobInput {
}
export interface DescribeJobCommandOutput extends GlacierJobDescription, __MetadataBearer {
}
/**
 * <p>This operation returns information about a job you previously initiated, including
 *          the job initiation date, the user who initiated the job, the job status code/message and
 *          the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information
 *          about initiating a job, see <a>InitiateJob</a>. </p>
 *
 *          <note>
 *             <p>This operation enables you to check the status of your job. However, it is
 *             strongly recommended that you set up an Amazon SNS topic and specify it in your initiate
 *             job request so that Glacier can notify the topic after it completes the
 *             job.</p>
 *          </note>
 *
 *          <p>A job ID will not expire for at least 24 hours after Glacier completes the
 *          job.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *
 *          <p> For more information about using this operation,
 *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a>
 *          in the <i>Amazon Glacier Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DescribeJobCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DescribeJobCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeJobCommand extends $Command<DescribeJobCommandInput, DescribeJobCommandOutput, GlacierClientResolvedConfig> {
    readonly input: DescribeJobCommandInput;
    constructor(input: DescribeJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlacierClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeJobCommandInput, DescribeJobCommandOutput>;
    private serialize;
    private deserialize;
}
