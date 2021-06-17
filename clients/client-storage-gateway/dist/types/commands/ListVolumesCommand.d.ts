import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumesInput, ListVolumesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVolumesCommandInput extends ListVolumesInput {
}
export interface ListVolumesCommandOutput extends ListVolumesOutput, __MetadataBearer {
}
/**
 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
 *          response includes only the volume ARNs. If you want additional volume information, use the
 *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
 *
 *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
 *          100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit
 *          the number of volumes in the response. If the number of volumes returned in the response is
 *          truncated, the response includes a Marker field. You can use this Marker value in your
 *          subsequent request to retrieve the next set of volumes. This operation is only supported in
 *          the cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumesCommandInput} for command's `input` shape.
 * @see {@link ListVolumesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVolumesCommand extends $Command<ListVolumesCommandInput, ListVolumesCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListVolumesCommandInput;
    constructor(input: ListVolumesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVolumesCommandInput, ListVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
