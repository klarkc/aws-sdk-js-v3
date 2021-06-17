import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdatePortalRequest, UpdatePortalResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePortalCommandInput extends UpdatePortalRequest {
}
export interface UpdatePortalCommandOutput extends UpdatePortalResponse, __MetadataBearer {
}
/**
 * <p>Updates an AWS IoT SiteWise Monitor portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdatePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdatePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdatePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortalCommandInput} for command's `input` shape.
 * @see {@link UpdatePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePortalCommand extends $Command<UpdatePortalCommandInput, UpdatePortalCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: UpdatePortalCommandInput;
    constructor(input: UpdatePortalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePortalCommandInput, UpdatePortalCommandOutput>;
    private serialize;
    private deserialize;
}
