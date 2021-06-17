import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeConditionalForwardersRequest, DescribeConditionalForwardersResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConditionalForwardersCommandInput extends DescribeConditionalForwardersRequest {
}
export interface DescribeConditionalForwardersCommandOutput extends DescribeConditionalForwardersResult, __MetadataBearer {
}
/**
 * <p>Obtains information about the conditional forwarders for this account.</p>
 *          <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeConditionalForwardersCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeConditionalForwardersCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DescribeConditionalForwardersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConditionalForwardersCommandInput} for command's `input` shape.
 * @see {@link DescribeConditionalForwardersCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConditionalForwardersCommand extends $Command<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeConditionalForwardersCommandInput;
    constructor(input: DescribeConditionalForwardersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConditionalForwardersCommandInput, DescribeConditionalForwardersCommandOutput>;
    private serialize;
    private deserialize;
}
