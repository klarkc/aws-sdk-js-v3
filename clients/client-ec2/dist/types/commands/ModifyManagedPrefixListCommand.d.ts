import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyManagedPrefixListRequest, ModifyManagedPrefixListResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyManagedPrefixListCommandInput extends ModifyManagedPrefixListRequest {
}
export interface ModifyManagedPrefixListCommandOutput extends ModifyManagedPrefixListResult, __MetadataBearer {
}
/**
 * <p>Modifies the specified managed prefix list.</p>
 *         <p>Adding or removing entries in a prefix list creates a new version of the prefix list.
 *             Changing the name of the prefix list does not affect the version.</p>
 *         <p>If you specify a current version number that does not match the true current version
 *             number, the request fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link ModifyManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyManagedPrefixListCommand extends $Command<ModifyManagedPrefixListCommandInput, ModifyManagedPrefixListCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyManagedPrefixListCommandInput;
    constructor(input: ModifyManagedPrefixListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyManagedPrefixListCommandInput, ModifyManagedPrefixListCommandOutput>;
    private serialize;
    private deserialize;
}
