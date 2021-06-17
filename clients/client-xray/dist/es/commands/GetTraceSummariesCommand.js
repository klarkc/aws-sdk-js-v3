import { __extends } from "tslib";
import { GetTraceSummariesRequest, GetTraceSummariesResult } from "../models/models_0";
import { deserializeAws_restJson1GetTraceSummariesCommand, serializeAws_restJson1GetTraceSummariesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves IDs and annotations for traces available for a specified time frame using an
 *       optional filter. To get the full traces, pass the trace IDs to
 *       <code>BatchGetTraces</code>.</p>
 *          <p>A filter expression can target traced requests that hit specific service nodes or
 *       edges, have errors, or come from a known user. For example, the following filter expression
 *       targets traces that pass through <code>api.example.com</code>:</p>
 *          <p>
 *             <code>service("api.example.com")</code>
 *          </p>
 *          <p>This filter expression finds traces that have an annotation named <code>account</code>
 *       with the value <code>12345</code>:</p>
 *          <p>
 *             <code>annotation.account = "12345"</code>
 *          </p>
 *          <p>For a full list of indexed fields and keywords that you can use in filter expressions,
 *       see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter
 *         Expressions</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTraceSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTraceSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTraceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTraceSummariesCommandInput} for command's `input` shape.
 * @see {@link GetTraceSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTraceSummariesCommand = /** @class */ (function (_super) {
    __extends(GetTraceSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetTraceSummariesCommand(input) {
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
    GetTraceSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetTraceSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetTraceSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetTraceSummariesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetTraceSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetTraceSummariesCommand(input, context);
    };
    GetTraceSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetTraceSummariesCommand(output, context);
    };
    return GetTraceSummariesCommand;
}($Command));
export { GetTraceSummariesCommand };
//# sourceMappingURL=GetTraceSummariesCommand.js.map