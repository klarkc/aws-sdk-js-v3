import { __extends } from "tslib";
import { UpdateTemplateRequest, UpdateTemplateResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateTemplateCommand, serializeAws_restJson1UpdateTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a template from an existing Amazon QuickSight analysis or another template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplateCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplateCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTemplateCommand(input) {
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
    UpdateTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTemplateCommand(input, context);
    };
    UpdateTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTemplateCommand(output, context);
    };
    return UpdateTemplateCommand;
}($Command));
export { UpdateTemplateCommand };
//# sourceMappingURL=UpdateTemplateCommand.js.map