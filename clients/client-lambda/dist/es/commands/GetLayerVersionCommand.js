import { __extends } from "tslib";
import { GetLayerVersionRequest, GetLayerVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLayerVersionCommand, serializeAws_restJson1GetLayerVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>, with a link to download the layer archive
 *         that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLayerVersionCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLayerVersionCommand = /** @class */ (function (_super) {
    __extends(GetLayerVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLayerVersionCommand(input) {
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
    GetLayerVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetLayerVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLayerVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLayerVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLayerVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLayerVersionCommand(input, context);
    };
    GetLayerVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLayerVersionCommand(output, context);
    };
    return GetLayerVersionCommand;
}($Command));
export { GetLayerVersionCommand };
//# sourceMappingURL=GetLayerVersionCommand.js.map