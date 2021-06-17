import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DescribeRxNormInferenceJobRequest, DescribeRxNormInferenceJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRxNormInferenceJobCommandInput extends DescribeRxNormInferenceJobRequest {
}
export interface DescribeRxNormInferenceJobCommandOutput extends DescribeRxNormInferenceJobResponse, __MetadataBearer {
}
/**
 * <p>Gets the properties associated with an InferRxNorm job. Use this operation to get the
 *       status of an inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeRxNormInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRxNormInferenceJobCommand extends $Command<DescribeRxNormInferenceJobCommandInput, DescribeRxNormInferenceJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DescribeRxNormInferenceJobCommandInput;
    constructor(input: DescribeRxNormInferenceJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRxNormInferenceJobCommandInput, DescribeRxNormInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
