import { __extends } from "tslib";
import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListLaunchPathsCommand, serializeAws_json1_1ListLaunchPathsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the paths to the specified product. A path is how the user
 *          has access to a specified product, and is necessary when provisioning a product. A path
 *          also determines the constraints put on the product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListLaunchPathsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListLaunchPathsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListLaunchPathsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLaunchPathsCommandInput} for command's `input` shape.
 * @see {@link ListLaunchPathsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLaunchPathsCommand = /** @class */ (function (_super) {
    __extends(ListLaunchPathsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLaunchPathsCommand(input) {
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
    ListLaunchPathsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListLaunchPathsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLaunchPathsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListLaunchPathsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLaunchPathsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLaunchPathsCommand(input, context);
    };
    ListLaunchPathsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLaunchPathsCommand(output, context);
    };
    return ListLaunchPathsCommand;
}($Command));
export { ListLaunchPathsCommand };
//# sourceMappingURL=ListLaunchPathsCommand.js.map