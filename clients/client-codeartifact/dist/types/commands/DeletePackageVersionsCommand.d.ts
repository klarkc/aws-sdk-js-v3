import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeletePackageVersionsRequest, DeletePackageVersionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePackageVersionsCommandInput extends DeletePackageVersionsRequest {
}
export interface DeletePackageVersionsCommandOutput extends DeletePackageVersionsResult, __MetadataBearer {
}
/**
 * <p> Deletes one or more versions of a package. A deleted package version cannot be restored
 *       in your repository. If you want to remove a package version from your repository and be able
 *       to restore it later, set its status to <code>Archived</code>. Archived packages cannot be
 *       downloaded from a repository and don't show up with list package APIs (for example,
 *           <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_ListPackageVersions.html">ListackageVersions</a>), but you can restore them using <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_UpdatePackageVersionsStatus.html">UpdatePackageVersionsStatus</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeletePackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeletePackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeletePackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackageVersionsCommandInput} for command's `input` shape.
 * @see {@link DeletePackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePackageVersionsCommand extends $Command<DeletePackageVersionsCommandInput, DeletePackageVersionsCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DeletePackageVersionsCommandInput;
    constructor(input: DeletePackageVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePackageVersionsCommandInput, DeletePackageVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
