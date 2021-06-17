"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSignalingChannelsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition, you can
 *             specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListSignalingChannelsCommand extends smithy_client_1.Command {
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
        const clientName = "KinesisVideoClient";
        const commandName = "ListSignalingChannelsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListSignalingChannelsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListSignalingChannelsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1ListSignalingChannelsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1ListSignalingChannelsCommand(output, context);
    }
}
exports.ListSignalingChannelsCommand = ListSignalingChannelsCommand;
//# sourceMappingURL=ListSignalingChannelsCommand.js.map