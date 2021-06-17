import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeBatchPredictionsInput, DescribeBatchPredictionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBatchPredictionsCommandInput extends DescribeBatchPredictionsInput {
}
export interface DescribeBatchPredictionsCommandOutput extends DescribeBatchPredictionsOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeBatchPredictionsCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeBatchPredictionsCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeBatchPredictionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBatchPredictionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchPredictionsCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBatchPredictionsCommand extends $Command<DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeBatchPredictionsCommandInput;
    constructor(input: DescribeBatchPredictionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput>;
    private serialize;
    private deserialize;
}
