import { __extends } from "tslib";
import { DescribeAggregateComplianceByConformancePacksRequest, DescribeAggregateComplianceByConformancePacksResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand, serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant AWS Config rules within each conformance pack.
 * 			Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 * 		       <note>
 *             <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregateComplianceByConformancePacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAggregateComplianceByConformancePacksCommand = /** @class */ (function (_super) {
    __extends(DescribeAggregateComplianceByConformancePacksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAggregateComplianceByConformancePacksCommand(input) {
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
    DescribeAggregateComplianceByConformancePacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeAggregateComplianceByConformancePacksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAggregateComplianceByConformancePacksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAggregateComplianceByConformancePacksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAggregateComplianceByConformancePacksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand(input, context);
    };
    DescribeAggregateComplianceByConformancePacksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAggregateComplianceByConformancePacksCommand(output, context);
    };
    return DescribeAggregateComplianceByConformancePacksCommand;
}($Command));
export { DescribeAggregateComplianceByConformancePacksCommand };
//# sourceMappingURL=DescribeAggregateComplianceByConformancePacksCommand.js.map