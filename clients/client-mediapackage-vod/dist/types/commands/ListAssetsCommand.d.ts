import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListAssetsRequest, ListAssetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssetsCommandInput extends ListAssetsRequest {
}
export interface ListAssetsCommandOutput extends ListAssetsResponse, __MetadataBearer {
}
/**
 * Returns a collection of MediaPackage VOD Asset resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListAssetsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListAssetsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssetsCommand extends $Command<ListAssetsCommandInput, ListAssetsCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: ListAssetsCommandInput;
    constructor(input: ListAssetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssetsCommandInput, ListAssetsCommandOutput>;
    private serialize;
    private deserialize;
}
