import { __extends } from "tslib";
import { CreatePortfolioShareInput, CreatePortfolioShareOutput } from "../models/models_0";
import { deserializeAws_json1_1CreatePortfolioShareCommand, serializeAws_json1_1CreatePortfolioShareCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Shares the specified portfolio with the specified account or organization node.
 *          Shares to an organization node can only be created by the management account of an
 *          organization or by a delegated administrator. You can share portfolios to an organization,
 *          an organizational unit, or a specific account.</p>
 *          <p>Note that if a delegated admin is de-registered, they can no longer create portfolio shares.</p>
 *         <p>
 *             <code>AWSOrganizationsAccess</code> must be enabled in order to create a portfolio share to an organization node.</p>
 *          <p>You can't share a shared resource, including portfolios that contain a shared product.</p>
 *          <p>If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the <code> UpdatePortfolioShare</code> API instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link CreatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePortfolioShareCommand = /** @class */ (function (_super) {
    __extends(CreatePortfolioShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePortfolioShareCommand(input) {
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
    CreatePortfolioShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CreatePortfolioShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePortfolioShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePortfolioShareOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePortfolioShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePortfolioShareCommand(input, context);
    };
    CreatePortfolioShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePortfolioShareCommand(output, context);
    };
    return CreatePortfolioShareCommand;
}($Command));
export { CreatePortfolioShareCommand };
//# sourceMappingURL=CreatePortfolioShareCommand.js.map