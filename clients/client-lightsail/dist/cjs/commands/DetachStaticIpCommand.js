"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetachStaticIpCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Detaches a static IP from the Amazon Lightsail instance to which it is attached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DetachStaticIpCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DetachStaticIpCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DetachStaticIpCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachStaticIpCommandInput} for command's `input` shape.
 * @see {@link DetachStaticIpCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DetachStaticIpCommand extends smithy_client_1.Command {
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
        const commandName = "DetachStaticIpCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DetachStaticIpRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DetachStaticIpResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DetachStaticIpCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DetachStaticIpCommand(output, context);
    }
}
exports.DetachStaticIpCommand = DetachStaticIpCommand;
//# sourceMappingURL=DetachStaticIpCommand.js.map