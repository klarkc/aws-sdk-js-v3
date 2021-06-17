import { __extends } from "tslib";
import { CancelJobRunRequest, CancelJobRunResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelJobRunCommand, serializeAws_restJson1CancelJobRunCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a job run. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CancelJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CancelJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new CancelJobRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJobRunCommandInput} for command's `input` shape.
 * @see {@link CancelJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelJobRunCommand = /** @class */ (function (_super) {
    __extends(CancelJobRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelJobRunCommand(input) {
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
    CancelJobRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "CancelJobRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelJobRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelJobRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelJobRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelJobRunCommand(input, context);
    };
    CancelJobRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelJobRunCommand(output, context);
    };
    return CancelJobRunCommand;
}($Command));
export { CancelJobRunCommand };
//# sourceMappingURL=CancelJobRunCommand.js.map