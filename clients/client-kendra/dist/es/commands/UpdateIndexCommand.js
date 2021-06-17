import { __extends } from "tslib";
import { UpdateIndexRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateIndexCommand, serializeAws_json1_1UpdateIndexCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing Amazon Kendra index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateIndexCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateIndexCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new UpdateIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIndexCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIndexCommand = /** @class */ (function (_super) {
    __extends(UpdateIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIndexCommand(input) {
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
    UpdateIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "UpdateIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateIndexCommand(input, context);
    };
    UpdateIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateIndexCommand(output, context);
    };
    return UpdateIndexCommand;
}($Command));
export { UpdateIndexCommand };
//# sourceMappingURL=UpdateIndexCommand.js.map