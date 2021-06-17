import { __extends } from "tslib";
import { GetSagemakerServicecatalogPortfolioStatusInput, GetSagemakerServicecatalogPortfolioStatusOutput, } from "../models/models_2";
import { deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand, serializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the status of Service Catalog in SageMaker. Service Catalog is used to create
 *             SageMaker projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetSagemakerServicecatalogPortfolioStatusCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetSagemakerServicecatalogPortfolioStatusCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetSagemakerServicecatalogPortfolioStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSagemakerServicecatalogPortfolioStatusCommandInput} for command's `input` shape.
 * @see {@link GetSagemakerServicecatalogPortfolioStatusCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSagemakerServicecatalogPortfolioStatusCommand = /** @class */ (function (_super) {
    __extends(GetSagemakerServicecatalogPortfolioStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSagemakerServicecatalogPortfolioStatusCommand(input) {
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
    GetSagemakerServicecatalogPortfolioStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "GetSagemakerServicecatalogPortfolioStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSagemakerServicecatalogPortfolioStatusInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSagemakerServicecatalogPortfolioStatusOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSagemakerServicecatalogPortfolioStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand(input, context);
    };
    GetSagemakerServicecatalogPortfolioStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand(output, context);
    };
    return GetSagemakerServicecatalogPortfolioStatusCommand;
}($Command));
export { GetSagemakerServicecatalogPortfolioStatusCommand };
//# sourceMappingURL=GetSagemakerServicecatalogPortfolioStatusCommand.js.map