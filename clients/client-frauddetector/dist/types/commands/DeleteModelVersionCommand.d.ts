import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteModelVersionRequest, DeleteModelVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelVersionCommandInput extends DeleteModelVersionRequest {
}
export interface DeleteModelVersionCommandOutput extends DeleteModelVersionResult, __MetadataBearer {
}
/**
 * <p>Deletes a model version.</p>
 * 	        <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p>
 * 	        <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelVersionCommand extends $Command<DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteModelVersionCommandInput;
    constructor(input: DeleteModelVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelVersionCommandInput, DeleteModelVersionCommandOutput>;
    private serialize;
    private deserialize;
}
