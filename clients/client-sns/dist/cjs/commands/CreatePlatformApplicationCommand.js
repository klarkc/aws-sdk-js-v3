"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlatformApplicationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreatePlatformApplicationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SNSClient";
        const commandName = "CreatePlatformApplicationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreatePlatformApplicationInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreatePlatformApplicationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreatePlatformApplicationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreatePlatformApplicationCommand(output, context);
    }
}
exports.CreatePlatformApplicationCommand = CreatePlatformApplicationCommand;
//# sourceMappingURL=CreatePlatformApplicationCommand.js.map