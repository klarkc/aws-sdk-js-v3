import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetManagedPrefixListEntriesRequest, GetManagedPrefixListEntriesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetManagedPrefixListEntriesCommandInput extends GetManagedPrefixListEntriesRequest {
}
export interface GetManagedPrefixListEntriesCommandOutput extends GetManagedPrefixListEntriesResult, __MetadataBearer {
}
/**
 * <p>Gets information about the entries for a specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetManagedPrefixListEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedPrefixListEntriesCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetManagedPrefixListEntriesCommand extends $Command<GetManagedPrefixListEntriesCommandInput, GetManagedPrefixListEntriesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetManagedPrefixListEntriesCommandInput;
    constructor(input: GetManagedPrefixListEntriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetManagedPrefixListEntriesCommandInput, GetManagedPrefixListEntriesCommandOutput>;
    private serialize;
    private deserialize;
}
