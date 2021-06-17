import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssetsRequest, ListAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssetsCommandInput extends ListAssetsRequest {
}
export interface ListAssetsCommandOutput extends ListAssetsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of asset summaries.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List assets based on a specific asset model.</p>
 *             </li>
 *             <li>
 *                <p>List top-level assets.</p>
 *             </li>
 *          </ul>
 *          <p>You can't use this operation to list all assets. To retrieve summaries for all of your
 *       assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all
 *       assets for each asset model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssetsCommand extends $Command<ListAssetsCommandInput, ListAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListAssetsCommandInput;
    constructor(input: ListAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssetsCommandInput, ListAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
