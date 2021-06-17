"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEffectivePoliciesCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the AWS IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetEffectivePoliciesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetEffectivePoliciesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetEffectivePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetEffectivePoliciesCommand extends smithy_client_1.Command {
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
        const commandName = "GetEffectivePoliciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.GetEffectivePoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GetEffectivePoliciesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetEffectivePoliciesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetEffectivePoliciesCommand(output, context);
    }
}
exports.GetEffectivePoliciesCommand = GetEffectivePoliciesCommand;
//# sourceMappingURL=GetEffectivePoliciesCommand.js.map