import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateBatchPredictionInput, UpdateBatchPredictionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBatchPredictionCommandInput extends UpdateBatchPredictionInput {
}
export interface UpdateBatchPredictionCommandOutput extends UpdateBatchPredictionOutput, __MetadataBearer {
}
/**
 * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p>
 *         <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateBatchPredictionCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateBatchPredictionCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateBatchPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBatchPredictionCommandInput} for command's `input` shape.
 * @see {@link UpdateBatchPredictionCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBatchPredictionCommand extends $Command<UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateBatchPredictionCommandInput;
    constructor(input: UpdateBatchPredictionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
