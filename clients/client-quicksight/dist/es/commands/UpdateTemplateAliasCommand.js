import { __extends } from "tslib";
import { UpdateTemplateAliasRequest, UpdateTemplateAliasResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateTemplateAliasCommand, serializeAws_restJson1UpdateTemplateAliasCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the template alias of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTemplateAliasCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTemplateAliasCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateTemplateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTemplateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateAliasCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTemplateAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateTemplateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTemplateAliasCommand(input) {
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
    UpdateTemplateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "UpdateTemplateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTemplateAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTemplateAliasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTemplateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateTemplateAliasCommand(input, context);
    };
    UpdateTemplateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateTemplateAliasCommand(output, context);
    };
    return UpdateTemplateAliasCommand;
}($Command));
export { UpdateTemplateAliasCommand };
//# sourceMappingURL=UpdateTemplateAliasCommand.js.map