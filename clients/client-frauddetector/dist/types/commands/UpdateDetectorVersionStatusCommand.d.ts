import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionStatusRequest, UpdateDetectorVersionStatusResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDetectorVersionStatusCommandInput extends UpdateDetectorVersionStatusRequest {
}
export interface UpdateDetectorVersionStatusCommandOutput extends UpdateDetectorVersionStatusResult, __MetadataBearer {
}
/**
 * <p>Updates the detector version’s status. You can perform the following promotions or
 *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateDetectorVersionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDetectorVersionStatusCommand extends $Command<UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateDetectorVersionStatusCommandInput;
    constructor(input: UpdateDetectorVersionStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
