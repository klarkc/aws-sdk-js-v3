import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointConfigurationForObjectLambdaRequest, GetAccessPointConfigurationForObjectLambdaResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccessPointConfigurationForObjectLambdaCommandInput extends GetAccessPointConfigurationForObjectLambdaRequest {
}
export interface GetAccessPointConfigurationForObjectLambdaCommandOutput extends GetAccessPointConfigurationForObjectLambdaResult, __MetadataBearer {
}
/**
 * <p>Returns configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccessPointConfigurationForObjectLambdaCommand extends $Command<GetAccessPointConfigurationForObjectLambdaCommandInput, GetAccessPointConfigurationForObjectLambdaCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetAccessPointConfigurationForObjectLambdaCommandInput;
    constructor(input: GetAccessPointConfigurationForObjectLambdaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessPointConfigurationForObjectLambdaCommandInput, GetAccessPointConfigurationForObjectLambdaCommandOutput>;
    private serialize;
    private deserialize;
}
