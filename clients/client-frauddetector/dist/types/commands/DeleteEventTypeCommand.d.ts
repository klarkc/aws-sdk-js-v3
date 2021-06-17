import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteEventTypeRequest, DeleteEventTypeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEventTypeCommandInput extends DeleteEventTypeRequest {
}
export interface DeleteEventTypeCommandOutput extends DeleteEventTypeResult, __MetadataBearer {
}
/**
 * <p>Deletes an event type.</p>
 * 	        <p>You cannot delete an event type that is used in a detector or a model.</p>
 * 	        <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteEventTypeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteEventTypeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteEventTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteEventTypeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEventTypeCommand extends $Command<DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteEventTypeCommandInput;
    constructor(input: DeleteEventTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventTypeCommandInput, DeleteEventTypeCommandOutput>;
    private serialize;
    private deserialize;
}
