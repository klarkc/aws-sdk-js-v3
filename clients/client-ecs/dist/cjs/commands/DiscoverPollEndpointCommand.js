"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoverPollEndpointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Returns an endpoint for
 * 			the Amazon ECS agent to poll for updates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DiscoverPollEndpointCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DiscoverPollEndpointCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DiscoverPollEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverPollEndpointCommandInput} for command's `input` shape.
 * @see {@link DiscoverPollEndpointCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DiscoverPollEndpointCommand extends smithy_client_1.Command {
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
        const clientName = "ECSClient";
        const commandName = "DiscoverPollEndpointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DiscoverPollEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DiscoverPollEndpointResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DiscoverPollEndpointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DiscoverPollEndpointCommand(output, context);
    }
}
exports.DiscoverPollEndpointCommand = DiscoverPollEndpointCommand;
//# sourceMappingURL=DiscoverPollEndpointCommand.js.map