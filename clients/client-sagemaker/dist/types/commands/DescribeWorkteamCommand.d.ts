import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeWorkteamRequest, DescribeWorkteamResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeWorkteamCommandInput extends DescribeWorkteamRequest {
}
export interface DescribeWorkteamCommandOutput extends DescribeWorkteamResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specific work team. You can see information such as the
 *             create date, the last updated date, membership information, and the work team's Amazon
 *             Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeWorkteamCommand extends $Command<DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeWorkteamCommandInput;
    constructor(input: DescribeWorkteamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
