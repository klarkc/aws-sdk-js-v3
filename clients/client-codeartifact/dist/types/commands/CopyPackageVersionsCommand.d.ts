import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { CopyPackageVersionsRequest, CopyPackageVersionsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyPackageVersionsCommandInput extends CopyPackageVersionsRequest {
}
export interface CopyPackageVersionsCommandOutput extends CopyPackageVersionsResult, __MetadataBearer {
}
/**
 * <p>
 *         Copies package versions from one repository to another repository in the same domain.
 *       </p>
 *          <note>
 *             <p>
 *         You must specify <code>versions</code> or <code>versionRevisions</code>. You cannot specify both.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CopyPackageVersionsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CopyPackageVersionsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new CopyPackageVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyPackageVersionsCommandInput} for command's `input` shape.
 * @see {@link CopyPackageVersionsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyPackageVersionsCommand extends $Command<CopyPackageVersionsCommandInput, CopyPackageVersionsCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: CopyPackageVersionsCommandInput;
    constructor(input: CopyPackageVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyPackageVersionsCommandInput, CopyPackageVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
