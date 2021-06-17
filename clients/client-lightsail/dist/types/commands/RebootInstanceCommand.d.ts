import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RebootInstanceRequest, RebootInstanceResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RebootInstanceCommandInput extends RebootInstanceRequest {
}
export interface RebootInstanceCommandOutput extends RebootInstanceResult, __MetadataBearer {
}
/**
 * <p>Restarts a specific instance.</p>
 *          <p>The <code>reboot instance</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>instance name</code>. For more information,
 *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, RebootInstanceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, RebootInstanceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new RebootInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RebootInstanceCommandInput} for command's `input` shape.
 * @see {@link RebootInstanceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RebootInstanceCommand extends $Command<RebootInstanceCommandInput, RebootInstanceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: RebootInstanceCommandInput;
    constructor(input: RebootInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootInstanceCommandInput, RebootInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
