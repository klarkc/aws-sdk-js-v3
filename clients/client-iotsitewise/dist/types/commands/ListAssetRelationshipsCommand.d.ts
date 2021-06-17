import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssetRelationshipsRequest, ListAssetRelationshipsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssetRelationshipsCommandInput extends ListAssetRelationshipsRequest {
}
export interface ListAssetRelationshipsCommandOutput extends ListAssetRelationshipsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of asset relationships for an asset. You can use this operation
 *       to identify an asset's root asset and all associated assets between that asset and its
 *       root.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetRelationshipsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetRelationshipsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetRelationshipsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListAssetRelationshipsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssetRelationshipsCommand extends $Command<ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListAssetRelationshipsCommandInput;
    constructor(input: ListAssetRelationshipsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput>;
    private serialize;
    private deserialize;
}
