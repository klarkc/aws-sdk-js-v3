import { __extends } from "tslib";
import { DescribeOrganizationConfigRuleStatusesRequest, DescribeOrganizationConfigRuleStatusesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand, serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides organization config rule deployment status for an organization.</p>
 *
 * 		       <note>
 *             <p>The status is not considered successful until organization config rule is successfully deployed in all the member
 * 			accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization config rule names.
 * 			It is only applicable, when you request all the organization config rules.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConfigRuleStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationConfigRuleStatusesCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRuleStatusesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationConfigRuleStatusesCommand(input) {
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
    DescribeOrganizationConfigRuleStatusesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeOrganizationConfigRuleStatusesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationConfigRuleStatusesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationConfigRuleStatusesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationConfigRuleStatusesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(input, context);
    };
    DescribeOrganizationConfigRuleStatusesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrganizationConfigRuleStatusesCommand(output, context);
    };
    return DescribeOrganizationConfigRuleStatusesCommand;
}($Command));
export { DescribeOrganizationConfigRuleStatusesCommand };
//# sourceMappingURL=DescribeOrganizationConfigRuleStatusesCommand.js.map