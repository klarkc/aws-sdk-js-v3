import { __extends } from "tslib";
import { CreateRecipeJobRequest, CreateRecipeJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRecipeJobCommand, serializeAws_restJson1CreateRecipeJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new job to transform input data, using steps defined in an existing AWS Glue
 *             DataBrew recipe</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateRecipeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecipeJobCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRecipeJobCommand = /** @class */ (function (_super) {
    __extends(CreateRecipeJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRecipeJobCommand(input) {
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
    CreateRecipeJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "CreateRecipeJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRecipeJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRecipeJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRecipeJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRecipeJobCommand(input, context);
    };
    CreateRecipeJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRecipeJobCommand(output, context);
    };
    return CreateRecipeJobCommand;
}($Command));
export { CreateRecipeJobCommand };
//# sourceMappingURL=CreateRecipeJobCommand.js.map