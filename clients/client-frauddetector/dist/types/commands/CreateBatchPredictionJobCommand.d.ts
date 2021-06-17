import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateBatchPredictionJobRequest, CreateBatchPredictionJobResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateBatchPredictionJobCommandInput extends CreateBatchPredictionJobRequest {
}
export interface CreateBatchPredictionJobCommandOutput extends CreateBatchPredictionJobResult, __MetadataBearer {
}
/**
 * <p>Creates a batch prediction job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateBatchPredictionJobCommand extends $Command<CreateBatchPredictionJobCommandInput, CreateBatchPredictionJobCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateBatchPredictionJobCommandInput;
    constructor(input: CreateBatchPredictionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBatchPredictionJobCommandInput, CreateBatchPredictionJobCommandOutput>;
    private serialize;
    private deserialize;
}
