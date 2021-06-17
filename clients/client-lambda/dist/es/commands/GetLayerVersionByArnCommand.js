import { __extends } from "tslib";
import { GetLayerVersionByArnRequest, GetLayerVersionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLayerVersionByArnCommand, serializeAws_restJson1GetLayerVersionByArnCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda
 *         layer</a>, with a link to download the layer archive
 *         that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionByArnCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionByArnCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetLayerVersionByArnCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLayerVersionByArnCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionByArnCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLayerVersionByArnCommand = /** @class */ (function (_super) {
    __extends(GetLayerVersionByArnCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLayerVersionByArnCommand(input) {
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
    GetLayerVersionByArnCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LambdaClient";
        var commandName = "GetLayerVersionByArnCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLayerVersionByArnRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLayerVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLayerVersionByArnCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLayerVersionByArnCommand(input, context);
    };
    GetLayerVersionByArnCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLayerVersionByArnCommand(output, context);
    };
    return GetLayerVersionByArnCommand;
}($Command));
export { GetLayerVersionByArnCommand };
//# sourceMappingURL=GetLayerVersionByArnCommand.js.map