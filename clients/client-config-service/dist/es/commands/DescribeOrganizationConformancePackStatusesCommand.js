import { __extends } from "tslib";
import { DescribeOrganizationConformancePackStatusesRequest, DescribeOrganizationConformancePackStatusesResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand, serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides organization conformance pack deployment status for an organization. </p>
 * 		       <note>
 * 			         <p>The status is not considered successful until organization conformance pack is successfully
 * 				deployed in all the member accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 				Limit and next token are not applicable if you specify organization conformance pack names.
 * 				They are only applicable, when you request all the organization conformance packs.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConformancePackStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConformancePackStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePackStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeOrganizationConformancePackStatusesCommand = /** @class */ (function (_super) {
    __extends(DescribeOrganizationConformancePackStatusesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeOrganizationConformancePackStatusesCommand(input) {
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
    DescribeOrganizationConformancePackStatusesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeOrganizationConformancePackStatusesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeOrganizationConformancePackStatusesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeOrganizationConformancePackStatusesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeOrganizationConformancePackStatusesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand(input, context);
    };
    DescribeOrganizationConformancePackStatusesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeOrganizationConformancePackStatusesCommand(output, context);
    };
    return DescribeOrganizationConformancePackStatusesCommand;
}($Command));
export { DescribeOrganizationConformancePackStatusesCommand };
//# sourceMappingURL=DescribeOrganizationConformancePackStatusesCommand.js.map