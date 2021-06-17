import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { DescribeImagesRequest, DescribeImagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeImagesCommandInput extends DescribeImagesRequest {
}
export interface DescribeImagesCommandOutput extends DescribeImagesResponse, __MetadataBearer {
}
/**
 * <p>Returns metadata about the images in a repository in a public registry.</p>
 *          <note>
 *             <p>Beginning with Docker version 1.9, the Docker client compresses image layers before
 *             pushing them to a V2 Docker registry. The output of the <code>docker images</code>
 *             command shows the uncompressed image size, so it may return a larger image size than the
 *             image sizes returned by <a>DescribeImages</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DescribeImagesCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DescribeImagesCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeImagesCommand extends $Command<DescribeImagesCommandInput, DescribeImagesCommandOutput, ECRPUBLICClientResolvedConfig> {
    readonly input: DescribeImagesCommandInput;
    constructor(input: DescribeImagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRPUBLICClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImagesCommandInput, DescribeImagesCommandOutput>;
    private serialize;
    private deserialize;
}
