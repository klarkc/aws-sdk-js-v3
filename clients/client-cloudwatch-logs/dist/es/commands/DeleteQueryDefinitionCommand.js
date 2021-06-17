import { __extends } from "tslib";
import { DeleteQueryDefinitionRequest, DeleteQueryDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteQueryDefinitionCommand, serializeAws_json1_1DeleteQueryDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a saved CloudWatch Logs Insights query definition.
 *       A query definition contains details about a saved CloudWatch Logs Insights query.</p>
 *          <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p>
 *          <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform
 *       this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteQueryDefinitionCommand = /** @class */ (function (_super) {
    __extends(DeleteQueryDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteQueryDefinitionCommand(input) {
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
    DeleteQueryDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "DeleteQueryDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteQueryDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteQueryDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteQueryDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteQueryDefinitionCommand(input, context);
    };
    DeleteQueryDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteQueryDefinitionCommand(output, context);
    };
    return DeleteQueryDefinitionCommand;
}($Command));
export { DeleteQueryDefinitionCommand };
//# sourceMappingURL=DeleteQueryDefinitionCommand.js.map