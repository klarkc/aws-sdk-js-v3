import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeUserProfileRequest, DescribeUserProfileResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserProfileCommandInput extends DescribeUserProfileRequest {
}
export interface DescribeUserProfileCommandOutput extends DescribeUserProfileResponse, __MetadataBearer {
}
/**
 * <p>Describes a user profile. For more information, see <code>CreateUserProfile</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeUserProfileCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeUserProfileCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfileCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserProfileCommand extends $Command<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeUserProfileCommandInput;
    constructor(input: DescribeUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
