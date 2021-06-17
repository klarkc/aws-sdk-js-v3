import { __extends } from "tslib";
import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/models_1";
import { deserializeAws_queryDescribeEngineDefaultParametersCommand, serializeAws_queryDescribeEngineDefaultParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the default engine and system parameter information for the specified database engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEngineDefaultParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEngineDefaultParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeEngineDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngineDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEngineDefaultParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeEngineDefaultParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEngineDefaultParametersCommand(input) {
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
    DescribeEngineDefaultParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeEngineDefaultParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEngineDefaultParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEngineDefaultParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEngineDefaultParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEngineDefaultParametersCommand(input, context);
    };
    DescribeEngineDefaultParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEngineDefaultParametersCommand(output, context);
    };
    return DescribeEngineDefaultParametersCommand;
}($Command));
export { DescribeEngineDefaultParametersCommand };
//# sourceMappingURL=DescribeEngineDefaultParametersCommand.js.map