import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetBatchPredictionInput, GetBatchPredictionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBatchPredictionCommandInput extends GetBatchPredictionInput {
}
export interface GetBatchPredictionCommandOutput extends GetBatchPredictionOutput, __MetadataBearer {
}
/**
 * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
 *             <code>Batch Prediction</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link GetBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBatchPredictionCommand extends $Command<GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: GetBatchPredictionCommandInput;
    constructor(input: GetBatchPredictionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
