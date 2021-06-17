import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachStaticIpRequest, AttachStaticIpResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachStaticIpCommandInput extends AttachStaticIpRequest {
}
export interface AttachStaticIpCommandOutput extends AttachStaticIpResult, __MetadataBearer {
}
/**
 * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AttachStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachStaticIpCommandInput} for command's `input` shape.
 * @see {@link AttachStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachStaticIpCommand extends $Command<AttachStaticIpCommandInput, AttachStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachStaticIpCommandInput;
    constructor(input: AttachStaticIpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachStaticIpCommandInput, AttachStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
