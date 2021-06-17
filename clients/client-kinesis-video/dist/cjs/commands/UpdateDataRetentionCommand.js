"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDataRetentionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p> Increases or decreases the stream's data retention period by the value that you
 *             specify. To indicate whether you want to increase or decrease the data retention period,
 *             specify the <code>Operation</code> parameter in the request body. In the request, you
 *             must specify either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
 *         <note>
 *             <p>The retention period that you specify replaces the current value.</p>
 *         </note>
 *
 *         <p>This operation requires permission for the
 *                 <code>KinesisVideo:UpdateDataRetention</code> action.</p>
 *
 *         <p>Changing the data retention period affects the data in the stream as
 *             follows:</p>
 *         <ul>
 *             <li>
 *                 <p>If the data retention period is increased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is increased
 *                     from one hour to seven hours, all existing data is retained for seven
 *                     hours.</p>
 *             </li>
 *             <li>
 *                 <p>If the data retention period is decreased, existing data is retained for
 *                     the new retention period. For example, if the data retention period is decreased
 *                     from seven hours to one hour, all existing data is retained for one hour, and
 *                     any data older than one hour is deleted immediately.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateDataRetentionCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateDataRetentionCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateDataRetentionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDataRetentionCommandInput} for command's `input` shape.
 * @see {@link UpdateDataRetentionCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateDataRetentionCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateDataRetentionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateDataRetentionInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateDataRetentionOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1UpdateDataRetentionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1UpdateDataRetentionCommand(output, context);
    }
}
exports.UpdateDataRetentionCommand = UpdateDataRetentionCommand;
//# sourceMappingURL=UpdateDataRetentionCommand.js.map