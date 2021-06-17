import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionMetadataRequest, UpdateDetectorVersionMetadataResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDetectorVersionMetadataCommandInput extends UpdateDetectorVersionMetadataRequest {
}
export interface UpdateDetectorVersionMetadataCommandOutput extends UpdateDetectorVersionMetadataResult, __MetadataBearer {
}
/**
 * <p>Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or
 *                 <code>INACTIVE</code>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateDetectorVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDetectorVersionMetadataCommand extends $Command<UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: UpdateDetectorVersionMetadataCommandInput;
    constructor(input: UpdateDetectorVersionMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
