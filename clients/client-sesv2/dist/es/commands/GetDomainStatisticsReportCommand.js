import { __extends } from "tslib";
import { GetDomainStatisticsReportRequest, GetDomainStatisticsReportResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDomainStatisticsReportCommand, serializeAws_restJson1GetDomainStatisticsReportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
 *             email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDomainStatisticsReportCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDomainStatisticsReportCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetDomainStatisticsReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainStatisticsReportCommandInput} for command's `input` shape.
 * @see {@link GetDomainStatisticsReportCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainStatisticsReportCommand = /** @class */ (function (_super) {
    __extends(GetDomainStatisticsReportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainStatisticsReportCommand(input) {
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
    GetDomainStatisticsReportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetDomainStatisticsReportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainStatisticsReportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainStatisticsReportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainStatisticsReportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDomainStatisticsReportCommand(input, context);
    };
    GetDomainStatisticsReportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDomainStatisticsReportCommand(output, context);
    };
    return GetDomainStatisticsReportCommand;
}($Command));
export { GetDomainStatisticsReportCommand };
//# sourceMappingURL=GetDomainStatisticsReportCommand.js.map