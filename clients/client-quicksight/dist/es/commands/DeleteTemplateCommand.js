import { __extends } from "tslib";
import { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteTemplateCommand, serializeAws_restJson1DeleteTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTemplateCommand(input) {
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
    DeleteTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DeleteTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTemplateCommand(input, context);
    };
    DeleteTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTemplateCommand(output, context);
    };
    return DeleteTemplateCommand;
}($Command));
export { DeleteTemplateCommand };
//# sourceMappingURL=DeleteTemplateCommand.js.map