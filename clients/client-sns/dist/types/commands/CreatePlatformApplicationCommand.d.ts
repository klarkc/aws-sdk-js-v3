import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreatePlatformApplicationInput, CreatePlatformApplicationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePlatformApplicationCommandInput extends CreatePlatformApplicationInput {
}
export interface CreatePlatformApplicationCommandOutput extends CreatePlatformApplicationResponse, __MetadataBearer {
}
/**
 * <p>Creates a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile
 *             apps may register. You must specify <code>PlatformPrincipal</code> and
 *                 <code>PlatformCredential</code> attributes when using the
 *                 <code>CreatePlatformApplication</code> action.</p>
 *         <p>
 *             <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from
 *             the notification service.</p>
 *         <ul>
 *             <li>
 *                 <p>For <code>ADM</code>, <code>PlatformPrincipal</code> is <code>client id</code>
 *                     and <code>PlatformCredential</code> is <code>client secret</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>Baidu</code>, <code>PlatformPrincipal</code> is <code>API key</code>
 *                     and <code>PlatformCredential</code> is <code>secret key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>APNS</code> and <code>APNS_SANDBOX</code>,
 *                         <code>PlatformPrincipal</code> is <code>SSL certificate</code> and
 *                         <code>PlatformCredential</code> is <code>private key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>GCM</code> (Firebase Cloud Messaging), there is no
 *                         <code>PlatformPrincipal</code> and the <code>PlatformCredential</code> is
 *                         <code>API key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>MPNS</code>, <code>PlatformPrincipal</code> is <code>TLS
 *                         certificate</code> and <code>PlatformCredential</code> is <code>private
 *                         key</code>.</p>
 *             </li>
 *             <li>
 *                 <p>For <code>WNS</code>, <code>PlatformPrincipal</code> is <code>Package Security
 *                         Identifier</code> and <code>PlatformCredential</code> is <code>secret
 *                         key</code>.</p>
 *             </li>
 *          </ul>
 *         <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the
 *                 <code>CreatePlatformEndpoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreatePlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreatePlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreatePlatformApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePlatformApplicationCommand extends $Command<CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput, SNSClientResolvedConfig> {
    readonly input: CreatePlatformApplicationCommandInput;
    constructor(input: CreatePlatformApplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
