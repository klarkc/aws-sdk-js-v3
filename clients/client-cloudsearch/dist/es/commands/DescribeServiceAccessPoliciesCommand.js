import { __extends } from "tslib";
import { DescribeServiceAccessPoliciesRequest, DescribeServiceAccessPoliciesResponse } from "../models/models_0";
import { deserializeAws_queryDescribeServiceAccessPoliciesCommand, serializeAws_queryDescribeServiceAccessPoliciesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeServiceAccessPoliciesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeServiceAccessPoliciesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeServiceAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeServiceAccessPoliciesCommand = /** @class */ (function (_super) {
    __extends(DescribeServiceAccessPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeServiceAccessPoliciesCommand(input) {
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
    DescribeServiceAccessPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeServiceAccessPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeServiceAccessPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeServiceAccessPoliciesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeServiceAccessPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeServiceAccessPoliciesCommand(input, context);
    };
    DescribeServiceAccessPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeServiceAccessPoliciesCommand(output, context);
    };
    return DescribeServiceAccessPoliciesCommand;
}($Command));
export { DescribeServiceAccessPoliciesCommand };
//# sourceMappingURL=DescribeServiceAccessPoliciesCommand.js.map