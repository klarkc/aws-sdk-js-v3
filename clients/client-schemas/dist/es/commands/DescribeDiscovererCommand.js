import { __extends } from "tslib";
import { DescribeDiscovererRequest, DescribeDiscovererResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDiscovererCommand, serializeAws_restJson1DescribeDiscovererCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DescribeDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDiscovererCommandInput} for command's `input` shape.
 * @see {@link DescribeDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDiscovererCommand = /** @class */ (function (_super) {
    __extends(DescribeDiscovererCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDiscovererCommand(input) {
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
    DescribeDiscovererCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "DescribeDiscovererCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDiscovererRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDiscovererResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDiscovererCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDiscovererCommand(input, context);
    };
    DescribeDiscovererCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDiscovererCommand(output, context);
    };
    return DescribeDiscovererCommand;
}($Command));
export { DescribeDiscovererCommand };
//# sourceMappingURL=DescribeDiscovererCommand.js.map