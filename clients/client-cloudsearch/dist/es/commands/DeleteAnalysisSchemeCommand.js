import { __extends } from "tslib";
import { DeleteAnalysisSchemeRequest, DeleteAnalysisSchemeResponse } from "../models/models_0";
import { deserializeAws_queryDeleteAnalysisSchemeCommand, serializeAws_queryDeleteAnalysisSchemeCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteAnalysisSchemeCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteAnalysisSchemeCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteAnalysisSchemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAnalysisSchemeCommandInput} for command's `input` shape.
 * @see {@link DeleteAnalysisSchemeCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAnalysisSchemeCommand = /** @class */ (function (_super) {
    __extends(DeleteAnalysisSchemeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAnalysisSchemeCommand(input) {
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
    DeleteAnalysisSchemeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DeleteAnalysisSchemeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAnalysisSchemeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAnalysisSchemeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAnalysisSchemeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteAnalysisSchemeCommand(input, context);
    };
    DeleteAnalysisSchemeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteAnalysisSchemeCommand(output, context);
    };
    return DeleteAnalysisSchemeCommand;
}($Command));
export { DeleteAnalysisSchemeCommand };
//# sourceMappingURL=DeleteAnalysisSchemeCommand.js.map