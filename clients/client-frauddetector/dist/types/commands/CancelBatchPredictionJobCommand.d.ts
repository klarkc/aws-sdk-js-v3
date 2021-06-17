import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CancelBatchPredictionJobRequest, CancelBatchPredictionJobResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelBatchPredictionJobCommandInput extends CancelBatchPredictionJobRequest {
}
export interface CancelBatchPredictionJobCommandOutput extends CancelBatchPredictionJobResult, __MetadataBearer {
}
/**
 * <p>Cancels the specified batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CancelBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CancelBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CancelBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CancelBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelBatchPredictionJobCommand extends $Command<CancelBatchPredictionJobCommandInput, CancelBatchPredictionJobCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CancelBatchPredictionJobCommandInput;
    constructor(input: CancelBatchPredictionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelBatchPredictionJobCommandInput, CancelBatchPredictionJobCommandOutput>;
    private serialize;
    private deserialize;
}
