import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteOutcomeRequest, DeleteOutcomeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOutcomeCommandInput extends DeleteOutcomeRequest {
}
export interface DeleteOutcomeCommandOutput extends DeleteOutcomeResult, __MetadataBearer {
}
/**
 * <p>Deletes an outcome.</p>
 * 	        <p>You cannot delete an outcome that is used in a rule version.</p>
 * 	        <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteOutcomeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteOutcomeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteOutcomeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOutcomeCommandInput} for command's `input` shape.
 * @see {@link DeleteOutcomeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOutcomeCommand extends $Command<DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteOutcomeCommandInput;
    constructor(input: DeleteOutcomeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOutcomeCommandInput, DeleteOutcomeCommandOutput>;
    private serialize;
    private deserialize;
}
