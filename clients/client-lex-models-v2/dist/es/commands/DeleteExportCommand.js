import { __extends } from "tslib";
import { DeleteExportRequest, DeleteExportResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteExportCommand, serializeAws_restJson1DeleteExportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a previous export and the associated files stored in an S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExportCommandInput} for command's `input` shape.
 * @see {@link DeleteExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteExportCommand = /** @class */ (function (_super) {
    __extends(DeleteExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteExportCommand(input) {
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
    DeleteExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteExportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteExportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteExportCommand(input, context);
    };
    DeleteExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteExportCommand(output, context);
    };
    return DeleteExportCommand;
}($Command));
export { DeleteExportCommand };
//# sourceMappingURL=DeleteExportCommand.js.map