import { __extends } from "tslib";
import { GetUtterancesViewRequest, GetUtterancesViewResponse } from "../models/models_0";
import { deserializeAws_restJson1GetUtterancesViewCommand, serializeAws_restJson1GetUtterancesViewCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetUtterancesViewCommand = /** @class */ (function (_super) {
    __extends(GetUtterancesViewCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUtterancesViewCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    GetUtterancesViewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetUtterancesViewCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUtterancesViewRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUtterancesViewResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUtterancesViewCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetUtterancesViewCommand(input, context);
    };
    GetUtterancesViewCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetUtterancesViewCommand(output, context);
    };
    return GetUtterancesViewCommand;
}($Command));
export { GetUtterancesViewCommand };
//# sourceMappingURL=GetUtterancesViewCommand.js.map