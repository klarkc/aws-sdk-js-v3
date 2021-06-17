import { __extends } from "tslib";
import { UpdateClassifierRequest, UpdateClassifierResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateClassifierCommand, serializeAws_json1_1UpdateClassifierCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies an existing classifier (a <code>GrokClassifier</code>,
 *       an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on
 *       which field is present).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateClassifierCommandInput} for command's `input` shape.
 * @see {@link UpdateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateClassifierCommand = /** @class */ (function (_super) {
    __extends(UpdateClassifierCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateClassifierCommand(input) {
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
    UpdateClassifierCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateClassifierCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateClassifierRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateClassifierResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateClassifierCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateClassifierCommand(input, context);
    };
    UpdateClassifierCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateClassifierCommand(output, context);
    };
    return UpdateClassifierCommand;
}($Command));
export { UpdateClassifierCommand };
//# sourceMappingURL=UpdateClassifierCommand.js.map