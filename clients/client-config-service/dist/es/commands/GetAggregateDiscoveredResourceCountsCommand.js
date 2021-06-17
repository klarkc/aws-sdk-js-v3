import { __extends } from "tslib";
import { GetAggregateDiscoveredResourceCountsRequest, GetAggregateDiscoveredResourceCountsResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand, serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p>
 * 		       <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1.
 * 			If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateDiscoveredResourceCountsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateDiscoveredResourceCountsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetAggregateDiscoveredResourceCountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAggregateDiscoveredResourceCountsCommandInput} for command's `input` shape.
 * @see {@link GetAggregateDiscoveredResourceCountsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAggregateDiscoveredResourceCountsCommand = /** @class */ (function (_super) {
    __extends(GetAggregateDiscoveredResourceCountsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAggregateDiscoveredResourceCountsCommand(input) {
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
    GetAggregateDiscoveredResourceCountsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetAggregateDiscoveredResourceCountsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAggregateDiscoveredResourceCountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAggregateDiscoveredResourceCountsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAggregateDiscoveredResourceCountsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand(input, context);
    };
    GetAggregateDiscoveredResourceCountsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAggregateDiscoveredResourceCountsCommand(output, context);
    };
    return GetAggregateDiscoveredResourceCountsCommand;
}($Command));
export { GetAggregateDiscoveredResourceCountsCommand };
//# sourceMappingURL=GetAggregateDiscoveredResourceCountsCommand.js.map