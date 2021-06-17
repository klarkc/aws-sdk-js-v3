import { __extends } from "tslib";
import { GetLensReviewReportInput, GetLensReviewReportOutput } from "../models/models_0";
import { deserializeAws_restJson1GetLensReviewReportCommand, serializeAws_restJson1GetLensReviewReportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get lens review report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensReviewReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensReviewReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensReviewReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensReviewReportCommandInput} for command's `input` shape.
 * @see {@link GetLensReviewReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLensReviewReportCommand = /** @class */ (function (_super) {
    __extends(GetLensReviewReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLensReviewReportCommand(input) {
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
    GetLensReviewReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "GetLensReviewReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLensReviewReportInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetLensReviewReportOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLensReviewReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLensReviewReportCommand(input, context);
    };
    GetLensReviewReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLensReviewReportCommand(output, context);
    };
    return GetLensReviewReportCommand;
}($Command));
export { GetLensReviewReportCommand };
//# sourceMappingURL=GetLensReviewReportCommand.js.map