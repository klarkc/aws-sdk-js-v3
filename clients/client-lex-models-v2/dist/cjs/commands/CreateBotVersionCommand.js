"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBotVersionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new version of the bot based on the <code>DRAFT</code>
 *          version. If the <code>DRAFT</code> version of this resource hasn't
 *          changed since you created the last version, Amazon Lex doesn't create a new
 *          version, it returns the last created version.</p>
 *          <p>When you create the first version of a bot, Amazon Lex sets the version
 *          to 1. Subsequent versions increment by 1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateBotVersionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateBotVersionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateBotVersionCommand extends smithy_client_1.Command {
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
        const clientName = "LexModelsV2Client";
        const commandName = "CreateBotVersionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateBotVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateBotVersionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateBotVersionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateBotVersionCommand(output, context);
    }
}
exports.CreateBotVersionCommand = CreateBotVersionCommand;
//# sourceMappingURL=CreateBotVersionCommand.js.map