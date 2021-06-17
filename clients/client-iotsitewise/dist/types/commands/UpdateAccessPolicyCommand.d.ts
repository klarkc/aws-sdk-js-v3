import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { UpdateAccessPolicyRequest, UpdateAccessPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateAccessPolicyCommandInput extends UpdateAccessPolicyRequest {
}
export interface UpdateAccessPolicyCommandOutput extends UpdateAccessPolicyResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing access policy that specifies an identity's access to an AWS IoT SiteWise Monitor
 *       portal or project resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new UpdateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateAccessPolicyCommand extends $Command<UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: UpdateAccessPolicyCommandInput;
    constructor(input: UpdateAccessPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
