import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DownloadDefaultKeyPairRequest, DownloadDefaultKeyPairResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DownloadDefaultKeyPairCommandInput extends DownloadDefaultKeyPairRequest {
}
export interface DownloadDefaultKeyPairCommandOutput extends DownloadDefaultKeyPairResult, __MetadataBearer {
}
/**
 * <p>Downloads the default SSH key pair from the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DownloadDefaultKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DownloadDefaultKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DownloadDefaultKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDefaultKeyPairCommandInput} for command's `input` shape.
 * @see {@link DownloadDefaultKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DownloadDefaultKeyPairCommand extends $Command<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DownloadDefaultKeyPairCommandInput;
    constructor(input: DownloadDefaultKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
