import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateDashboardRequest, UpdateDashboardResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDashboardCommandInput extends UpdateDashboardRequest {
}
export interface UpdateDashboardCommandOutput extends UpdateDashboardResponse, __MetadataBearer {
}
/**
 * <p>Updates an AWS IoT SiteWise Monitor dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateDashboardCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateDashboardCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDashboardCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDashboardCommand extends $Command<UpdateDashboardCommandInput, UpdateDashboardCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: UpdateDashboardCommandInput;
    constructor(input: UpdateDashboardCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDashboardCommandInput, UpdateDashboardCommandOutput>;
    private serialize;
    private deserialize;
}
