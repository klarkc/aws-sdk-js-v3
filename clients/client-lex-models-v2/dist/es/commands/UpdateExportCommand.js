import { __extends } from "tslib";
import { UpdateExportRequest, UpdateExportResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateExportCommand, serializeAws_restJson1UpdateExportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the password used to encrypt an export zip archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new UpdateExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExportCommandInput} for command's `input` shape.
 * @see {@link UpdateExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateExportCommand = /** @class */ (function (_super) {
    __extends(UpdateExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateExportCommand(input) {
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
    UpdateExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "UpdateExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateExportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateExportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateExportCommand(input, context);
    };
    UpdateExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateExportCommand(output, context);
    };
    return UpdateExportCommand;
}($Command));
export { UpdateExportCommand };
//# sourceMappingURL=UpdateExportCommand.js.map