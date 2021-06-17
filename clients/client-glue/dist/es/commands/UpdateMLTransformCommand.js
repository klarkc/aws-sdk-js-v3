import { __extends } from "tslib";
import { UpdateMLTransformRequest, UpdateMLTransformResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateMLTransformCommand, serializeAws_json1_1UpdateMLTransformCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p>
 *
 *          <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code>
 *       operation to assess how well your new parameters achieved your goals (such as improving the
 *       quality of your machine learning transform, or making it more cost-effective).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMLTransformCommandInput} for command's `input` shape.
 * @see {@link UpdateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMLTransformCommand = /** @class */ (function (_super) {
    __extends(UpdateMLTransformCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMLTransformCommand(input) {
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
    UpdateMLTransformCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateMLTransformCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMLTransformRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMLTransformResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMLTransformCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateMLTransformCommand(input, context);
    };
    UpdateMLTransformCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateMLTransformCommand(output, context);
    };
    return UpdateMLTransformCommand;
}($Command));
export { UpdateMLTransformCommand };
//# sourceMappingURL=UpdateMLTransformCommand.js.map