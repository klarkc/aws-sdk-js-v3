import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DisassociateFileSystemAliasesRequest, DisassociateFileSystemAliasesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateFileSystemAliasesCommandInput extends DisassociateFileSystemAliasesRequest {
}
export interface DisassociateFileSystemAliasesCommandOutput extends DisassociateFileSystemAliasesResponse, __MetadataBearer {
}
/**
 * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases
 *             from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not
 *             associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p>
 *         <p>The system generated response showing the DNS aliases that
 *             Amazon FSx is attempting to disassociate from the file system.
 *             Use the  API
 *             operation to monitor the status of the aliases Amazon FSx is
 *             disassociating with the file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DisassociateFileSystemAliasesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DisassociateFileSystemAliasesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DisassociateFileSystemAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFileSystemAliasesCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemAliasesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateFileSystemAliasesCommand extends $Command<DisassociateFileSystemAliasesCommandInput, DisassociateFileSystemAliasesCommandOutput, FSxClientResolvedConfig> {
    readonly input: DisassociateFileSystemAliasesCommandInput;
    constructor(input: DisassociateFileSystemAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateFileSystemAliasesCommandInput, DisassociateFileSystemAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
