import { __extends } from "tslib";
import { PublishLayerVersionRequest, PublishLayerVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1PublishLayerVersionCommand, serializeAws_restJson1PublishLayerVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same
 *       layer name, a new version is created.</p>
 *          <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new PublishLayerVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishLayerVersionCommandInput} for command's `input` shape.
 * @see {@link PublishLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishLayerVersionCommand = /** @class */ (function (_super) {
    __extends(PublishLayerVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PublishLayerVersionCommand(input) {
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
    PublishLayerVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "PublishLayerVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PublishLayerVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PublishLayerVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PublishLayerVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PublishLayerVersionCommand(input, context);
    };
    PublishLayerVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PublishLayerVersionCommand(output, context);
    };
    return PublishLayerVersionCommand;
}($Command));
export { PublishLayerVersionCommand };
//# sourceMappingURL=PublishLayerVersionCommand.js.map