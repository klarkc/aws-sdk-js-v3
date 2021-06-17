import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteLabelRequest, DeleteLabelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLabelCommandInput extends DeleteLabelRequest {
}
export interface DeleteLabelCommandOutput extends DeleteLabelResult, __MetadataBearer {
}
/**
 * <p>Deletes a label.</p>
 * 	        <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p>
 *          <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p>
 *
 *          <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteLabelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteLabelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteLabelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLabelCommandInput} for command's `input` shape.
 * @see {@link DeleteLabelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLabelCommand extends $Command<DeleteLabelCommandInput, DeleteLabelCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteLabelCommandInput;
    constructor(input: DeleteLabelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLabelCommandInput, DeleteLabelCommandOutput>;
    private serialize;
    private deserialize;
}
