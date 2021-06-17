import { __extends } from "tslib";
import { UpdateRecipeRequest, UpdateRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateRecipeCommand, serializeAws_restJson1UpdateRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew
 *             recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecipeCommandInput} for command's `input` shape.
 * @see {@link UpdateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRecipeCommand = /** @class */ (function (_super) {
    __extends(UpdateRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRecipeCommand(input) {
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
    UpdateRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "UpdateRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRecipeCommand(input, context);
    };
    UpdateRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRecipeCommand(output, context);
    };
    return UpdateRecipeCommand;
}($Command));
export { UpdateRecipeCommand };
//# sourceMappingURL=UpdateRecipeCommand.js.map