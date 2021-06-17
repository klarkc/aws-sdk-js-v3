import { __extends } from "tslib";
import { EnableSagemakerServicecatalogPortfolioInput, EnableSagemakerServicecatalogPortfolioOutput, } from "../models/models_2";
import { deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand, serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, EnableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new EnableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link EnableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableSagemakerServicecatalogPortfolioCommand = /** @class */ (function (_super) {
    __extends(EnableSagemakerServicecatalogPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableSagemakerServicecatalogPortfolioCommand(input) {
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
    EnableSagemakerServicecatalogPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "EnableSagemakerServicecatalogPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableSagemakerServicecatalogPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: EnableSagemakerServicecatalogPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableSagemakerServicecatalogPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand(input, context);
    };
    EnableSagemakerServicecatalogPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand(output, context);
    };
    return EnableSagemakerServicecatalogPortfolioCommand;
}($Command));
export { EnableSagemakerServicecatalogPortfolioCommand };
//# sourceMappingURL=EnableSagemakerServicecatalogPortfolioCommand.js.map