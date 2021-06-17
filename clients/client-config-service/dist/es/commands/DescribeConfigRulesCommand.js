import { __extends } from "tslib";
import { DescribeConfigRulesRequest, DescribeConfigRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeConfigRulesCommand, serializeAws_json1_1DescribeConfigRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns details about your AWS Config rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConfigRulesCommand = /** @class */ (function (_super) {
    __extends(DescribeConfigRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConfigRulesCommand(input) {
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
    DescribeConfigRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConfigRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConfigRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConfigRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConfigRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConfigRulesCommand(input, context);
    };
    DescribeConfigRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConfigRulesCommand(output, context);
    };
    return DescribeConfigRulesCommand;
}($Command));
export { DescribeConfigRulesCommand };
//# sourceMappingURL=DescribeConfigRulesCommand.js.map