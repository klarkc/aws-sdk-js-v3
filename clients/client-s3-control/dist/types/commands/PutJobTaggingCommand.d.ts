import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutJobTaggingRequest, PutJobTaggingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutJobTaggingCommandInput extends PutJobTaggingRequest {
}
export interface PutJobTaggingCommandOutput extends PutJobTaggingResult, __MetadataBearer {
}
/**
 * <p>Sets the supplied tag-set on an S3 Batch Operations job.</p>
 *          <p>A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending
 *          a PUT request against the tagging subresource that is associated with the job. To modify
 *          the existing tag set, you can either replace the existing tag set entirely, or make changes
 *          within the existing tag set by retrieving the existing tag set using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>, modify that tag set, and use this action to replace the
 *          tag set with the one you modified. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling access and
 *             labeling jobs using tags</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <p></p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the
 *                   Batch Operations job. If you use this method, you are charged for a Tier 1 Request
 *                   (PUT). For more information, see <a href="http://aws.amazon.com/s3/pricing/">Amazon S3
 *                      pricing</a>.</p>
 *                </li>
 *                <li>
 *                   <p>For deleting existing tags for your Batch Operations job, a <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
 *                   request is preferred because it achieves the same result without incurring
 *                   charges.</p>
 *                </li>
 *                <li>
 *                   <p>A few things to consider about using tags:</p>
 *                   <ul>
 *                      <li>
 *                         <p>Amazon S3 limits the maximum number of tags to 50 tags per job.</p>
 *                      </li>
 *                      <li>
 *                         <p>You can associate up to 50 tags with a job as long as they have unique tag keys.</p>
 *                      </li>
 *                      <li>
 *                         <p>A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length.</p>
 *                      </li>
 *                      <li>
 *                         <p>The key and values are case sensitive.</p>
 *                      </li>
 *                      <li>
 *                         <p>For tagging-related restrictions related to characters and encodings, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and
 *                            Cost Management User Guide</i>.</p>
 *                      </li>
 *                   </ul>
 *                </li>
 *             </ul>
 *          </note>
 *          <p></p>
 *          <p>To use this action, you must have permission to perform the <code>s3:PutJobTagging</code> action.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreatJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html">DeleteJobTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutJobTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutJobTaggingCommandInput} for command's `input` shape.
 * @see {@link PutJobTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutJobTaggingCommand extends $Command<PutJobTaggingCommandInput, PutJobTaggingCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: PutJobTaggingCommandInput;
    constructor(input: PutJobTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutJobTaggingCommandInput, PutJobTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
