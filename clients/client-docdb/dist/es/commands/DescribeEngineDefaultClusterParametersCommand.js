import { __extends } from "tslib";
import { DescribeEngineDefaultClusterParametersMessage, DescribeEngineDefaultClusterParametersResult, } from "../models/models_0";
import { deserializeAws_queryDescribeEngineDefaultClusterParametersCommand, serializeAws_queryDescribeEngineDefaultClusterParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the default engine and system parameter information for the cluster database
 *             engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeEngineDefaultClusterParametersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeEngineDefaultClusterParametersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeEngineDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEngineDefaultClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEngineDefaultClusterParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeEngineDefaultClusterParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEngineDefaultClusterParametersCommand(input) {
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
    DescribeEngineDefaultClusterParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DescribeEngineDefaultClusterParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEngineDefaultClusterParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEngineDefaultClusterParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEngineDefaultClusterParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEngineDefaultClusterParametersCommand(input, context);
    };
    DescribeEngineDefaultClusterParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEngineDefaultClusterParametersCommand(output, context);
    };
    return DescribeEngineDefaultClusterParametersCommand;
}($Command));
export { DescribeEngineDefaultClusterParametersCommand };
//# sourceMappingURL=DescribeEngineDefaultClusterParametersCommand.js.map