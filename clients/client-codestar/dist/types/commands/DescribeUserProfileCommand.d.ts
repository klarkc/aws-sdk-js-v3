import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DescribeUserProfileRequest, DescribeUserProfileResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserProfileCommandInput extends DescribeUserProfileRequest {
}
export interface DescribeUserProfileCommandOutput extends DescribeUserProfileResult, __MetadataBearer {
}
/**
 * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DescribeUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DescribeUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DescribeUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserProfileCommand extends $Command<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DescribeUserProfileCommandInput;
    constructor(input: DescribeUserProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
