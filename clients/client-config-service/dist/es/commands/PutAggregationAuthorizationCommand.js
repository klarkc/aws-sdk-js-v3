import { __extends } from "tslib";
import { PutAggregationAuthorizationRequest, PutAggregationAuthorizationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutAggregationAuthorizationCommand, serializeAws_json1_1PutAggregationAuthorizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Authorizes the aggregator account and region to collect data
 * 			from the source account and region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutAggregationAuthorizationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutAggregationAuthorizationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutAggregationAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAggregationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link PutAggregationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAggregationAuthorizationCommand = /** @class */ (function (_super) {
    __extends(PutAggregationAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAggregationAuthorizationCommand(input) {
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
    PutAggregationAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutAggregationAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAggregationAuthorizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAggregationAuthorizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAggregationAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAggregationAuthorizationCommand(input, context);
    };
    PutAggregationAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAggregationAuthorizationCommand(output, context);
    };
    return PutAggregationAuthorizationCommand;
}($Command));
export { PutAggregationAuthorizationCommand };
//# sourceMappingURL=PutAggregationAuthorizationCommand.js.map