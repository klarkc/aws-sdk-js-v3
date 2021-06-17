import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { GetPackageVersionAssetRequest, GetPackageVersionAssetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPackageVersionAssetCommandInput extends GetPackageVersionAssetRequest {
}
export interface GetPackageVersionAssetCommandOutput extends GetPackageVersionAssetResult, __MetadataBearer {
}
/**
 * <p>
 *       Returns an asset (or file) that is in a package. For example, for a Maven package version, use
 *       <code>GetPackageVersionAsset</code> to download a <code>JAR</code> file, a <code>POM</code> file,
 *       or any other assets in the package version.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetPackageVersionAssetCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetPackageVersionAssetCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetPackageVersionAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPackageVersionAssetCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionAssetCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPackageVersionAssetCommand extends $Command<GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: GetPackageVersionAssetCommandInput;
    constructor(input: GetPackageVersionAssetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPackageVersionAssetCommandInput, GetPackageVersionAssetCommandOutput>;
    private serialize;
    private deserialize;
}
