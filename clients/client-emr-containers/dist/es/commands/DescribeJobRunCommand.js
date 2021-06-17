import { __extends } from "tslib";
import { DescribeJobRunRequest, DescribeJobRunResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeJobRunCommand, serializeAws_restJson1DescribeJobRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays detailed information about a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new DescribeJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobRunCommandInput} for command's `input` shape.
 * @see {@link DescribeJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobRunCommand = /** @class */ (function (_super) {
    __extends(DescribeJobRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobRunCommand(input) {
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
    DescribeJobRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "DescribeJobRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJobRunCommand(input, context);
    };
    DescribeJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJobRunCommand(output, context);
    };
    return DescribeJobRunCommand;
}($Command));
export { DescribeJobRunCommand };
//# sourceMappingURL=DescribeJobRunCommand.js.map