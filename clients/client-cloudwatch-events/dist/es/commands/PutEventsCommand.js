import { __extends } from "tslib";
import { PutEventsRequest, PutEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1PutEventsCommand, serializeAws_json1_1PutEventsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutEventsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutEventsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutEventsCommand = /** @class */ (function (_super) {
    __extends(PutEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutEventsCommand(input) {
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
    PutEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "PutEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutEventsCommand(input, context);
    };
    PutEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutEventsCommand(output, context);
    };
    return PutEventsCommand;
}($Command));
export { PutEventsCommand };
//# sourceMappingURL=PutEventsCommand.js.map