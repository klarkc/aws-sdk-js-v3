import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteAccessPointPolicyForObjectLambdaRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccessPointPolicyForObjectLambdaCommandInput extends DeleteAccessPointPolicyForObjectLambdaRequest {
}
export interface DeleteAccessPointPolicyForObjectLambdaCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes the resource policy for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>DeleteAccessPointPolicyForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointPolicyForObjectLambda.html">GetAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointPolicyForObjectLambda.html">PutAccessPointPolicyForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessPointPolicyForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessPointPolicyForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteAccessPointPolicyForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessPointPolicyForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessPointPolicyForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccessPointPolicyForObjectLambdaCommand extends $Command<DeleteAccessPointPolicyForObjectLambdaCommandInput, DeleteAccessPointPolicyForObjectLambdaCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: DeleteAccessPointPolicyForObjectLambdaCommandInput;
    constructor(input: DeleteAccessPointPolicyForObjectLambdaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessPointPolicyForObjectLambdaCommandInput, DeleteAccessPointPolicyForObjectLambdaCommandOutput>;
    private serialize;
    private deserialize;
}
