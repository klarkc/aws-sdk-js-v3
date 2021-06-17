import { __extends } from "tslib";
import { GetFindingsFilterRequest, GetFindingsFilterResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFindingsFilterCommand, serializeAws_restJson1GetFindingsFilterCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetFindingsFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link GetFindingsFilterCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFindingsFilterCommand = /** @class */ (function (_super) {
    __extends(GetFindingsFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFindingsFilterCommand(input) {
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
    GetFindingsFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetFindingsFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFindingsFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFindingsFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFindingsFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFindingsFilterCommand(input, context);
    };
    GetFindingsFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFindingsFilterCommand(output, context);
    };
    return GetFindingsFilterCommand;
}($Command));
export { GetFindingsFilterCommand };
//# sourceMappingURL=GetFindingsFilterCommand.js.map