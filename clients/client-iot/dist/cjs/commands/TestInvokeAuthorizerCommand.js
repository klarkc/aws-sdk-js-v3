"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestInvokeAuthorizerCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use
 *          this to test and debug the custom authorization behavior of devices that connect to the AWS
 *          IoT device gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TestInvokeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TestInvokeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TestInvokeAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestInvokeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link TestInvokeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TestInvokeAuthorizerCommand extends smithy_client_1.Command {
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
        const commandName = "TestInvokeAuthorizerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.TestInvokeAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.TestInvokeAuthorizerResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1TestInvokeAuthorizerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1TestInvokeAuthorizerCommand(output, context);
    }
}
exports.TestInvokeAuthorizerCommand = TestInvokeAuthorizerCommand;
//# sourceMappingURL=TestInvokeAuthorizerCommand.js.map