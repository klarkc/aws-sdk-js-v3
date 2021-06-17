import { __extends } from "tslib";
import { DescribeEndpointAuthorizationMessage, EndpointAuthorizationList } from "../models/models_0";
import { deserializeAws_queryDescribeEndpointAuthorizationCommand, serializeAws_queryDescribeEndpointAuthorizationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an endpoint authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEndpointAuthorizationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEndpointAuthorizationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEndpointAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEndpointAuthorizationCommand = /** @class */ (function (_super) {
    __extends(DescribeEndpointAuthorizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEndpointAuthorizationCommand(input) {
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
    DescribeEndpointAuthorizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeEndpointAuthorizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndpointAuthorizationMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EndpointAuthorizationList.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEndpointAuthorizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEndpointAuthorizationCommand(input, context);
    };
    DescribeEndpointAuthorizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEndpointAuthorizationCommand(output, context);
    };
    return DescribeEndpointAuthorizationCommand;
}($Command));
export { DescribeEndpointAuthorizationCommand };
//# sourceMappingURL=DescribeEndpointAuthorizationCommand.js.map