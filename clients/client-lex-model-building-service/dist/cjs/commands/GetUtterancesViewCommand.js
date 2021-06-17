"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUtterancesViewCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Use the <code>GetUtterancesView</code> operation to get information
 *       about the utterances that your users have made to your bot. You can use
 *       this list to tune the utterances that your bot responds to.</p>
 *          <p>For example, say that you have created a bot to order flowers.
 *       After your users have used your bot for a while, use the
 *         <code>GetUtterancesView</code> operation to see the requests that they
 *       have made and whether they have been successful. You might find that the
 *       utterance "I want flowers" is not being recognized. You could add this
 *       utterance to the <code>OrderFlowers</code> intent so that your bot
 *       recognizes that utterance.</p>
 *          <p>After you publish a new version of a bot, you can get information
 *       about the old version and the new so that you can compare the performance
 *       across the two versions. </p>
 *          <p>Utterance statistics are generated once a day. Data is available
 *       for the last 15 days. You can request information for up to 5 versions of
 *       your bot in each request. Amazon Lex returns the most frequent utterances
 *       received by the bot in the last 15 days. The response contains information
 *       about a maximum of 100 utterances for each version.</p>
 *          <p>If you set <code>childDirected</code> field to true when you
 *       created your bot, or if you opted out of participating in improving Amazon Lex,
 *       utterances are not available.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetUtterancesView</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetUtterancesViewCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetUtterancesViewCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetUtterancesViewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUtterancesViewCommandInput} for command's `input` shape.
 * @see {@link GetUtterancesViewCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetUtterancesViewCommand extends smithy_client_1.Command {
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
        const commandName = "GetUtterancesViewCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetUtterancesViewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetUtterancesViewResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetUtterancesViewCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetUtterancesViewCommand(output, context);
    }
}
exports.GetUtterancesViewCommand = GetUtterancesViewCommand;
//# sourceMappingURL=GetUtterancesViewCommand.js.map