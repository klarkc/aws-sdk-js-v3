import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListPackagingConfigurationsRequest, ListPackagingConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPackagingConfigurationsCommandInput extends ListPackagingConfigurationsRequest {
}
export interface ListPackagingConfigurationsCommandOutput extends ListPackagingConfigurationsResponse, __MetadataBearer {
}
/**
 * Returns a collection of MediaPackage VOD PackagingConfiguration resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingConfigurationsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingConfigurationsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListPackagingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPackagingConfigurationsCommand extends $Command<ListPackagingConfigurationsCommandInput, ListPackagingConfigurationsCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: ListPackagingConfigurationsCommandInput;
    constructor(input: ListPackagingConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPackagingConfigurationsCommandInput, ListPackagingConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
