import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { CreatePackagingGroupRequest, CreatePackagingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePackagingGroupCommandInput extends CreatePackagingGroupRequest {
}
export interface CreatePackagingGroupCommandOutput extends CreatePackagingGroupResponse, __MetadataBearer {
}
/**
 * Creates a new MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, CreatePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, CreatePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new CreatePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePackagingGroupCommand extends $Command<CreatePackagingGroupCommandInput, CreatePackagingGroupCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: CreatePackagingGroupCommandInput;
    constructor(input: CreatePackagingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePackagingGroupCommandInput, CreatePackagingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
