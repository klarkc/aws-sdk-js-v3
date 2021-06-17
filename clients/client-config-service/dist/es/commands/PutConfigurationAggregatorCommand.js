import { __extends } from "tslib";
import { PutConfigurationAggregatorRequest, PutConfigurationAggregatorResponse } from "../models/models_0";
import { deserializeAws_json1_1PutConfigurationAggregatorCommand, serializeAws_json1_1PutConfigurationAggregatorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates and updates the configuration aggregator with the
 * 			selected source accounts and regions. The source account can be
 * 			individual account(s) or an organization.</p>
 *
 * 		       <p>
 *             <code>accountIds</code> that are passed will be replaced with existing accounts.
 * 			If you want to add additional accounts into the aggregator, call <code>DescribeAggregator</code> to get the previous accounts and then append new ones.</p>
 * 		       <note>
 * 			         <p>AWS Config should be enabled in source accounts and regions
 * 				you want to aggregate.</p>
 *
 * 			         <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization.
 * 				If the caller is a management account, AWS Config calls <code>EnableAwsServiceAccess</code> API to enable integration between AWS Config and AWS Organizations.
 * 				If the caller is a registered delegated administrator, AWS Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p>
 * 			         <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the AWS Config developer guide. </p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConfigurationAggregatorCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConfigurationAggregatorCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutConfigurationAggregatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationAggregatorCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationAggregatorCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutConfigurationAggregatorCommand = /** @class */ (function (_super) {
    __extends(PutConfigurationAggregatorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutConfigurationAggregatorCommand(input) {
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
    PutConfigurationAggregatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "PutConfigurationAggregatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutConfigurationAggregatorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutConfigurationAggregatorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutConfigurationAggregatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutConfigurationAggregatorCommand(input, context);
    };
    PutConfigurationAggregatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutConfigurationAggregatorCommand(output, context);
    };
    return PutConfigurationAggregatorCommand;
}($Command));
export { PutConfigurationAggregatorCommand };
//# sourceMappingURL=PutConfigurationAggregatorCommand.js.map