import { __extends } from "tslib";
import { DisableSagemakerServicecatalogPortfolioInput, DisableSagemakerServicecatalogPortfolioOutput, } from "../models/models_2";
import { deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand, serializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables using Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisableSagemakerServicecatalogPortfolioCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DisableSagemakerServicecatalogPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisableSagemakerServicecatalogPortfolioCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableSagemakerServicecatalogPortfolioCommand = /** @class */ (function (_super) {
    __extends(DisableSagemakerServicecatalogPortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableSagemakerServicecatalogPortfolioCommand(input) {
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
    DisableSagemakerServicecatalogPortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DisableSagemakerServicecatalogPortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableSagemakerServicecatalogPortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: DisableSagemakerServicecatalogPortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableSagemakerServicecatalogPortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand(input, context);
    };
    DisableSagemakerServicecatalogPortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand(output, context);
    };
    return DisableSagemakerServicecatalogPortfolioCommand;
}($Command));
export { DisableSagemakerServicecatalogPortfolioCommand };
//# sourceMappingURL=DisableSagemakerServicecatalogPortfolioCommand.js.map