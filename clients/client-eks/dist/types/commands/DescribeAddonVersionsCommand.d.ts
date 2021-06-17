import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeAddonVersionsRequest, DescribeAddonVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAddonVersionsCommandInput extends DescribeAddonVersionsRequest {
}
export interface DescribeAddonVersionsCommandOutput extends DescribeAddonVersionsResponse, __MetadataBearer {
}
/**
 * <p>Describes the Kubernetes versions that the add-on can be used with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeAddonVersionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeAddonVersionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeAddonVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddonVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAddonVersionsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAddonVersionsCommand extends $Command<DescribeAddonVersionsCommandInput, DescribeAddonVersionsCommandOutput, EKSClientResolvedConfig> {
    readonly input: DescribeAddonVersionsCommandInput;
    constructor(input: DescribeAddonVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAddonVersionsCommandInput, DescribeAddonVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
