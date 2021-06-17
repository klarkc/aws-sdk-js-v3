import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CloseInstancePublicPortsRequest, CloseInstancePublicPortsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CloseInstancePublicPortsCommandInput extends CloseInstancePublicPortsRequest {
}
export interface CloseInstancePublicPortsCommandOutput extends CloseInstancePublicPortsResult, __MetadataBearer {
}
/**
 * <p>Closes ports for a specific Amazon Lightsail instance.</p>
 *          <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via
 *       resource tags applied to the resource identified by <code>instanceName</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CloseInstancePublicPortsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CloseInstancePublicPortsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CloseInstancePublicPortsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CloseInstancePublicPortsCommandInput} for command's `input` shape.
 * @see {@link CloseInstancePublicPortsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CloseInstancePublicPortsCommand extends $Command<CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CloseInstancePublicPortsCommandInput;
    constructor(input: CloseInstancePublicPortsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CloseInstancePublicPortsCommandInput, CloseInstancePublicPortsCommandOutput>;
    private serialize;
    private deserialize;
}
