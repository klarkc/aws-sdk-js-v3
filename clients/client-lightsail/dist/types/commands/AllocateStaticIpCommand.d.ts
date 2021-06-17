import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AllocateStaticIpRequest, AllocateStaticIpResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AllocateStaticIpCommandInput extends AllocateStaticIpRequest {
}
export interface AllocateStaticIpCommandOutput extends AllocateStaticIpResult, __MetadataBearer {
}
/**
 * <p>Allocates a static IP address.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AllocateStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AllocateStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new AllocateStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateStaticIpCommandInput} for command's `input` shape.
 * @see {@link AllocateStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AllocateStaticIpCommand extends $Command<AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AllocateStaticIpCommandInput;
    constructor(input: AllocateStaticIpCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateStaticIpCommandInput, AllocateStaticIpCommandOutput>;
    private serialize;
    private deserialize;
}
