import { __extends } from "tslib";
import { GetCanaryRequest, GetCanaryResponse } from "../models/models_0";
import { deserializeAws_restJson1GetCanaryCommand, serializeAws_restJson1GetCanaryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves complete information about one canary. You must specify
 *       the name of the canary that you want. To get a list of canaries
 *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const command = new GetCanaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCanaryCommandInput} for command's `input` shape.
 * @see {@link GetCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCanaryCommand = /** @class */ (function (_super) {
    __extends(GetCanaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCanaryCommand(input) {
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
    GetCanaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SyntheticsClient";
        var commandName = "GetCanaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCanaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCanaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCanaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCanaryCommand(input, context);
    };
    GetCanaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCanaryCommand(output, context);
    };
    return GetCanaryCommand;
}($Command));
export { GetCanaryCommand };
//# sourceMappingURL=GetCanaryCommand.js.map