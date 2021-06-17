import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DeletePackagingGroupRequest, DeletePackagingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePackagingGroupCommandInput extends DeletePackagingGroupRequest {
}
export interface DeletePackagingGroupCommandOutput extends DeletePackagingGroupResponse, __MetadataBearer {
}
/**
 * Deletes a MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DeletePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DeletePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DeletePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link DeletePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePackagingGroupCommand extends $Command<DeletePackagingGroupCommandInput, DeletePackagingGroupCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: DeletePackagingGroupCommandInput;
    constructor(input: DeletePackagingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePackagingGroupCommandInput, DeletePackagingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
