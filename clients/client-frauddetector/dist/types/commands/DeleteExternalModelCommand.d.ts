import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteExternalModelRequest, DeleteExternalModelResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteExternalModelCommandInput extends DeleteExternalModelRequest {
}
export interface DeleteExternalModelCommandOutput extends DeleteExternalModelResult, __MetadataBearer {
}
/**
 * <p>Removes a SageMaker model from Amazon Fraud Detector.</p>
 * 	        <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteExternalModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteExternalModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteExternalModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExternalModelCommandInput} for command's `input` shape.
 * @see {@link DeleteExternalModelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteExternalModelCommand extends $Command<DeleteExternalModelCommandInput, DeleteExternalModelCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteExternalModelCommandInput;
    constructor(input: DeleteExternalModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExternalModelCommandInput, DeleteExternalModelCommandOutput>;
    private serialize;
    private deserialize;
}
