"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSecurityProfileBehaviorsCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Validates a Device Defender security profile behaviors specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ValidateSecurityProfileBehaviorsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ValidateSecurityProfileBehaviorsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ValidateSecurityProfileBehaviorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateSecurityProfileBehaviorsCommandInput} for command's `input` shape.
 * @see {@link ValidateSecurityProfileBehaviorsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ValidateSecurityProfileBehaviorsCommand extends smithy_client_1.Command {
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
        const clientName = "IoTClient";
        const commandName = "ValidateSecurityProfileBehaviorsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.ValidateSecurityProfileBehaviorsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.ValidateSecurityProfileBehaviorsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ValidateSecurityProfileBehaviorsCommand(output, context);
    }
}
exports.ValidateSecurityProfileBehaviorsCommand = ValidateSecurityProfileBehaviorsCommand;
//# sourceMappingURL=ValidateSecurityProfileBehaviorsCommand.js.map