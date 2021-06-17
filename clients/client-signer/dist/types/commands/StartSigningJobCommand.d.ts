import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { StartSigningJobRequest, StartSigningJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartSigningJobCommandInput extends StartSigningJobRequest {
}
export interface StartSigningJobCommandOutput extends StartSigningJobResponse, __MetadataBearer {
}
/**
 * <p>Initiates a signing job to be performed on the code provided. Signing jobs are
 * 			viewable by the <code>ListSigningJobs</code> operation for two years after they are
 * 			performed. Note the following requirements: </p>
 * 		       <ul>
 *             <li>
 * 				           <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the
 * 						<i>Amazon S3 Getting Started Guide</i>. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Your S3 source bucket must be version enabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must create an S3 destination bucket. Code signing uses your S3 destination
 * 					bucket to write your signed code.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You specify the name of the source and destination buckets when calling the
 * 						<code>StartSigningJob</code> operation.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You must also specify a request token that identifies your request to
 * 					code signing.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call
 * 			<code>StartSigningJob</code>.</p>
 * 		       <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, StartSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, StartSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new StartSigningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSigningJobCommandInput} for command's `input` shape.
 * @see {@link StartSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartSigningJobCommand extends $Command<StartSigningJobCommandInput, StartSigningJobCommandOutput, SignerClientResolvedConfig> {
    readonly input: StartSigningJobCommandInput;
    constructor(input: StartSigningJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSigningJobCommandInput, StartSigningJobCommandOutput>;
    private serialize;
    private deserialize;
}
