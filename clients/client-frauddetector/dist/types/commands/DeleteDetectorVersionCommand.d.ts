import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DeleteDetectorVersionRequest, DeleteDetectorVersionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDetectorVersionCommandInput extends DeleteDetectorVersionRequest {
}
export interface DeleteDetectorVersionCommandOutput extends DeleteDetectorVersionResult, __MetadataBearer {
}
/**
 * <p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p>
 * 	  	     <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDetectorVersionCommand extends $Command<DeleteDetectorVersionCommandInput, DeleteDetectorVersionCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: DeleteDetectorVersionCommandInput;
    constructor(input: DeleteDetectorVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDetectorVersionCommandInput, DeleteDetectorVersionCommandOutput>;
    private serialize;
    private deserialize;
}
