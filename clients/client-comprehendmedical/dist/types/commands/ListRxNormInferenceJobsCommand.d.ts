import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { ListRxNormInferenceJobsRequest, ListRxNormInferenceJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRxNormInferenceJobsCommandInput extends ListRxNormInferenceJobsRequest {
}
export interface ListRxNormInferenceJobsCommandOutput extends ListRxNormInferenceJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of InferRxNorm jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListRxNormInferenceJobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListRxNormInferenceJobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new ListRxNormInferenceJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRxNormInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListRxNormInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRxNormInferenceJobsCommand extends $Command<ListRxNormInferenceJobsCommandInput, ListRxNormInferenceJobsCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: ListRxNormInferenceJobsCommandInput;
    constructor(input: ListRxNormInferenceJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRxNormInferenceJobsCommandInput, ListRxNormInferenceJobsCommandOutput>;
    private serialize;
    private deserialize;
}
