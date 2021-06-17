import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeSubscribedWorkteamRequest, DescribeSubscribedWorkteamResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSubscribedWorkteamCommandInput extends DescribeSubscribedWorkteamRequest {
}
export interface DescribeSubscribedWorkteamCommandOutput extends DescribeSubscribedWorkteamResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a work team provided by a vendor. It returns details about the
 *             subscription with a vendor in the AWS Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeSubscribedWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeSubscribedWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeSubscribedWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscribedWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribedWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSubscribedWorkteamCommand extends $Command<DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeSubscribedWorkteamCommandInput;
    constructor(input: DescribeSubscribedWorkteamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput>;
    private serialize;
    private deserialize;
}
