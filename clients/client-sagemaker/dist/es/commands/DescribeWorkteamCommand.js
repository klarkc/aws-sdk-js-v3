import { __extends } from "tslib";
import { DescribeWorkteamRequest, DescribeWorkteamResponse } from "../models/models_2";
import { deserializeAws_json1_1DescribeWorkteamCommand, serializeAws_json1_1DescribeWorkteamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a specific work team. You can see information such as the
 *             create date, the last updated date, membership information, and the work team's Amazon
 *             Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorkteamCommand = /** @class */ (function (_super) {
    __extends(DescribeWorkteamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorkteamCommand(input) {
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
    DescribeWorkteamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeWorkteamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorkteamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorkteamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorkteamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeWorkteamCommand(input, context);
    };
    DescribeWorkteamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeWorkteamCommand(output, context);
    };
    return DescribeWorkteamCommand;
}($Command));
export { DescribeWorkteamCommand };
//# sourceMappingURL=DescribeWorkteamCommand.js.map