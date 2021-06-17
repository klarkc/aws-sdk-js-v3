import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListProjectAssetsRequest, ListProjectAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProjectAssetsCommandInput extends ListProjectAssetsRequest {
}
export interface ListProjectAssetsCommandOutput extends ListProjectAssetsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListProjectAssetsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListProjectAssetsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListProjectAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectAssetsCommandInput} for command's `input` shape.
 * @see {@link ListProjectAssetsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProjectAssetsCommand extends $Command<ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListProjectAssetsCommandInput;
    constructor(input: ListProjectAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
