import { __extends } from "tslib";
import { GetPersonalizedRankingRequest, GetPersonalizedRankingResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPersonalizedRankingCommand, serializeAws_restJson1GetPersonalizedRankingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const command = new GetPersonalizedRankingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPersonalizedRankingCommandInput} for command's `input` shape.
 * @see {@link GetPersonalizedRankingCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPersonalizedRankingCommand = /** @class */ (function (_super) {
    __extends(GetPersonalizedRankingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPersonalizedRankingCommand(input) {
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
    GetPersonalizedRankingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeRuntimeClient";
        var commandName = "GetPersonalizedRankingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPersonalizedRankingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPersonalizedRankingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPersonalizedRankingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPersonalizedRankingCommand(input, context);
    };
    GetPersonalizedRankingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPersonalizedRankingCommand(output, context);
    };
    return GetPersonalizedRankingCommand;
}($Command));
export { GetPersonalizedRankingCommand };
//# sourceMappingURL=GetPersonalizedRankingCommand.js.map