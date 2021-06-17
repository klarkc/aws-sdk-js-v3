import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListAccessPointsForObjectLambdaRequest, ListAccessPointsForObjectLambdaResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccessPointsForObjectLambdaCommandInput extends ListAccessPointsForObjectLambdaRequest {
}
export interface ListAccessPointsForObjectLambdaCommandOutput extends ListAccessPointsForObjectLambdaResult, __MetadataBearer {
}
/**
 * <p>Returns a list of the access points associated with the Object Lambda Access Point. You
 *          can retrieve up to 1000 access points per call. If there are more than 1,000
 *          access points (or the number specified in <code>maxResults</code>, whichever is less), the
 *          response will include a continuation token that you can use to list the additional access points.</p>
 *          <p>The following actions are related to <code>ListAccessPointsForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPointForObjectLambda.html">CreateAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
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
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessPointsForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessPointsForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new ListAccessPointsForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessPointsForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccessPointsForObjectLambdaCommand extends $Command<ListAccessPointsForObjectLambdaCommandInput, ListAccessPointsForObjectLambdaCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: ListAccessPointsForObjectLambdaCommandInput;
    constructor(input: ListAccessPointsForObjectLambdaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccessPointsForObjectLambdaCommandInput, ListAccessPointsForObjectLambdaCommandOutput>;
    private serialize;
    private deserialize;
}
