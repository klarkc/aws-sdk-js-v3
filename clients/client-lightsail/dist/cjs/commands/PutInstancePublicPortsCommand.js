"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutInstancePublicPortsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class PutInstancePublicPortsCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "PutInstancePublicPortsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.PutInstancePublicPortsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.PutInstancePublicPortsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutInstancePublicPortsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutInstancePublicPortsCommand(output, context);
    }
}
exports.PutInstancePublicPortsCommand = PutInstancePublicPortsCommand;
//# sourceMappingURL=PutInstancePublicPortsCommand.js.map