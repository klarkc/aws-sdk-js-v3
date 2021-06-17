import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListLocalDisksInput, ListLocalDisksOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLocalDisksCommandInput extends ListLocalDisksInput {
}
export interface ListLocalDisksCommandOutput extends ListLocalDisksOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of the gateway's local disks. To specify which gateway to describe,
 *          you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p>
 *
 *          <p>The request returns a list of all disks, specifying which are configured as working
 *          storage, cache storage, or stored volume or not configured at all. The response includes a
 *             <code>DiskStatus</code> field. This field can have a value of present (the disk is
 *          available to use), missing (the disk is no longer connected to the gateway), or mismatch
 *          (the disk node is occupied by a disk that has incorrect metadata or the disk content is
 *          corrupted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListLocalDisksCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListLocalDisksCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListLocalDisksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLocalDisksCommandInput} for command's `input` shape.
 * @see {@link ListLocalDisksCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLocalDisksCommand extends $Command<ListLocalDisksCommandInput, ListLocalDisksCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListLocalDisksCommandInput;
    constructor(input: ListLocalDisksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLocalDisksCommandInput, ListLocalDisksCommandOutput>;
    private serialize;
    private deserialize;
}
