import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribePortalRequest, DescribePortalResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePortalCommandInput extends DescribePortalRequest {
}
export interface DescribePortalCommandOutput extends DescribePortalResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribePortalCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribePortalCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribePortalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortalCommandInput} for command's `input` shape.
 * @see {@link DescribePortalCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePortalCommand extends $Command<DescribePortalCommandInput, DescribePortalCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DescribePortalCommandInput;
    constructor(input: DescribePortalCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePortalCommandInput, DescribePortalCommandOutput>;
    private serialize;
    private deserialize;
}
