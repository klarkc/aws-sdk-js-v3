import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreatePortalRequest, CreatePortalResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePortalCommandInput extends CreatePortalRequest {
}
export interface CreatePortalCommandOutput extends CreatePortalResponse, __MetadataBearer {
}
/**
 * <p>Creates a portal, which can contain projects and dashboards. AWS IoT SiteWise Monitor uses AWS SSO or IAM
 *       to authenticate portal users and manage user permissions.</p>
 *          <note>
 *             <p>Before you can sign in to a new portal, you must add at least one identity to that
 *         portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal
 *           administrators</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreatePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreatePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreatePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePortalCommandInput} for command's `input` shape.
 * @see {@link CreatePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePortalCommand extends $Command<CreatePortalCommandInput, CreatePortalCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: CreatePortalCommandInput;
    constructor(input: CreatePortalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePortalCommandInput, CreatePortalCommandOutput>;
    private serialize;
    private deserialize;
}
