import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetEventPredictionRequest, GetEventPredictionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEventPredictionCommandInput extends GetEventPredictionRequest {
}
export interface GetEventPredictionCommandOutput extends GetEventPredictionResult, __MetadataBearer {
}
/**
 * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventPredictionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventPredictionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetEventPredictionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventPredictionCommandInput} for command's `input` shape.
 * @see {@link GetEventPredictionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEventPredictionCommand extends $Command<GetEventPredictionCommandInput, GetEventPredictionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: GetEventPredictionCommandInput;
    constructor(input: GetEventPredictionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEventPredictionCommandInput, GetEventPredictionCommandOutput>;
    private serialize;
    private deserialize;
}
