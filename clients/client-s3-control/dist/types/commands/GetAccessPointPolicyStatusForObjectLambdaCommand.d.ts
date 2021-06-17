import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicyStatusForObjectLambdaRequest, GetAccessPointPolicyStatusForObjectLambdaResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAccessPointPolicyStatusForObjectLambdaCommandInput extends GetAccessPointPolicyStatusForObjectLambdaRequest {
}
export interface GetAccessPointPolicyStatusForObjectLambdaCommandOutput extends GetAccessPointPolicyStatusForObjectLambdaResult, __MetadataBearer {
}
/**
 * <p>Returns the status of the resource policy associated with an Object Lambda Access Point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyStatusForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyStatusForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetAccessPointPolicyStatusForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAccessPointPolicyStatusForObjectLambdaCommand extends $Command<GetAccessPointPolicyStatusForObjectLambdaCommandInput, GetAccessPointPolicyStatusForObjectLambdaCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetAccessPointPolicyStatusForObjectLambdaCommandInput;
    constructor(input: GetAccessPointPolicyStatusForObjectLambdaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessPointPolicyStatusForObjectLambdaCommandInput, GetAccessPointPolicyStatusForObjectLambdaCommandOutput>;
    private serialize;
    private deserialize;
}
