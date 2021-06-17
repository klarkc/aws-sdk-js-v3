import { __extends } from "tslib";
import { GetInsightSummariesRequest, GetInsightSummariesResult } from "../models/models_0";
import { deserializeAws_restJson1GetInsightSummariesCommand, serializeAws_restJson1GetInsightSummariesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the summaries of all insights in the specified group matching the provided filter values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightSummariesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightSummariesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightSummariesCommandInput} for command's `input` shape.
 * @see {@link GetInsightSummariesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInsightSummariesCommand = /** @class */ (function (_super) {
    __extends(GetInsightSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInsightSummariesCommand(input) {
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
    GetInsightSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "GetInsightSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInsightSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInsightSummariesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInsightSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetInsightSummariesCommand(input, context);
    };
    GetInsightSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetInsightSummariesCommand(output, context);
    };
    return GetInsightSummariesCommand;
}($Command));
export { GetInsightSummariesCommand };
//# sourceMappingURL=GetInsightSummariesCommand.js.map