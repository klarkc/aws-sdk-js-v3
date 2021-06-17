import { __extends } from "tslib";
import { DescribeSubscribedWorkteamRequest, DescribeSubscribedWorkteamResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeSubscribedWorkteamCommand, serializeAws_json1_1DescribeSubscribedWorkteamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a work team provided by a vendor. It returns details about the
 *             subscription with a vendor in the AWS Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeSubscribedWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeSubscribedWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeSubscribedWorkteamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscribedWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscribedWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSubscribedWorkteamCommand = /** @class */ (function (_super) {
    __extends(DescribeSubscribedWorkteamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSubscribedWorkteamCommand(input) {
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
    DescribeSubscribedWorkteamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeSubscribedWorkteamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSubscribedWorkteamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSubscribedWorkteamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSubscribedWorkteamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeSubscribedWorkteamCommand(input, context);
    };
    DescribeSubscribedWorkteamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeSubscribedWorkteamCommand(output, context);
    };
    return DescribeSubscribedWorkteamCommand;
}($Command));
export { DescribeSubscribedWorkteamCommand };
//# sourceMappingURL=DescribeSubscribedWorkteamCommand.js.map