import { __extends } from "tslib";
import { DeleteImportRequest, DeleteImportResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteImportCommand, serializeAws_restJson1DeleteImportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a previous import and the associated file stored in an S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteImportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteImportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImportCommandInput} for command's `input` shape.
 * @see {@link DeleteImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImportCommand = /** @class */ (function (_super) {
    __extends(DeleteImportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteImportCommand(input) {
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
    DeleteImportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelsV2Client";
        var commandName = "DeleteImportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteImportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteImportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteImportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteImportCommand(input, context);
    };
    DeleteImportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteImportCommand(output, context);
    };
    return DeleteImportCommand;
}($Command));
export { DeleteImportCommand };
//# sourceMappingURL=DeleteImportCommand.js.map