import { __extends } from "tslib";
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/models_0";
import { deserializeAws_queryDescribeIndexFieldsCommand, serializeAws_queryDescribeIndexFieldsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeIndexFieldsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeIndexFieldsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeIndexFieldsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIndexFieldsCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIndexFieldsCommand = /** @class */ (function (_super) {
    __extends(DescribeIndexFieldsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIndexFieldsCommand(input) {
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
    DescribeIndexFieldsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeIndexFieldsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIndexFieldsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIndexFieldsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIndexFieldsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeIndexFieldsCommand(input, context);
    };
    DescribeIndexFieldsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeIndexFieldsCommand(output, context);
    };
    return DescribeIndexFieldsCommand;
}($Command));
export { DescribeIndexFieldsCommand };
//# sourceMappingURL=DescribeIndexFieldsCommand.js.map