import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { ListPackageVersionAssetsRequest, ListPackageVersionAssetsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPackageVersionAssetsCommandInput extends ListPackageVersionAssetsRequest {
}
export interface ListPackageVersionAssetsCommandOutput extends ListPackageVersionAssetsResult, __MetadataBearer {
}
/**
 * <p>
 *        Returns a list of
 *        <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_AssetSummary.html">AssetSummary</a>
 *        objects for assets in a package version.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListPackageVersionAssetsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListPackageVersionAssetsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new ListPackageVersionAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackageVersionAssetsCommandInput} for command's `input` shape.
 * @see {@link ListPackageVersionAssetsCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPackageVersionAssetsCommand extends $Command<ListPackageVersionAssetsCommandInput, ListPackageVersionAssetsCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: ListPackageVersionAssetsCommandInput;
    constructor(input: ListPackageVersionAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPackageVersionAssetsCommandInput, ListPackageVersionAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
