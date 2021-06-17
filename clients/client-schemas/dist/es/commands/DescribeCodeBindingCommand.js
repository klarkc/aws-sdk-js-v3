import { __extends } from "tslib";
import { DescribeCodeBindingRequest, DescribeCodeBindingResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeCodeBindingCommand, serializeAws_restJson1DescribeCodeBindingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe the code binding URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DescribeCodeBindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeBindingCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeBindingCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeCodeBindingCommand = /** @class */ (function (_super) {
    __extends(DescribeCodeBindingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeCodeBindingCommand(input) {
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
    DescribeCodeBindingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "DescribeCodeBindingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeCodeBindingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeCodeBindingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeCodeBindingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeCodeBindingCommand(input, context);
    };
    DescribeCodeBindingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeCodeBindingCommand(output, context);
    };
    return DescribeCodeBindingCommand;
}($Command));
export { DescribeCodeBindingCommand };
//# sourceMappingURL=DescribeCodeBindingCommand.js.map