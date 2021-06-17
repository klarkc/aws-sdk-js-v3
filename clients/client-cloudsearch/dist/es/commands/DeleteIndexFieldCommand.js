import { __extends } from "tslib";
import { DeleteIndexFieldRequest, DeleteIndexFieldResponse } from "../models/models_0";
import { deserializeAws_queryDeleteIndexFieldCommand, serializeAws_queryDeleteIndexFieldCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteIndexFieldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DeleteIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteIndexFieldCommand = /** @class */ (function (_super) {
    __extends(DeleteIndexFieldCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteIndexFieldCommand(input) {
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
    DeleteIndexFieldCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DeleteIndexFieldCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteIndexFieldRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteIndexFieldResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteIndexFieldCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteIndexFieldCommand(input, context);
    };
    DeleteIndexFieldCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteIndexFieldCommand(output, context);
    };
    return DeleteIndexFieldCommand;
}($Command));
export { DeleteIndexFieldCommand };
//# sourceMappingURL=DeleteIndexFieldCommand.js.map