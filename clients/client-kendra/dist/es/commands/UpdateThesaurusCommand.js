import { __extends } from "tslib";
import { UpdateThesaurusRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateThesaurusCommand, serializeAws_json1_1UpdateThesaurusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a thesaurus file associated with an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateThesaurusCommandInput} for command's `input` shape.
 * @see {@link UpdateThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateThesaurusCommand = /** @class */ (function (_super) {
    __extends(UpdateThesaurusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateThesaurusCommand(input) {
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
    UpdateThesaurusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "UpdateThesaurusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateThesaurusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateThesaurusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateThesaurusCommand(input, context);
    };
    UpdateThesaurusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateThesaurusCommand(output, context);
    };
    return UpdateThesaurusCommand;
}($Command));
export { UpdateThesaurusCommand };
//# sourceMappingURL=UpdateThesaurusCommand.js.map