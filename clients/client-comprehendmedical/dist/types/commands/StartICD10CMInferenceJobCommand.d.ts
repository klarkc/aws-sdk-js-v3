import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StartICD10CMInferenceJobRequest, StartICD10CMInferenceJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartICD10CMInferenceJobCommandInput extends StartICD10CMInferenceJobRequest {
}
export interface StartICD10CMInferenceJobCommandOutput extends StartICD10CMInferenceJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM
 *       ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartICD10CMInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartICD10CMInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartICD10CMInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartICD10CMInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartICD10CMInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartICD10CMInferenceJobCommand extends $Command<StartICD10CMInferenceJobCommandInput, StartICD10CMInferenceJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StartICD10CMInferenceJobCommandInput;
    constructor(input: StartICD10CMInferenceJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartICD10CMInferenceJobCommandInput, StartICD10CMInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
