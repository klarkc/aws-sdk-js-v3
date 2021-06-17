import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartNetworkInsightsAnalysisRequest, StartNetworkInsightsAnalysisResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartNetworkInsightsAnalysisCommandInput extends StartNetworkInsightsAnalysisRequest {
}
export interface StartNetworkInsightsAnalysisCommandOutput extends StartNetworkInsightsAnalysisResult, __MetadataBearer {
}
/**
 * <p>Starts analyzing the specified path. If the path is reachable, the
 *          operation returns the shortest feasible path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartNetworkInsightsAnalysisCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartNetworkInsightsAnalysisCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StartNetworkInsightsAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNetworkInsightsAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartNetworkInsightsAnalysisCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartNetworkInsightsAnalysisCommand extends $Command<StartNetworkInsightsAnalysisCommandInput, StartNetworkInsightsAnalysisCommandOutput, EC2ClientResolvedConfig> {
    readonly input: StartNetworkInsightsAnalysisCommandInput;
    constructor(input: StartNetworkInsightsAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartNetworkInsightsAnalysisCommandInput, StartNetworkInsightsAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
