import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { PutEventTypeRequest, PutEventTypeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEventTypeCommandInput extends PutEventTypeRequest {
}
export interface PutEventTypeCommandOutput extends PutEventTypeResult, __MetadataBearer {
}
/**
 * <p>Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutEventTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventTypeCommandInput} for command's `input` shape.
 * @see {@link PutEventTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEventTypeCommand extends $Command<PutEventTypeCommandInput, PutEventTypeCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: PutEventTypeCommandInput;
    constructor(input: PutEventTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEventTypeCommandInput, PutEventTypeCommandOutput>;
    private serialize;
    private deserialize;
}
