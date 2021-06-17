import { __extends } from "tslib";
import { DescribeCompanyNetworkConfigurationRequest, DescribeCompanyNetworkConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand, serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the networking configuration to access the internal websites associated with
 *             the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeCompanyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCompanyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeCompanyNetworkConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCompanyNetworkConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeCompanyNetworkConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCompanyNetworkConfigurationCommand(input) {
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
    DescribeCompanyNetworkConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeCompanyNetworkConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCompanyNetworkConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCompanyNetworkConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCompanyNetworkConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCompanyNetworkConfigurationCommand(input, context);
    };
    DescribeCompanyNetworkConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCompanyNetworkConfigurationCommand(output, context);
    };
    return DescribeCompanyNetworkConfigurationCommand;
}($Command));
export { DescribeCompanyNetworkConfigurationCommand };
//# sourceMappingURL=DescribeCompanyNetworkConfigurationCommand.js.map