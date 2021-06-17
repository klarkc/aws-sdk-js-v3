import { __extends } from "tslib";
import { DescribeEntityAggregatesRequest, DescribeEntityAggregatesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEntityAggregatesCommand, serializeAws_json1_1DescribeEntityAggregatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the number of entities that are affected by each of the specified events. If no
 *          events are specified, the counts of all affected entities are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEntityAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEntityAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEntityAggregatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEntityAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEntityAggregatesCommand = /** @class */ (function (_super) {
    __extends(DescribeEntityAggregatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEntityAggregatesCommand(input) {
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
    DescribeEntityAggregatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeEntityAggregatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEntityAggregatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEntityAggregatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEntityAggregatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEntityAggregatesCommand(input, context);
    };
    DescribeEntityAggregatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEntityAggregatesCommand(output, context);
    };
    return DescribeEntityAggregatesCommand;
}($Command));
export { DescribeEntityAggregatesCommand };
//# sourceMappingURL=DescribeEntityAggregatesCommand.js.map