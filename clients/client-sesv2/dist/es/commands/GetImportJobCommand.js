import { __extends } from "tslib";
import { GetImportJobRequest, GetImportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImportJobCommand, serializeAws_restJson1GetImportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about an import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetImportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetImportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportJobCommandInput} for command's `input` shape.
 * @see {@link GetImportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImportJobCommand = /** @class */ (function (_super) {
    __extends(GetImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImportJobCommand(input) {
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
    GetImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImportJobCommand(input, context);
    };
    GetImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImportJobCommand(output, context);
    };
    return GetImportJobCommand;
}($Command));
export { GetImportJobCommand };
//# sourceMappingURL=GetImportJobCommand.js.map