import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeCachediSCSIVolumesInput, DescribeCachediSCSIVolumesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCachediSCSIVolumesCommandInput extends DescribeCachediSCSIVolumesInput {
}
export interface DescribeCachediSCSIVolumesCommandOutput extends DescribeCachediSCSIVolumesOutput, __MetadataBearer {
}
/**
 * <p>Returns a description of the gateway volumes specified in the request. This operation is
 *          only supported in the cached volume gateway types.</p>
 *
 *          <p>The list of gateway volumes in the request must be from one gateway. In the response,
 *          AWS Storage Gateway returns volume information sorted by volume Amazon Resource Name
 *          (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeCachediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCachediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeCachediSCSIVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCachediSCSIVolumesCommand extends $Command<DescribeCachediSCSIVolumesCommandInput, DescribeCachediSCSIVolumesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeCachediSCSIVolumesCommandInput;
    constructor(input: DescribeCachediSCSIVolumesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCachediSCSIVolumesCommandInput, DescribeCachediSCSIVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
