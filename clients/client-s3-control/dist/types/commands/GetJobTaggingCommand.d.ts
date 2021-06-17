import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetJobTaggingRequest, GetJobTaggingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetJobTaggingCommandInput extends GetJobTaggingRequest {
}
export interface GetJobTaggingCommandOutput extends GetJobTaggingResult, __MetadataBearer {
}
/**
 * <p>Returns the tags on an S3 Batch Operations job. To use this operation, you must have
 *          permission to perform the <code>s3:GetJobTagging</code> action. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
 *             access and labeling jobs using tags</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
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
 * import { S3ControlClient, GetJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetJobTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobTaggingCommandInput} for command's `input` shape.
 * @see {@link GetJobTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetJobTaggingCommand extends $Command<GetJobTaggingCommandInput, GetJobTaggingCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetJobTaggingCommandInput;
    constructor(input: GetJobTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobTaggingCommandInput, GetJobTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
