import { __extends } from "tslib";
import { GetUsageTotalsRequest, GetUsageTotalsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetUsageTotalsCommand, serializeAws_restJson1GetUsageTotalsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves (queries) aggregated usage data for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetUsageTotalsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetUsageTotalsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetUsageTotalsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link GetUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUsageTotalsCommand = /** @class */ (function (_super) {
    __extends(GetUsageTotalsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUsageTotalsCommand(input) {
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
    GetUsageTotalsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetUsageTotalsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUsageTotalsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUsageTotalsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUsageTotalsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetUsageTotalsCommand(input, context);
    };
    GetUsageTotalsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetUsageTotalsCommand(output, context);
    };
    return GetUsageTotalsCommand;
}($Command));
export { GetUsageTotalsCommand };
//# sourceMappingURL=GetUsageTotalsCommand.js.map