import { __extends } from "tslib";
import { PublishRecipeRequest, PublishRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1PublishRecipeCommand, serializeAws_restJson1PublishRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Publishes a new version of a DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, PublishRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, PublishRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new PublishRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishRecipeCommandInput} for command's `input` shape.
 * @see {@link PublishRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishRecipeCommand = /** @class */ (function (_super) {
    __extends(PublishRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PublishRecipeCommand(input) {
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
    PublishRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "PublishRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PublishRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PublishRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PublishRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PublishRecipeCommand(input, context);
    };
    PublishRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PublishRecipeCommand(output, context);
    };
    return PublishRecipeCommand;
}($Command));
export { PublishRecipeCommand };
//# sourceMappingURL=PublishRecipeCommand.js.map