import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutPublicAccessBlockRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutPublicAccessBlockCommandInput extends PutPublicAccessBlockRequest {
}
export interface PutPublicAccessBlockCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates or modifies the <code>PublicAccessBlock</code> configuration for an AWS account. For
 *          more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html"> Using Amazon S3 block
 *             public access</a>.</p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetPublicAccessBlock.html">GetPublicAccessBlock</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeletePublicAccessBlock.html">DeletePublicAccessBlock</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutPublicAccessBlockCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutPublicAccessBlockCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutPublicAccessBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPublicAccessBlockCommandInput} for command's `input` shape.
 * @see {@link PutPublicAccessBlockCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutPublicAccessBlockCommand extends $Command<PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: PutPublicAccessBlockCommandInput;
    constructor(input: PutPublicAccessBlockCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput>;
    private serialize;
    private deserialize;
}
