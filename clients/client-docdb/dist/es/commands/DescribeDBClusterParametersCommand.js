import { __extends } from "tslib";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/models_0";
import { deserializeAws_queryDescribeDBClusterParametersCommand, serializeAws_queryDescribeDBClusterParametersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the detailed parameter list for a particular cluster parameter
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterParametersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterParametersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new DescribeDBClusterParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDBClusterParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeDBClusterParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDBClusterParametersCommand(input) {
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
    DescribeDBClusterParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "DescribeDBClusterParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDBClusterParametersMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterParameterGroupDetails.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDBClusterParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeDBClusterParametersCommand(input, context);
    };
    DescribeDBClusterParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeDBClusterParametersCommand(output, context);
    };
    return DescribeDBClusterParametersCommand;
}($Command));
export { DescribeDBClusterParametersCommand };
//# sourceMappingURL=DescribeDBClusterParametersCommand.js.map