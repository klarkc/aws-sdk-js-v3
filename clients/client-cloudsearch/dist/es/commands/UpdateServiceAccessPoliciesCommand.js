import { __extends } from "tslib";
import { UpdateServiceAccessPoliciesRequest, UpdateServiceAccessPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryUpdateServiceAccessPoliciesCommand, serializeAws_queryUpdateServiceAccessPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures the access rules that control access to the domain's document and search endpoints.
 *       For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">
 *         Configuring Access for an Amazon CloudSearch Domain</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, UpdateServiceAccessPoliciesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, UpdateServiceAccessPoliciesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new UpdateServiceAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateServiceAccessPoliciesCommand = /** @class */ (function (_super) {
    __extends(UpdateServiceAccessPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateServiceAccessPoliciesCommand(input) {
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
    UpdateServiceAccessPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "UpdateServiceAccessPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateServiceAccessPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateServiceAccessPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateServiceAccessPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUpdateServiceAccessPoliciesCommand(input, context);
    };
    UpdateServiceAccessPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUpdateServiceAccessPoliciesCommand(output, context);
    };
    return UpdateServiceAccessPoliciesCommand;
}($Command));
export { UpdateServiceAccessPoliciesCommand };
//# sourceMappingURL=UpdateServiceAccessPoliciesCommand.js.map