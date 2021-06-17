import { __extends } from "tslib";
import { DescribeRegistryRequest, DescribeRegistryResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRegistryCommand, serializeAws_restJson1DescribeRegistryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DescribeRegistryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegistryCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistryCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRegistryCommand = /** @class */ (function (_super) {
    __extends(DescribeRegistryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRegistryCommand(input) {
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
    DescribeRegistryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "DescribeRegistryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRegistryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRegistryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRegistryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRegistryCommand(input, context);
    };
    DescribeRegistryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRegistryCommand(output, context);
    };
    return DescribeRegistryCommand;
}($Command));
export { DescribeRegistryCommand };
//# sourceMappingURL=DescribeRegistryCommand.js.map