import { __extends } from "tslib";
import { UpdateRecipeJobRequest, UpdateRecipeJobResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateRecipeJobCommand, serializeAws_restJson1UpdateRecipeJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the definition of an existing DataBrew recipe job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new UpdateRecipeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecipeJobCommandInput} for command's `input` shape.
 * @see {@link UpdateRecipeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRecipeJobCommand = /** @class */ (function (_super) {
    __extends(UpdateRecipeJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRecipeJobCommand(input) {
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
    UpdateRecipeJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "UpdateRecipeJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRecipeJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRecipeJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRecipeJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRecipeJobCommand(input, context);
    };
    UpdateRecipeJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRecipeJobCommand(output, context);
    };
    return UpdateRecipeJobCommand;
}($Command));
export { UpdateRecipeJobCommand };
//# sourceMappingURL=UpdateRecipeJobCommand.js.map