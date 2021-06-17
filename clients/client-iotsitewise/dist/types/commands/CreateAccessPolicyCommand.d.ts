import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateAccessPolicyRequest, CreateAccessPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAccessPolicyCommandInput extends CreateAccessPolicyRequest {
}
export interface CreateAccessPolicyCommandOutput extends CreateAccessPolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates an access policy that grants the specified identity (AWS SSO user, AWS SSO group, or
 *       IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new CreateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAccessPolicyCommand extends $Command<CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: CreateAccessPolicyCommandInput;
    constructor(input: CreateAccessPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
