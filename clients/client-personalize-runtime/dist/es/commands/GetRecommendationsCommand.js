import { __extends } from "tslib";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetRecommendationsCommand, serializeAws_restJson1GetRecommendationsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of recommended items. The required input depends on the recipe type used to
 *       create the solution backing the campaign, as follows:</p>
 *          <ul>
 *             <li>
 *                <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p>
 *             </li>
 *             <li>
 *                <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code>
 *           required</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Campaigns that are backed by a solution created using a recipe of type
 *         PERSONALIZED_RANKING use the  API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecommendationsCommand = /** @class */ (function (_super) {
    __extends(GetRecommendationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecommendationsCommand(input) {
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
    GetRecommendationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeRuntimeClient";
        var commandName = "GetRecommendationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecommendationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecommendationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecommendationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRecommendationsCommand(input, context);
    };
    GetRecommendationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRecommendationsCommand(output, context);
    };
    return GetRecommendationsCommand;
}($Command));
export { GetRecommendationsCommand };
//# sourceMappingURL=GetRecommendationsCommand.js.map