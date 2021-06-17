"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSessionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes session information for a specified bot, alias, and user ID. </p>
 *          <p>You can use this operation to restart a conversation with a bot.
 *          When you remove a session, the entire history of the session is removed
 *          so that you can start again.</p>
 *          <p>You don't need to delete a session. Sessions have a time limit and
 *          will expire. Set the session time limit when you create the bot. The
 *          default is 5 minutes, but you can specify anything between 1 minute and
 *          24 hours.</p>
 *          <p>If you specify a bot or alias ID that doesn't exist, you receive a
 *             <code>BadRequestException.</code>
 *          </p>
 *          <p>If the locale doesn't exist in the bot, or if the locale hasn't been
 *          enables for the alias, you receive a
 *          <code>BadRequestException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, DeleteSessionCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * const client = new LexRuntimeV2Client(config);
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteSessionCommand extends smithy_client_1.Command {
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
        const clientName = "LexRuntimeV2Client";
        const commandName = "DeleteSessionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteSessionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteSessionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteSessionCommand(output, context);
    }
}
exports.DeleteSessionCommand = DeleteSessionCommand;
//# sourceMappingURL=DeleteSessionCommand.js.map