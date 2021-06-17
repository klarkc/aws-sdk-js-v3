import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAccessPolicyRequest, DescribeAccessPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAccessPolicyCommandInput extends DescribeAccessPolicyRequest {
}
export interface DescribeAccessPolicyCommandOutput extends DescribeAccessPolicyResponse, __MetadataBearer {
}
/**
 * <p>Describes an access policy, which specifies an identity's access to an AWS IoT SiteWise Monitor portal or
 *       project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAccessPolicyCommand extends $Command<DescribeAccessPolicyCommandInput, DescribeAccessPolicyCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DescribeAccessPolicyCommandInput;
    constructor(input: DescribeAccessPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccessPolicyCommandInput, DescribeAccessPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
