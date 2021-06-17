import { __extends } from "tslib";
import { DeleteThesaurusRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteThesaurusCommand, serializeAws_json1_1DeleteThesaurusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing Amazon Kendra thesaurus.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DeleteThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThesaurusCommandInput} for command's `input` shape.
 * @see {@link DeleteThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteThesaurusCommand = /** @class */ (function (_super) {
    __extends(DeleteThesaurusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteThesaurusCommand(input) {
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
    DeleteThesaurusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "DeleteThesaurusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteThesaurusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteThesaurusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteThesaurusCommand(input, context);
    };
    DeleteThesaurusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteThesaurusCommand(output, context);
    };
    return DeleteThesaurusCommand;
}($Command));
export { DeleteThesaurusCommand };
//# sourceMappingURL=DeleteThesaurusCommand.js.map