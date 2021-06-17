import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { DescribeSigningJobRequest, DescribeSigningJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSigningJobCommandInput extends DescribeSigningJobRequest {
}
export interface DescribeSigningJobCommandOutput extends DescribeSigningJobResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a specific code signing job. You specify the job by using
 * 			the <code>jobId</code> value that is returned by the <a>StartSigningJob</a>
 * 			operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, DescribeSigningJobCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, DescribeSigningJobCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new DescribeSigningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSigningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSigningJobCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSigningJobCommand extends $Command<DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput, SignerClientResolvedConfig> {
    readonly input: DescribeSigningJobCommandInput;
    constructor(input: DescribeSigningJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput>;
    private serialize;
    private deserialize;
}
