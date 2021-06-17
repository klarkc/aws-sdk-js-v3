import { __extends } from "tslib";
import { DeleteRecipeVersionRequest, DeleteRecipeVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteRecipeVersionCommand, serializeAws_restJson1DeleteRecipeVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a single version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteRecipeVersionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteRecipeVersionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new DeleteRecipeVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecipeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteRecipeVersionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRecipeVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteRecipeVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRecipeVersionCommand(input) {
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
    DeleteRecipeVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "DeleteRecipeVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRecipeVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRecipeVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRecipeVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRecipeVersionCommand(input, context);
    };
    DeleteRecipeVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRecipeVersionCommand(output, context);
    };
    return DeleteRecipeVersionCommand;
}($Command));
export { DeleteRecipeVersionCommand };
//# sourceMappingURL=DeleteRecipeVersionCommand.js.map