import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { OpenInstancePublicPortsRequest, OpenInstancePublicPortsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface OpenInstancePublicPortsCommandInput extends OpenInstancePublicPortsRequest {
}
export interface OpenInstancePublicPortsCommandOutput extends OpenInstancePublicPortsResult, __MetadataBearer {
}
/**
 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses
 *       allowed to connect to the instance through the ports, and the protocol.</p>
 *          <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, OpenInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, OpenInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new OpenInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link OpenInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link OpenInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class OpenInstancePublicPortsCommand extends $Command<OpenInstancePublicPortsCommandInput, OpenInstancePublicPortsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: OpenInstancePublicPortsCommandInput;
    constructor(input: OpenInstancePublicPortsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<OpenInstancePublicPortsCommandInput, OpenInstancePublicPortsCommandOutput>;
    private serialize;
    private deserialize;
}
