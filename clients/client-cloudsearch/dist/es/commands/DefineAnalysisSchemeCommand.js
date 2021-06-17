import { __extends } from "tslib";
import { DefineAnalysisSchemeRequest, DefineAnalysisSchemeResponse } from "../models/models_0";
import { deserializeAws_queryDefineAnalysisSchemeCommand, serializeAws_queryDefineAnalysisSchemeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineAnalysisSchemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineAnalysisSchemeCommandInput} for command's `input` shape.
 * @see {@link DefineAnalysisSchemeCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DefineAnalysisSchemeCommand = /** @class */ (function (_super) {
    __extends(DefineAnalysisSchemeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DefineAnalysisSchemeCommand(input) {
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
    DefineAnalysisSchemeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DefineAnalysisSchemeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DefineAnalysisSchemeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DefineAnalysisSchemeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DefineAnalysisSchemeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDefineAnalysisSchemeCommand(input, context);
    };
    DefineAnalysisSchemeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDefineAnalysisSchemeCommand(output, context);
    };
    return DefineAnalysisSchemeCommand;
}($Command));
export { DefineAnalysisSchemeCommand };
//# sourceMappingURL=DefineAnalysisSchemeCommand.js.map