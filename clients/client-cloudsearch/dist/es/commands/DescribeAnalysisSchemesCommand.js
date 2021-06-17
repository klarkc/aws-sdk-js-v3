import { __extends } from "tslib";
import { DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse } from "../models/models_0";
import { deserializeAws_queryDescribeAnalysisSchemesCommand, serializeAws_queryDescribeAnalysisSchemesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name.  By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAnalysisSchemesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAnalysisSchemesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeAnalysisSchemesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnalysisSchemesCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisSchemesCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAnalysisSchemesCommand = /** @class */ (function (_super) {
    __extends(DescribeAnalysisSchemesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAnalysisSchemesCommand(input) {
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
    DescribeAnalysisSchemesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeAnalysisSchemesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAnalysisSchemesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAnalysisSchemesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAnalysisSchemesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAnalysisSchemesCommand(input, context);
    };
    DescribeAnalysisSchemesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAnalysisSchemesCommand(output, context);
    };
    return DescribeAnalysisSchemesCommand;
}($Command));
export { DescribeAnalysisSchemesCommand };
//# sourceMappingURL=DescribeAnalysisSchemesCommand.js.map