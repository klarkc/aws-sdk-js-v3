import { __extends } from "tslib";
import { GetBlacklistReportsRequest, GetBlacklistReportsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetBlacklistReportsCommand, serializeAws_restJson1GetBlacklistReportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve a list of the blacklists that your dedicated IP addresses appear on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetBlacklistReportsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetBlacklistReportsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetBlacklistReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlacklistReportsCommandInput} for command's `input` shape.
 * @see {@link GetBlacklistReportsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBlacklistReportsCommand = /** @class */ (function (_super) {
    __extends(GetBlacklistReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetBlacklistReportsCommand(input) {
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
    GetBlacklistReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "GetBlacklistReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetBlacklistReportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetBlacklistReportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetBlacklistReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetBlacklistReportsCommand(input, context);
    };
    GetBlacklistReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetBlacklistReportsCommand(output, context);
    };
    return GetBlacklistReportsCommand;
}($Command));
export { GetBlacklistReportsCommand };
//# sourceMappingURL=GetBlacklistReportsCommand.js.map