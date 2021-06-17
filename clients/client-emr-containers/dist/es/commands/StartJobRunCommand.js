import { __extends } from "tslib";
import { StartJobRunRequest, StartJobRunResponse } from "../models/models_0";
import { deserializeAws_restJson1StartJobRunCommand, serializeAws_restJson1StartJobRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, StartJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, StartJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new StartJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartJobRunCommandInput} for command's `input` shape.
 * @see {@link StartJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartJobRunCommand = /** @class */ (function (_super) {
    __extends(StartJobRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartJobRunCommand(input) {
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
    StartJobRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "StartJobRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartJobRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartJobRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartJobRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartJobRunCommand(input, context);
    };
    StartJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartJobRunCommand(output, context);
    };
    return StartJobRunCommand;
}($Command));
export { StartJobRunCommand };
//# sourceMappingURL=StartJobRunCommand.js.map