import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutLabelRequest, PutLabelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutLabelCommandInput extends PutLabelRequest {
}
export interface PutLabelCommandOutput extends PutLabelResult, __MetadataBearer {
}
/**
 * <p>Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutLabelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLabelCommandInput} for command's `input` shape.
 * @see {@link PutLabelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutLabelCommand extends $Command<PutLabelCommandInput, PutLabelCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutLabelCommandInput;
    constructor(input: PutLabelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutLabelCommandInput, PutLabelCommandOutput>;
    private serialize;
    private deserialize;
}
