import { __extends } from "tslib";
import { GetTopicAttributesInput, GetTopicAttributesResponse } from "../models/models_0";
import { deserializeAws_queryGetTopicAttributesCommand, serializeAws_queryGetTopicAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all of the properties of a topic. Topic properties returned might differ based
 *             on the authorization of the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetTopicAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetTopicAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetTopicAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTopicAttributesCommandInput} for command's `input` shape.
 * @see {@link GetTopicAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTopicAttributesCommand = /** @class */ (function (_super) {
    __extends(GetTopicAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTopicAttributesCommand(input) {
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
    GetTopicAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "GetTopicAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTopicAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetTopicAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTopicAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetTopicAttributesCommand(input, context);
    };
    GetTopicAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetTopicAttributesCommand(output, context);
    };
    return GetTopicAttributesCommand;
}($Command));
export { GetTopicAttributesCommand };
//# sourceMappingURL=GetTopicAttributesCommand.js.map