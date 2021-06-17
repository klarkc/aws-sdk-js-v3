import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeNodegroupRequest, DescribeNodegroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNodegroupCommandInput extends DescribeNodegroupRequest {
}
export interface DescribeNodegroupCommandOutput extends DescribeNodegroupResponse, __MetadataBearer {
}
/**
 * <p>Returns descriptive information about an Amazon EKS node group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodegroupCommandInput} for command's `input` shape.
 * @see {@link DescribeNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNodegroupCommand extends $Command<DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput, EKSClientResolvedConfig> {
    readonly input: DescribeNodegroupCommandInput;
    constructor(input: DescribeNodegroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput>;
    private serialize;
    private deserialize;
}
