import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteManagedPrefixListRequest, DeleteManagedPrefixListResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteManagedPrefixListCommandInput extends DeleteManagedPrefixListRequest {
}
export interface DeleteManagedPrefixListCommandOutput extends DeleteManagedPrefixListResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteManagedPrefixListCommand extends $Command<DeleteManagedPrefixListCommandInput, DeleteManagedPrefixListCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteManagedPrefixListCommandInput;
    constructor(input: DeleteManagedPrefixListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteManagedPrefixListCommandInput, DeleteManagedPrefixListCommandOutput>;
    private serialize;
    private deserialize;
}
