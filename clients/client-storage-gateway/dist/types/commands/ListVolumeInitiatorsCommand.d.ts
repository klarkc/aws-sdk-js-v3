import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListVolumeInitiatorsInput, ListVolumeInitiatorsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVolumeInitiatorsCommandInput extends ListVolumeInitiatorsInput {
}
export interface ListVolumeInitiatorsCommandOutput extends ListVolumeInitiatorsOutput, __MetadataBearer {
}
/**
 * <p>Lists iSCSI initiators that are connected to a volume. You can use this operation to
 *          determine whether a volume is being used or not. This operation is only supported in the
 *          cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeInitiatorsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeInitiatorsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListVolumeInitiatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVolumeInitiatorsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeInitiatorsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListVolumeInitiatorsCommand extends $Command<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: ListVolumeInitiatorsCommandInput;
    constructor(input: ListVolumeInitiatorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVolumeInitiatorsCommandInput, ListVolumeInitiatorsCommandOutput>;
    private serialize;
    private deserialize;
}
