import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DescribePackagingGroupRequest, DescribePackagingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePackagingGroupCommandInput extends DescribePackagingGroupRequest {
}
export interface DescribePackagingGroupCommandOutput extends DescribePackagingGroupResponse, __MetadataBearer {
}
/**
 * Returns a description of a MediaPackage VOD PackagingGroup resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribePackagingGroupCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribePackagingGroupCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DescribePackagingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackagingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribePackagingGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePackagingGroupCommand extends $Command<DescribePackagingGroupCommandInput, DescribePackagingGroupCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: DescribePackagingGroupCommandInput;
    constructor(input: DescribePackagingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePackagingGroupCommandInput, DescribePackagingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
