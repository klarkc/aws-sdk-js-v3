import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeTapeArchivesInput, DescribeTapeArchivesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTapeArchivesCommandInput extends DescribeTapeArchivesInput {
}
export interface DescribeTapeArchivesCommandOutput extends DescribeTapeArchivesOutput, __MetadataBearer {
}
/**
 * <p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a
 *          description of all virtual tapes found in the VTS associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeArchivesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeArchivesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeTapeArchivesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTapeArchivesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeArchivesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTapeArchivesCommand extends $Command<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeTapeArchivesCommandInput;
    constructor(input: DescribeTapeArchivesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTapeArchivesCommandInput, DescribeTapeArchivesCommandOutput>;
    private serialize;
    private deserialize;
}
