import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { ConfigureLogsRequest, ConfigureLogsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfigureLogsCommandInput extends ConfigureLogsRequest {
}
export interface ConfigureLogsCommandOutput extends ConfigureLogsResponse, __MetadataBearer {
}
/**
 * Changes the Channel's properities to configure log subscription
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ConfigureLogsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ConfigureLogsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new ConfigureLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureLogsCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfigureLogsCommand extends $Command<ConfigureLogsCommandInput, ConfigureLogsCommandOutput, MediaPackageClientResolvedConfig> {
    readonly input: ConfigureLogsCommandInput;
    constructor(input: ConfigureLogsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaPackageClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfigureLogsCommandInput, ConfigureLogsCommandOutput>;
    private serialize;
    private deserialize;
}
