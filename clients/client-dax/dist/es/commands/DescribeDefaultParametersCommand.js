import { __extends } from "tslib";
import { DescribeDefaultParametersRequest, DescribeDefaultParametersResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDefaultParametersCommand, serializeAws_json1_1DescribeDefaultParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the default system parameter information for the DAX caching
 *             software.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeDefaultParametersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeDefaultParametersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * const client = new DAXClient(config);
 * const command = new DescribeDefaultParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultParametersCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDefaultParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeDefaultParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDefaultParametersCommand(input) {
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
    DescribeDefaultParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DAXClient";
        var commandName = "DescribeDefaultParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDefaultParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDefaultParametersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDefaultParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDefaultParametersCommand(input, context);
    };
    DescribeDefaultParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDefaultParametersCommand(output, context);
    };
    return DescribeDefaultParametersCommand;
}($Command));
export { DescribeDefaultParametersCommand };
//# sourceMappingURL=DescribeDefaultParametersCommand.js.map