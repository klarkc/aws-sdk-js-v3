import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateAccessPointForObjectLambdaRequest, CreateAccessPointForObjectLambdaResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAccessPointForObjectLambdaCommandInput extends CreateAccessPointForObjectLambdaRequest {
}
export interface CreateAccessPointForObjectLambdaCommandOutput extends CreateAccessPointForObjectLambdaResult, __MetadataBearer {
}
/**
 * <p>Creates an Object Lambda Access Point. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>CreateAccessPointForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessPointForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessPointForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new CreateAccessPointForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPointForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAccessPointForObjectLambdaCommand extends $Command<CreateAccessPointForObjectLambdaCommandInput, CreateAccessPointForObjectLambdaCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: CreateAccessPointForObjectLambdaCommandInput;
    constructor(input: CreateAccessPointForObjectLambdaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccessPointForObjectLambdaCommandInput, CreateAccessPointForObjectLambdaCommandOutput>;
    private serialize;
    private deserialize;
}
