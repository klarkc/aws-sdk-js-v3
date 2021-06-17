import { __extends } from "tslib";
import { ListBuildBatchesInput, ListBuildBatchesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBuildBatchesCommand, serializeAws_json1_1ListBuildBatchesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the identifiers of your build batches in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildBatchesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListBuildBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildBatchesCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBuildBatchesCommand = /** @class */ (function (_super) {
    __extends(ListBuildBatchesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBuildBatchesCommand(input) {
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
    ListBuildBatchesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListBuildBatchesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBuildBatchesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBuildBatchesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBuildBatchesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBuildBatchesCommand(input, context);
    };
    ListBuildBatchesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBuildBatchesCommand(output, context);
    };
    return ListBuildBatchesCommand;
}($Command));
export { ListBuildBatchesCommand };
//# sourceMappingURL=ListBuildBatchesCommand.js.map