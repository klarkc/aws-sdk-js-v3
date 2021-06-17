import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { DescribePackagingConfigurationRequest, DescribePackagingConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePackagingConfigurationCommandInput extends DescribePackagingConfigurationRequest {
}
export interface DescribePackagingConfigurationCommandOutput extends DescribePackagingConfigurationResponse, __MetadataBearer {
}
/**
 * Returns a description of a MediaPackage VOD PackagingConfiguration resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, DescribePackagingConfigurationCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, DescribePackagingConfigurationCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new DescribePackagingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackagingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribePackagingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePackagingConfigurationCommand extends $Command<DescribePackagingConfigurationCommandInput, DescribePackagingConfigurationCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: DescribePackagingConfigurationCommandInput;
    constructor(input: DescribePackagingConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePackagingConfigurationCommandInput, DescribePackagingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
