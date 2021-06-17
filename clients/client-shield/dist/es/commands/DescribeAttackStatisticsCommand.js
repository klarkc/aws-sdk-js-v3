import { __extends } from "tslib";
import { DescribeAttackStatisticsRequest, DescribeAttackStatisticsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAttackStatisticsCommand, serializeAws_json1_1DescribeAttackStatisticsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the number and type of attacks AWS Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p>
 *          <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p>
 *          <p>The time range indicates the period covered by the attack statistics data items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackStatisticsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeAttackStatisticsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeAttackStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAttackStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackStatisticsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAttackStatisticsCommand = /** @class */ (function (_super) {
    __extends(DescribeAttackStatisticsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAttackStatisticsCommand(input) {
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
    DescribeAttackStatisticsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "DescribeAttackStatisticsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAttackStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAttackStatisticsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAttackStatisticsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAttackStatisticsCommand(input, context);
    };
    DescribeAttackStatisticsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAttackStatisticsCommand(output, context);
    };
    return DescribeAttackStatisticsCommand;
}($Command));
export { DescribeAttackStatisticsCommand };
//# sourceMappingURL=DescribeAttackStatisticsCommand.js.map