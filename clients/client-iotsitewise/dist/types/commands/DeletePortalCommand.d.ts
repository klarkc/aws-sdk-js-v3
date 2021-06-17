import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DeletePortalRequest, DeletePortalResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePortalCommandInput extends DeletePortalRequest {
}
export interface DeletePortalCommandOutput extends DeletePortalResponse, __MetadataBearer {
}
/**
 * <p>Deletes a portal from AWS IoT SiteWise Monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeletePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeletePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DeletePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortalCommandInput} for command's `input` shape.
 * @see {@link DeletePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePortalCommand extends $Command<DeletePortalCommandInput, DeletePortalCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DeletePortalCommandInput;
    constructor(input: DeletePortalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePortalCommandInput, DeletePortalCommandOutput>;
    private serialize;
    private deserialize;
}
