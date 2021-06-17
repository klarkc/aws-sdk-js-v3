import { __extends } from "tslib";
import { ListBuildBatchesForProjectInput, ListBuildBatchesForProjectOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBuildBatchesForProjectCommand, serializeAws_json1_1ListBuildBatchesForProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the identifiers of the build batches for a specific project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesForProjectCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildBatchesForProjectCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildBatchesForProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildBatchesForProjectCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesForProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBuildBatchesForProjectCommand = /** @class */ (function (_super) {
    __extends(ListBuildBatchesForProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBuildBatchesForProjectCommand(input) {
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
    ListBuildBatchesForProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListBuildBatchesForProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBuildBatchesForProjectInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBuildBatchesForProjectOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBuildBatchesForProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBuildBatchesForProjectCommand(input, context);
    };
    ListBuildBatchesForProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBuildBatchesForProjectCommand(output, context);
    };
    return ListBuildBatchesForProjectCommand;
}($Command));
export { ListBuildBatchesForProjectCommand };
//# sourceMappingURL=ListBuildBatchesForProjectCommand.js.map