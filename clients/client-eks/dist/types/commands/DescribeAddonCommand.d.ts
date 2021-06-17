import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeAddonRequest, DescribeAddonResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAddonCommandInput extends DescribeAddonRequest {
}
export interface DescribeAddonCommandOutput extends DescribeAddonResponse, __MetadataBearer {
}
/**
 * <p>Describes an Amazon EKS add-on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeAddonCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddonCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAddonCommand extends $Command<DescribeAddonCommandInput, DescribeAddonCommandOutput, EKSClientResolvedConfig> {
    readonly input: DescribeAddonCommandInput;
    constructor(input: DescribeAddonCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAddonCommandInput, DescribeAddonCommandOutput>;
    private serialize;
    private deserialize;
}
