import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListPortalsRequest, ListPortalsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPortalsCommandInput extends ListPortalsRequest {
}
export interface ListPortalsCommandOutput extends ListPortalsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a paginated list of AWS IoT SiteWise Monitor portals.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListPortalsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListPortalsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new ListPortalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortalsCommandInput} for command's `input` shape.
 * @see {@link ListPortalsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPortalsCommand extends $Command<ListPortalsCommandInput, ListPortalsCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: ListPortalsCommandInput;
    constructor(input: ListPortalsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPortalsCommandInput, ListPortalsCommandOutput>;
    private serialize;
    private deserialize;
}
