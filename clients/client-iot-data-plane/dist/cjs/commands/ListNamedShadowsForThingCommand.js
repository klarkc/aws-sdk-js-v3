"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNamedShadowsForThingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the shadows for the specified thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListNamedShadowsForThingCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListNamedShadowsForThingCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new ListNamedShadowsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNamedShadowsForThingCommandInput} for command's `input` shape.
 * @see {@link ListNamedShadowsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListNamedShadowsForThingCommand extends smithy_client_1.Command {
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
        const clientName = "IoTDataPlaneClient";
        const commandName = "ListNamedShadowsForThingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListNamedShadowsForThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListNamedShadowsForThingResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListNamedShadowsForThingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListNamedShadowsForThingCommand(output, context);
    }
}
exports.ListNamedShadowsForThingCommand = ListNamedShadowsForThingCommand;
//# sourceMappingURL=ListNamedShadowsForThingCommand.js.map