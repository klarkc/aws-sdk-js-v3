import { __extends } from "tslib";
import { GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult } from "../models/models_0";
import { deserializeAws_restJson1GetSamplingStatisticSummariesCommand, serializeAws_restJson1GetSamplingStatisticSummariesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about recent sampling results for all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingStatisticSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingStatisticSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetSamplingStatisticSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSamplingStatisticSummariesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingStatisticSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSamplingStatisticSummariesCommand = /** @class */ (function (_super) {
    __extends(GetSamplingStatisticSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSamplingStatisticSummariesCommand(input) {
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
    GetSamplingStatisticSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetSamplingStatisticSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSamplingStatisticSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSamplingStatisticSummariesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSamplingStatisticSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSamplingStatisticSummariesCommand(input, context);
    };
    GetSamplingStatisticSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSamplingStatisticSummariesCommand(output, context);
    };
    return GetSamplingStatisticSummariesCommand;
}($Command));
export { GetSamplingStatisticSummariesCommand };
//# sourceMappingURL=GetSamplingStatisticSummariesCommand.js.map