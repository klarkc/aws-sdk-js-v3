import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListDashboardsRequest, ListDashboardsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDashboardsCommandInput extends ListDashboardsRequest {
}
export interface ListDashboardsCommandOutput extends ListDashboardsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListDashboardsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListDashboardsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListDashboardsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDashboardsCommandInput} for command's `input` shape.
 * @see {@link ListDashboardsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDashboardsCommand extends $Command<ListDashboardsCommandInput, ListDashboardsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListDashboardsCommandInput;
    constructor(input: ListDashboardsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDashboardsCommandInput, ListDashboardsCommandOutput>;
    private serialize;
    private deserialize;
}
