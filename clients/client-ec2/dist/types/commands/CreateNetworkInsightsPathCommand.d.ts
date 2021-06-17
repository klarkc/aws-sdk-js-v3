import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkInsightsPathRequest, CreateNetworkInsightsPathResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNetworkInsightsPathCommandInput extends CreateNetworkInsightsPathRequest {
}
export interface CreateNetworkInsightsPathCommandOutput extends CreateNetworkInsightsPathResult, __MetadataBearer {
}
/**
 * <p>Creates a path to analyze for reachability.</p>
 *          <p>Reachability Analyzer enables you to analyze and debug network reachability between
 *           two resources in your virtual private cloud (VPC). For more information, see
 *           <a href="https://docs.aws.amazon.com/vpc/latest/reachability/">What is Reachability Analyzer</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNetworkInsightsPathCommand extends $Command<CreateNetworkInsightsPathCommandInput, CreateNetworkInsightsPathCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkInsightsPathCommandInput;
    constructor(input: CreateNetworkInsightsPathCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkInsightsPathCommandInput, CreateNetworkInsightsPathCommandOutput>;
    private serialize;
    private deserialize;
}
