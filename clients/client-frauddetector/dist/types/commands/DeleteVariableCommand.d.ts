import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteVariableRequest, DeleteVariableResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVariableCommandInput extends DeleteVariableRequest {
}
export interface DeleteVariableCommandOutput extends DeleteVariableResult, __MetadataBearer {
}
/**
 * <p>Deletes a variable.</p>
 * 	        <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p>
 * 	        <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p>
 * 	        <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteVariableCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteVariableCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteVariableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVariableCommandInput} for command's `input` shape.
 * @see {@link DeleteVariableCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVariableCommand extends $Command<DeleteVariableCommandInput, DeleteVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteVariableCommandInput;
    constructor(input: DeleteVariableCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVariableCommandInput, DeleteVariableCommandOutput>;
    private serialize;
    private deserialize;
}
