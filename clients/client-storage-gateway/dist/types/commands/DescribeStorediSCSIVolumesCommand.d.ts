import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStorediSCSIVolumesCommandInput extends DescribeStorediSCSIVolumesInput {
}
export interface DescribeStorediSCSIVolumesCommandOutput extends DescribeStorediSCSIVolumesOutput, __MetadataBearer {
}
/**
 * <p>Returns the description of the gateway volumes specified in the request. The list of
 *          gateway volumes in the request must be from one gateway. In the response, AWS Storage
 *          Gateway returns volume information sorted by volume ARNs. This operation is only supported
 *          in stored volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeStorediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStorediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorediSCSIVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStorediSCSIVolumesCommand extends $Command<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeStorediSCSIVolumesCommandInput;
    constructor(input: DescribeStorediSCSIVolumesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStorediSCSIVolumesCommandInput, DescribeStorediSCSIVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
