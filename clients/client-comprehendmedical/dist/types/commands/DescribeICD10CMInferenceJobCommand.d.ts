import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DescribeICD10CMInferenceJobRequest, DescribeICD10CMInferenceJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeICD10CMInferenceJobCommandInput extends DescribeICD10CMInferenceJobRequest {
}
export interface DescribeICD10CMInferenceJobCommandOutput extends DescribeICD10CMInferenceJobResponse, __MetadataBearer {
}
/**
 * <p>Gets the properties associated with an InferICD10CM job. Use this operation to get the
 *       status of an inference job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribeICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribeICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribeICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeICD10CMInferenceJobCommand extends $Command<DescribeICD10CMInferenceJobCommandInput, DescribeICD10CMInferenceJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DescribeICD10CMInferenceJobCommandInput;
    constructor(input: DescribeICD10CMInferenceJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeICD10CMInferenceJobCommandInput, DescribeICD10CMInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
