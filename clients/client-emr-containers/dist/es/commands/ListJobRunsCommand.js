import { __extends } from "tslib";
import { ListJobRunsRequest, ListJobRunsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListJobRunsCommand, serializeAws_restJson1ListJobRunsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists job runs based on a set of parameters. A job run is a unit of work, such as a Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListJobRunsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListJobRunsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobRunsCommand = /** @class */ (function (_super) {
    __extends(ListJobRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobRunsCommand(input) {
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
    ListJobRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRContainersClient";
        var commandName = "ListJobRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobRunsCommand(input, context);
    };
    ListJobRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobRunsCommand(output, context);
    };
    return ListJobRunsCommand;
}($Command));
export { ListJobRunsCommand };
//# sourceMappingURL=ListJobRunsCommand.js.map