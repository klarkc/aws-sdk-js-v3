import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StartRxNormInferenceJobRequest, StartRxNormInferenceJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartRxNormInferenceJobCommandInput extends StartRxNormInferenceJobRequest {
}
export interface StartRxNormInferenceJobCommandOutput extends StartRxNormInferenceJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous job to detect medication entities and link them to the RxNorm
 *       ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a
 *       job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartRxNormInferenceJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartRxNormInferenceJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartRxNormInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRxNormInferenceJobCommandInput} for command's `input` shape.
 * @see {@link StartRxNormInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartRxNormInferenceJobCommand extends $Command<StartRxNormInferenceJobCommandInput, StartRxNormInferenceJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StartRxNormInferenceJobCommandInput;
    constructor(input: StartRxNormInferenceJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartRxNormInferenceJobCommandInput, StartRxNormInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
