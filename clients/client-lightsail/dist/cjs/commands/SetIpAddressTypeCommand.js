"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetIpAddressTypeCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sets the IP address type for an Amazon Lightsail resource.</p>
 *
 *          <p>Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the
 *       specified resource. Alternately, you can use this action to disable dual-stack, and enable
 *       IPv4 only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, SetIpAddressTypeCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, SetIpAddressTypeCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SetIpAddressTypeCommand extends smithy_client_1.Command {
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
        const commandName = "SetIpAddressTypeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.SetIpAddressTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.SetIpAddressTypeResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SetIpAddressTypeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SetIpAddressTypeCommand(output, context);
    }
}
exports.SetIpAddressTypeCommand = SetIpAddressTypeCommand;
//# sourceMappingURL=SetIpAddressTypeCommand.js.map