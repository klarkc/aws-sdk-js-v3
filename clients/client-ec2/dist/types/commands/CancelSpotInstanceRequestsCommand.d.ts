import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelSpotInstanceRequestsRequest, CancelSpotInstanceRequestsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelSpotInstanceRequestsCommandInput extends CancelSpotInstanceRequestsRequest {
}
export interface CancelSpotInstanceRequestsCommandOutput extends CancelSpotInstanceRequestsResult, __MetadataBearer {
}
/**
 * <p>Cancels one or more Spot Instance requests.</p>
 *          <important>
 *             <p>Canceling a Spot Instance request does not terminate running Spot Instances associated with the request.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link CancelSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelSpotInstanceRequestsCommand extends $Command<CancelSpotInstanceRequestsCommandInput, CancelSpotInstanceRequestsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelSpotInstanceRequestsCommandInput;
    constructor(input: CancelSpotInstanceRequestsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSpotInstanceRequestsCommandInput, CancelSpotInstanceRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
