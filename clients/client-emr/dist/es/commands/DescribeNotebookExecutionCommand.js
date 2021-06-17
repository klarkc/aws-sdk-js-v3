import { __extends } from "tslib";
import { DescribeNotebookExecutionInput, DescribeNotebookExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeNotebookExecutionCommand, serializeAws_json1_1DescribeNotebookExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides details of a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeNotebookExecutionCommand = /** @class */ (function (_super) {
    __extends(DescribeNotebookExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeNotebookExecutionCommand(input) {
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
    DescribeNotebookExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "DescribeNotebookExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeNotebookExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeNotebookExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeNotebookExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeNotebookExecutionCommand(input, context);
    };
    DescribeNotebookExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeNotebookExecutionCommand(output, context);
    };
    return DescribeNotebookExecutionCommand;
}($Command));
export { DescribeNotebookExecutionCommand };
//# sourceMappingURL=DescribeNotebookExecutionCommand.js.map