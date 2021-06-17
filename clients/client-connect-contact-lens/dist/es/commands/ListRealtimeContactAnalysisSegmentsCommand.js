import { __extends } from "tslib";
import { ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand, serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of analysis segments for a real-time analysis session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } from "@aws-sdk/client-connect-contact-lens"; // ES Modules import
 * // const { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } = require("@aws-sdk/client-connect-contact-lens"); // CommonJS import
 * const client = new ConnectContactLensClient(config);
 * const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeContactAnalysisSegmentsCommandOutput} for command's `response` shape.
 * @see {@link ConnectContactLensClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRealtimeContactAnalysisSegmentsCommand = /** @class */ (function (_super) {
    __extends(ListRealtimeContactAnalysisSegmentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRealtimeContactAnalysisSegmentsCommand(input) {
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
    ListRealtimeContactAnalysisSegmentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectContactLensClient";
        var commandName = "ListRealtimeContactAnalysisSegmentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRealtimeContactAnalysisSegmentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRealtimeContactAnalysisSegmentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRealtimeContactAnalysisSegmentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand(input, context);
    };
    ListRealtimeContactAnalysisSegmentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRealtimeContactAnalysisSegmentsCommand(output, context);
    };
    return ListRealtimeContactAnalysisSegmentsCommand;
}($Command));
export { ListRealtimeContactAnalysisSegmentsCommand };
//# sourceMappingURL=ListRealtimeContactAnalysisSegmentsCommand.js.map