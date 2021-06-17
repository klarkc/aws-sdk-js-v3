import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PutInstancePublicPortsRequest, PutInstancePublicPortsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutInstancePublicPortsCommandInput extends PutInstancePublicPortsRequest {
}
export interface PutInstancePublicPortsCommandOutput extends PutInstancePublicPortsResult, __MetadataBearer {
}
/**
 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol. This action also
 *       closes all currently open ports that are not included in the request. Include all of the ports
 *       and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use
 *       the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open
 *       ports.</p>
 *          <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PutInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PutInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PutInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link PutInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutInstancePublicPortsCommand extends $Command<PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: PutInstancePublicPortsCommandInput;
    constructor(input: PutInstancePublicPortsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInstancePublicPortsCommandInput, PutInstancePublicPortsCommandOutput>;
    private serialize;
    private deserialize;
}
