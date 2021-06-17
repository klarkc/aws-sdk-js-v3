import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RequestSpotInstancesRequest, RequestSpotInstancesResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RequestSpotInstancesCommandInput extends RequestSpotInstancesRequest {
}
export interface RequestSpotInstancesCommandOutput extends RequestSpotInstancesResult, __MetadataBearer {
}
/**
 * <p>Creates a Spot Instance request.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html">Spot Instance requests</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RequestSpotInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RequestSpotInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RequestSpotInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestSpotInstancesCommandInput} for command's `input` shape.
 * @see {@link RequestSpotInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RequestSpotInstancesCommand extends $Command<RequestSpotInstancesCommandInput, RequestSpotInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RequestSpotInstancesCommandInput;
    constructor(input: RequestSpotInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestSpotInstancesCommandInput, RequestSpotInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
