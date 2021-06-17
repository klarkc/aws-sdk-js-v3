import { __extends } from "tslib";
import { RemoveLayerVersionPermissionRequest } from "../models/models_0";
import { deserializeAws_restJson1RemoveLayerVersionPermissionCommand, serializeAws_restJson1RemoveLayerVersionPermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a statement from the permissions policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. For more information, see
 *         <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, RemoveLayerVersionPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, RemoveLayerVersionPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new RemoveLayerVersionPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveLayerVersionPermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveLayerVersionPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveLayerVersionPermissionCommand = /** @class */ (function (_super) {
    __extends(RemoveLayerVersionPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveLayerVersionPermissionCommand(input) {
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
    RemoveLayerVersionPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "RemoveLayerVersionPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveLayerVersionPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveLayerVersionPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveLayerVersionPermissionCommand(input, context);
    };
    RemoveLayerVersionPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveLayerVersionPermissionCommand(output, context);
    };
    return RemoveLayerVersionPermissionCommand;
}($Command));
export { RemoveLayerVersionPermissionCommand };
//# sourceMappingURL=RemoveLayerVersionPermissionCommand.js.map