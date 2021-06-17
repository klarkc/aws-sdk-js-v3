import { __extends } from "tslib";
import { ListOrganizationPortfolioAccessInput, ListOrganizationPortfolioAccessOutput } from "../models/models_0";
import { deserializeAws_json1_1ListOrganizationPortfolioAccessCommand, serializeAws_json1_1ListOrganizationPortfolioAccessCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the organization nodes that have access to the specified portfolio. This API can
 *          only be called by the management account in the organization or by a delegated
 *          admin.</p>
 *          <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListOrganizationPortfolioAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListOrganizationPortfolioAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListOrganizationPortfolioAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationPortfolioAccessCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationPortfolioAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOrganizationPortfolioAccessCommand = /** @class */ (function (_super) {
    __extends(ListOrganizationPortfolioAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOrganizationPortfolioAccessCommand(input) {
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
    ListOrganizationPortfolioAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListOrganizationPortfolioAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOrganizationPortfolioAccessInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListOrganizationPortfolioAccessOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOrganizationPortfolioAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOrganizationPortfolioAccessCommand(input, context);
    };
    ListOrganizationPortfolioAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOrganizationPortfolioAccessCommand(output, context);
    };
    return ListOrganizationPortfolioAccessCommand;
}($Command));
export { ListOrganizationPortfolioAccessCommand };
//# sourceMappingURL=ListOrganizationPortfolioAccessCommand.js.map