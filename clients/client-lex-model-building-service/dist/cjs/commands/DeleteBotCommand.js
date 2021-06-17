"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBotCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes all versions of the bot, including the <code>$LATEST</code>
 *       version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code>
 *       operation doesn't immediately remove the bot schema. Instead, it is marked
 *       for deletion and removed later.</p>
 *          <p>Amazon Lex stores utterances indefinitely for improving the ability of
 *       your bot to respond to user inputs. These utterances are not removed when
 *       the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p>
 *          <p>If a bot has an alias, you can't delete it. Instead, the
 *         <code>DeleteBot</code> operation returns a
 *         <code>ResourceInUseException</code> exception that includes a reference
 *       to the alias that refers to the bot. To remove the reference to the bot,
 *       delete the alias. If you get the same exception again, delete the
 *       referring alias until the <code>DeleteBot</code> operation is
 *       successful.</p>
 *
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteBot</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteBotCommand extends smithy_client_1.Command {
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
        const clientName = "LexModelBuildingServiceClient";
        const commandName = "DeleteBotCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteBotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteBotCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteBotCommand(output, context);
    }
}
exports.DeleteBotCommand = DeleteBotCommand;
//# sourceMappingURL=DeleteBotCommand.js.map