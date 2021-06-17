import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DescribeAssetRequest, DescribeAssetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAssetCommandInput extends DescribeAssetRequest {
}
export interface DescribeAssetCommandOutput extends DescribeAssetResponse, __MetadataBearer {
}
/**
 * Returns a description of a MediaPackage VOD Asset resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribeAssetCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribeAssetCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DescribeAssetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAssetCommandInput} for command's `input` shape.
 * @see {@link DescribeAssetCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAssetCommand extends $Command<DescribeAssetCommandInput, DescribeAssetCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: DescribeAssetCommandInput;
    constructor(input: DescribeAssetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssetCommandInput, DescribeAssetCommandOutput>;
    private serialize;
    private deserialize;
}
