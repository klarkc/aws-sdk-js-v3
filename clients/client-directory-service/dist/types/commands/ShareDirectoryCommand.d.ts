import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ShareDirectoryRequest, ShareDirectoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ShareDirectoryCommandInput extends ShareDirectoryRequest {
}
export interface ShareDirectoryCommandOutput extends ShareDirectoryResult, __MetadataBearer {
}
/**
 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory
 *       owner) with another AWS account (directory consumer). With this operation you can use your
 *       directory from any AWS account and from any Amazon VPC within an AWS Region.</p>
 *          <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a
 *       shared directory in the directory consumer account. This shared directory contains the
 *       metadata to provide access to the directory within the directory owner account. The shared
 *       directory is visible in all VPCs in the directory consumer account.</p>
 *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
 *       shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It
 *       also determines whether you can share the directory with any other AWS account either inside
 *       or outside of the organization (<code>HANDSHAKE</code>).</p>
 *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
 *       which sends a directory sharing request to the directory consumer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ShareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ShareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ShareDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ShareDirectoryCommandInput} for command's `input` shape.
 * @see {@link ShareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ShareDirectoryCommand extends $Command<ShareDirectoryCommandInput, ShareDirectoryCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ShareDirectoryCommandInput;
    constructor(input: ShareDirectoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ShareDirectoryCommandInput, ShareDirectoryCommandOutput>;
    private serialize;
    private deserialize;
}
