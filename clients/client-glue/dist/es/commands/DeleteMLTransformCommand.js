import { __extends } from "tslib";
import { DeleteMLTransformRequest, DeleteMLTransformResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteMLTransformCommand, serializeAws_json1_1DeleteMLTransformCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AWS Glue machine learning transform. Machine learning transforms are a special
 *       type of transform that use machine learning to learn the details of the transformation to be
 *       performed by learning from examples provided by humans. These transformations are then saved
 *       by AWS Glue. If you no longer need a transform, you can delete it by calling
 *         <code>DeleteMLTransforms</code>. However, any AWS Glue jobs that still reference the deleted
 *       transform will no longer succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMLTransformCommandInput} for command's `input` shape.
 * @see {@link DeleteMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMLTransformCommand = /** @class */ (function (_super) {
    __extends(DeleteMLTransformCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMLTransformCommand(input) {
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
    DeleteMLTransformCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteMLTransformCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMLTransformRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMLTransformResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMLTransformCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMLTransformCommand(input, context);
    };
    DeleteMLTransformCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMLTransformCommand(output, context);
    };
    return DeleteMLTransformCommand;
}($Command));
export { DeleteMLTransformCommand };
//# sourceMappingURL=DeleteMLTransformCommand.js.map