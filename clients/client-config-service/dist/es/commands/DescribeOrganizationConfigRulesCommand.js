import { __extends } from "tslib";
import { DescribeOrganizationConfigRulesRequest, DescribeOrganizationConfigRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrganizationConfigRulesCommand, serializeAws_json1_1DescribeOrganizationConfigRulesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of organization config rules. </p>
 *
 * 		       <note>
 *             <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization config rule names.
 * 			It is only applicable, when you request all the organization config rules.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationConfigRulesCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConfigRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationConfigRulesCommand(input) {
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
    DescribeOrganizationConfigRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeOrganizationConfigRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationConfigRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationConfigRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationConfigRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrganizationConfigRulesCommand(input, context);
    };
    DescribeOrganizationConfigRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrganizationConfigRulesCommand(output, context);
    };
    return DescribeOrganizationConfigRulesCommand;
}($Command));
export { DescribeOrganizationConfigRulesCommand };
//# sourceMappingURL=DescribeOrganizationConfigRulesCommand.js.map