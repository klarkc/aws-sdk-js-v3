import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListPackagingGroupsRequest, ListPackagingGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPackagingGroupsCommandInput extends ListPackagingGroupsRequest {
}
export interface ListPackagingGroupsCommandOutput extends ListPackagingGroupsResponse, __MetadataBearer {
}
/**
 * Returns a collection of MediaPackage VOD PackagingGroup resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingGroupsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingGroupsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListPackagingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPackagingGroupsCommand extends $Command<ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: ListPackagingGroupsCommandInput;
    constructor(input: ListPackagingGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
