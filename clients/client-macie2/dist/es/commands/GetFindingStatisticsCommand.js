import { __extends } from "tslib";
import { GetFindingStatisticsRequest, GetFindingStatisticsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFindingStatisticsCommand, serializeAws_restJson1GetFindingStatisticsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) aggregated statistical data about findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingStatisticsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingStatisticsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetFindingStatisticsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingStatisticsCommand = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFindingStatisticsCommand(input) {
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
    GetFindingStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetFindingStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFindingStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFindingStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFindingStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFindingStatisticsCommand(input, context);
    };
    GetFindingStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFindingStatisticsCommand(output, context);
    };
    return GetFindingStatisticsCommand;
}($Command));
export { GetFindingStatisticsCommand };
//# sourceMappingURL=GetFindingStatisticsCommand.js.map