import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { AssociateFileSystemAliasesRequest, AssociateFileSystemAliasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateFileSystemAliasesCommandInput extends AssociateFileSystemAliasesRequest {
}
export interface AssociateFileSystemAliasesCommandOutput extends AssociateFileSystemAliasesResponse, __MetadataBearer {
}
/**
 * <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system.
 *         A file systen can have a maximum of 50 DNS aliases associated with it at any one time. If you try to
 *         associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request.
 *         For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
 *              additional steps you must take to be able to access your file system using a DNS alias.</p>
 *         <p>The system response shows the DNS aliases that
 *             Amazon FSx is attempting to associate with the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             associating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, AssociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, AssociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new AssociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateFileSystemAliasesCommand extends $Command<AssociateFileSystemAliasesCommandInput, AssociateFileSystemAliasesCommandOutput, FSxClientResolvedConfig> {
    readonly input: AssociateFileSystemAliasesCommandInput;
    constructor(input: AssociateFileSystemAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateFileSystemAliasesCommandInput, AssociateFileSystemAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
