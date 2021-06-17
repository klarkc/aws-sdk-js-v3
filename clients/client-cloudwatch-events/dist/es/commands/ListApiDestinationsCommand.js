import { __extends } from "tslib";
import { ListApiDestinationsRequest, ListApiDestinationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListApiDestinationsCommand, serializeAws_json1_1ListApiDestinationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of API destination in the account in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListApiDestinationsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListApiDestinationsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListApiDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApiDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListApiDestinationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListApiDestinationsCommand = /** @class */ (function (_super) {
    __extends(ListApiDestinationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListApiDestinationsCommand(input) {
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
    ListApiDestinationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "ListApiDestinationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListApiDestinationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListApiDestinationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListApiDestinationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListApiDestinationsCommand(input, context);
    };
    ListApiDestinationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListApiDestinationsCommand(output, context);
    };
    return ListApiDestinationsCommand;
}($Command));
export { ListApiDestinationsCommand };
//# sourceMappingURL=ListApiDestinationsCommand.js.map