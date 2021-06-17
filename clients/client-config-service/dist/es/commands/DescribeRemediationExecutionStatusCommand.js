import { __extends } from "tslib";
import { DescribeRemediationExecutionStatusRequest, DescribeRemediationExecutionStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeRemediationExecutionStatusCommand, serializeAws_json1_1DescribeRemediationExecutionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed.
 * 			When you specify the limit and the next token, you receive a paginated response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationExecutionStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationExecutionStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRemediationExecutionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRemediationExecutionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationExecutionStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRemediationExecutionStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeRemediationExecutionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRemediationExecutionStatusCommand(input) {
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
    DescribeRemediationExecutionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeRemediationExecutionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRemediationExecutionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRemediationExecutionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRemediationExecutionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeRemediationExecutionStatusCommand(input, context);
    };
    DescribeRemediationExecutionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeRemediationExecutionStatusCommand(output, context);
    };
    return DescribeRemediationExecutionStatusCommand;
}($Command));
export { DescribeRemediationExecutionStatusCommand };
//# sourceMappingURL=DescribeRemediationExecutionStatusCommand.js.map