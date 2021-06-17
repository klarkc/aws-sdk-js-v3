import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeManagedPrefixListsRequest, DescribeManagedPrefixListsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeManagedPrefixListsCommandInput extends DescribeManagedPrefixListsRequest {
}
export interface DescribeManagedPrefixListsCommandOutput extends DescribeManagedPrefixListsResult, __MetadataBearer {
}
/**
 * <p>Describes your managed prefix lists and any AWS-managed prefix lists.</p>
 *         <p>To view the entries for your prefix list, use <a>GetManagedPrefixListEntries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeManagedPrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeManagedPrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeManagedPrefixListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeManagedPrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedPrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeManagedPrefixListsCommand extends $Command<DescribeManagedPrefixListsCommandInput, DescribeManagedPrefixListsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeManagedPrefixListsCommandInput;
    constructor(input: DescribeManagedPrefixListsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeManagedPrefixListsCommandInput, DescribeManagedPrefixListsCommandOutput>;
    private serialize;
    private deserialize;
}
