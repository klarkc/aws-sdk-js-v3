import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { ReleaseStaticIpRequest, ReleaseStaticIpResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReleaseStaticIpCommandInput extends ReleaseStaticIpRequest {
}
export interface ReleaseStaticIpCommandOutput extends ReleaseStaticIpResult, __MetadataBearer {
}
/**
 * <p>Deletes a specific static IP from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ReleaseStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ReleaseStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ReleaseStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReleaseStaticIpCommandInput} for command's `input` shape.
 * @see {@link ReleaseStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReleaseStaticIpCommand extends $Command<ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: ReleaseStaticIpCommandInput;
    constructor(input: ReleaseStaticIpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReleaseStaticIpCommandInput, ReleaseStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
