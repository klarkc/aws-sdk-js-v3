import { __extends } from "tslib";
import { GetMLTaskRunsRequest, GetMLTaskRunsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetMLTaskRunsCommand, serializeAws_json1_1GetMLTaskRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
 *       asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning
 *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
 *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
 *       optional parameters as documented in this section.</p>
 *
 * 	        <p>This operation returns a list of historic runs and must be paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTaskRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTaskRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetMLTaskRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLTaskRunsCommandInput} for command's `input` shape.
 * @see {@link GetMLTaskRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMLTaskRunsCommand = /** @class */ (function (_super) {
    __extends(GetMLTaskRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMLTaskRunsCommand(input) {
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
    GetMLTaskRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetMLTaskRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMLTaskRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMLTaskRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMLTaskRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetMLTaskRunsCommand(input, context);
    };
    GetMLTaskRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetMLTaskRunsCommand(output, context);
    };
    return GetMLTaskRunsCommand;
}($Command));
export { GetMLTaskRunsCommand };
//# sourceMappingURL=GetMLTaskRunsCommand.js.map