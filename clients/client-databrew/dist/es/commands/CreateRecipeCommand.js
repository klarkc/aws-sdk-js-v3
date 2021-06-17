import { __extends } from "tslib";
import { CreateRecipeRequest, CreateRecipeResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRecipeCommand, serializeAws_restJson1CreateRecipeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new DataBrew recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRecipeCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateRecipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecipeCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRecipeCommand = /** @class */ (function (_super) {
    __extends(CreateRecipeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRecipeCommand(input) {
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
    CreateRecipeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "CreateRecipeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRecipeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRecipeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRecipeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRecipeCommand(input, context);
    };
    CreateRecipeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRecipeCommand(output, context);
    };
    return CreateRecipeCommand;
}($Command));
export { CreateRecipeCommand };
//# sourceMappingURL=CreateRecipeCommand.js.map