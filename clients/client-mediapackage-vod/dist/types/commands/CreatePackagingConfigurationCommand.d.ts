import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { CreatePackagingConfigurationRequest, CreatePackagingConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePackagingConfigurationCommandInput extends CreatePackagingConfigurationRequest {
}
export interface CreatePackagingConfigurationCommandOutput extends CreatePackagingConfigurationResponse, __MetadataBearer {
}
/**
 * Creates a new MediaPackage VOD PackagingConfiguration resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, CreatePackagingConfigurationCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, CreatePackagingConfigurationCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new CreatePackagingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePackagingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreatePackagingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePackagingConfigurationCommand extends $Command<CreatePackagingConfigurationCommandInput, CreatePackagingConfigurationCommandOutput, MediaPackageVodClientResolvedConfig> {
    readonly input: CreatePackagingConfigurationCommandInput;
    constructor(input: CreatePackagingConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageVodClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePackagingConfigurationCommandInput, CreatePackagingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
