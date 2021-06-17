import { __extends } from "tslib";
import { GetMLTransformRequest, GetMLTransformResponse } from "../models/models_1";
import { deserializeAws_json1_1GetMLTransformCommand, serializeAws_json1_1GetMLTransformCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets an AWS Glue machine learning transform artifact and all its corresponding metadata.
 *       Machine learning transforms are a special type of transform that use machine learning to learn
 *       the details of the transformation to be performed by learning from examples provided by
 *       humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by
 *       calling <code>GetMLTransform</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTransformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTransformCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMLTransformCommand = /** @class */ (function (_super) {
    __extends(GetMLTransformCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMLTransformCommand(input) {
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
    GetMLTransformCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetMLTransformCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMLTransformRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMLTransformResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMLTransformCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMLTransformCommand(input, context);
    };
    GetMLTransformCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMLTransformCommand(output, context);
    };
    return GetMLTransformCommand;
}($Command));
export { GetMLTransformCommand };
//# sourceMappingURL=GetMLTransformCommand.js.map