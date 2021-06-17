import { __extends } from "tslib";
import { CreatePortfolioInput, CreatePortfolioOutput } from "../models/models_0";
import { deserializeAws_json1_1CreatePortfolioCommand, serializeAws_json1_1CreatePortfolioCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreatePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreatePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreatePortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePortfolioCommandInput} for command's `input` shape.
 * @see {@link CreatePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePortfolioCommand = /** @class */ (function (_super) {
    __extends(CreatePortfolioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePortfolioCommand(input) {
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
    CreatePortfolioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CreatePortfolioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePortfolioInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePortfolioOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePortfolioCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePortfolioCommand(input, context);
    };
    CreatePortfolioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePortfolioCommand(output, context);
    };
    return CreatePortfolioCommand;
}($Command));
export { CreatePortfolioCommand };
//# sourceMappingURL=CreatePortfolioCommand.js.map