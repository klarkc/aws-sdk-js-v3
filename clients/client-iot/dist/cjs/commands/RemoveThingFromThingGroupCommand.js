"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveThingFromThingGroupCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Remove the specified thing from the specified group.</p>
 * 		       <p>You must specify either a <code>thingGroupArn</code> or a
 * 			<code>thingGroupName</code> to identify the thing group and
 * 			either a <code>thingArn</code> or a <code>thingName</code> to
 * 			identify the thing to remove from the thing group.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromThingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveThingFromThingGroupCommand extends smithy_client_1.Command {
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
        const commandName = "RemoveThingFromThingGroupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.RemoveThingFromThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.RemoveThingFromThingGroupResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1RemoveThingFromThingGroupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1RemoveThingFromThingGroupCommand(output, context);
    }
}
exports.RemoveThingFromThingGroupCommand = RemoveThingFromThingGroupCommand;
//# sourceMappingURL=RemoveThingFromThingGroupCommand.js.map