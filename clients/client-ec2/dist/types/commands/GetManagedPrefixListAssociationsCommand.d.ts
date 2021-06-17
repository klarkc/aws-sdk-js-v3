import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetManagedPrefixListAssociationsRequest, GetManagedPrefixListAssociationsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetManagedPrefixListAssociationsCommandInput extends GetManagedPrefixListAssociationsRequest {
}
export interface GetManagedPrefixListAssociationsCommandOutput extends GetManagedPrefixListAssociationsResult, __MetadataBearer {
}
/**
 * <p>Gets information about the resources that are associated with the specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetManagedPrefixListAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetManagedPrefixListAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetManagedPrefixListAssociationsCommand extends $Command<GetManagedPrefixListAssociationsCommandInput, GetManagedPrefixListAssociationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetManagedPrefixListAssociationsCommandInput;
    constructor(input: GetManagedPrefixListAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetManagedPrefixListAssociationsCommandInput, GetManagedPrefixListAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
