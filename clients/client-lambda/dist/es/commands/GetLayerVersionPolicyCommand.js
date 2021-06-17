import { __extends } from "tslib";
import { GetLayerVersionPolicyRequest, GetLayerVersionPolicyResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLayerVersionPolicyCommand, serializeAws_restJson1GetLayerVersionPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the permission policy for a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>. For more information, see <a>AddLayerVersionPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionPolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionPolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLayerVersionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionPolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLayerVersionPolicyCommand = /** @class */ (function (_super) {
    __extends(GetLayerVersionPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLayerVersionPolicyCommand(input) {
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
    GetLayerVersionPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetLayerVersionPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLayerVersionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLayerVersionPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLayerVersionPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLayerVersionPolicyCommand(input, context);
    };
    GetLayerVersionPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLayerVersionPolicyCommand(output, context);
    };
    return GetLayerVersionPolicyCommand;
}($Command));
export { GetLayerVersionPolicyCommand };
//# sourceMappingURL=GetLayerVersionPolicyCommand.js.map