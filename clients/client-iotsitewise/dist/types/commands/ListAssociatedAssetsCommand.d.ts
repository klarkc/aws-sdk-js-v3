import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssociatedAssetsRequest, ListAssociatedAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociatedAssetsCommandInput extends ListAssociatedAssetsRequest {
}
export interface ListAssociatedAssetsCommandOutput extends ListAssociatedAssetsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of associated assets.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
 *             </li>
 *             <li>
 *                <p>List an asset's parent asset.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssociatedAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssociatedAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssociatedAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociatedAssetsCommand extends $Command<ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListAssociatedAssetsCommandInput;
    constructor(input: ListAssociatedAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
