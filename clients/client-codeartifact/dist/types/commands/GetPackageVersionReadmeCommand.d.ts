import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetPackageVersionReadmeRequest, GetPackageVersionReadmeResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPackageVersionReadmeCommandInput extends GetPackageVersionReadmeRequest {
}
export interface GetPackageVersionReadmeCommandOutput extends GetPackageVersionReadmeResult, __MetadataBearer {
}
/**
 * <p>
 *          Gets the readme file or descriptive text for a package version. For packages that do not contain a readme file, CodeArtifact
 *          extracts a description from a metadata file. For example, from the <code><description></code> element in the
 *         <code>pom.xml</code> file of a Maven package.
 *       </p>
 *          <p>
 *        The returned text might contain formatting. For example, it might contain formatting for Markdown or reStructuredText.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionReadmeCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionReadmeCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetPackageVersionReadmeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPackageVersionReadmeCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionReadmeCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPackageVersionReadmeCommand extends $Command<GetPackageVersionReadmeCommandInput, GetPackageVersionReadmeCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: GetPackageVersionReadmeCommandInput;
    constructor(input: GetPackageVersionReadmeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPackageVersionReadmeCommandInput, GetPackageVersionReadmeCommandOutput>;
    private serialize;
    private deserialize;
}
