"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSignalingChannelCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes
 *             time to complete. </p>
 *         <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced),
 *             it only applies to new messages sent via this channel after it's been updated. Existing
 *             messages are still expired as per the previous <code>MessageTtlSeconds</code>
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateSignalingChannelCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateSignalingChannelCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateSignalingChannelInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateSignalingChannelOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateSignalingChannelCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateSignalingChannelCommand(output, context);
    }
}
exports.UpdateSignalingChannelCommand = UpdateSignalingChannelCommand;
//# sourceMappingURL=UpdateSignalingChannelCommand.js.map