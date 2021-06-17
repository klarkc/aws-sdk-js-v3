import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { DescribeImageTagsRequest, DescribeImageTagsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImageTagsCommandInput extends DescribeImageTagsRequest {
}
export interface DescribeImageTagsCommandOutput extends DescribeImageTagsResponse, __MetadataBearer {
}
/**
 * <p>Returns the image tag details for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeImageTagsCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeImageTagsCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new DescribeImageTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImageTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageTagsCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImageTagsCommand extends $Command<DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: DescribeImageTagsCommandInput;
    constructor(input: DescribeImageTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageTagsCommandInput, DescribeImageTagsCommandOutput>;
    private serialize;
    private deserialize;
}
