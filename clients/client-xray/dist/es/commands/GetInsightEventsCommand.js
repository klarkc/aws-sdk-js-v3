import { __extends } from "tslib";
import { GetInsightEventsRequest, GetInsightEventsResult } from "../models/models_0";
import { deserializeAws_restJson1GetInsightEventsCommand, serializeAws_restJson1GetInsightEventsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
 *          event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray
 *          console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightEventsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightEventsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightEventsCommandInput} for command's `input` shape.
 * @see {@link GetInsightEventsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightEventsCommand = /** @class */ (function (_super) {
    __extends(GetInsightEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightEventsCommand(input) {
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
    GetInsightEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetInsightEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightEventsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInsightEventsCommand(input, context);
    };
    GetInsightEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInsightEventsCommand(output, context);
    };
    return GetInsightEventsCommand;
}($Command));
export { GetInsightEventsCommand };
//# sourceMappingURL=GetInsightEventsCommand.js.map