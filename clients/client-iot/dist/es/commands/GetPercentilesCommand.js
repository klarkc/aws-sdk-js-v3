import { __extends } from "tslib";
import { GetPercentilesRequest, GetPercentilesResponse } from "../models/models_1";
import { deserializeAws_restJson1GetPercentilesCommand, serializeAws_restJson1GetPercentilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Groups the aggregated values that match the query into percentile groupings. The default
 *         percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
 *         when you call <code>GetPercentiles</code>. This function returns a value for each
 *         percentile group specified (or the default percentile groupings). The percentile group
 *         "1" contains the aggregated field value that occurs in approximately one percent of the
 *         values that match the query. The percentile group "5" contains the aggregated field value
 *         that occurs in approximately five percent of the values that match the query, and so on.
 *         The result is an approximation, the more values that match the query, the more accurate
 *         the percentile values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPercentilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPercentilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetPercentilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPercentilesCommandInput} for command's `input` shape.
 * @see {@link GetPercentilesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPercentilesCommand = /** @class */ (function (_super) {
    __extends(GetPercentilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPercentilesCommand(input) {
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
    GetPercentilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetPercentilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPercentilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPercentilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPercentilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPercentilesCommand(input, context);
    };
    GetPercentilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPercentilesCommand(output, context);
    };
    return GetPercentilesCommand;
}($Command));
export { GetPercentilesCommand };
//# sourceMappingURL=GetPercentilesCommand.js.map