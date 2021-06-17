import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutAccessPointConfigurationForObjectLambdaRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccessPointConfigurationForObjectLambdaCommandInput extends PutAccessPointConfigurationForObjectLambdaRequest {
}
export interface PutAccessPointConfigurationForObjectLambdaCommandOutput extends __MetadataBearer {
}
/**
 * <p>Replaces configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>PutAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccessPointConfigurationForObjectLambdaCommand extends $Command<PutAccessPointConfigurationForObjectLambdaCommandInput, PutAccessPointConfigurationForObjectLambdaCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: PutAccessPointConfigurationForObjectLambdaCommandInput;
    constructor(input: PutAccessPointConfigurationForObjectLambdaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccessPointConfigurationForObjectLambdaCommandInput, PutAccessPointConfigurationForObjectLambdaCommandOutput>;
    private serialize;
    private deserialize;
}
