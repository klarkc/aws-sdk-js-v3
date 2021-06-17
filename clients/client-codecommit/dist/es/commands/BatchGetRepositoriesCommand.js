import { __extends } from "tslib";
import { BatchGetRepositoriesInput, BatchGetRepositoriesOutput } from "../models/models_0";
import { deserializeAws_json1_1BatchGetRepositoriesCommand, serializeAws_json1_1BatchGetRepositoriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about one or more repositories.</p>
 *         <note>
 *             <p>The description field for a repository accepts all HTML characters and all valid
 *                 Unicode characters. Applications that do not HTML-encode the description and display
 *                 it in a webpage can expose users to potentially malicious code. Make sure that you
 *                 HTML-encode the description field in any application that uses this API to display
 *                 the repository description on a webpage.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchGetRepositoriesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchGetRepositoriesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchGetRepositoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetRepositoriesCommandInput} for command's `input` shape.
 * @see {@link BatchGetRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetRepositoriesCommand = /** @class */ (function (_super) {
    __extends(BatchGetRepositoriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetRepositoriesCommand(input) {
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
    BatchGetRepositoriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "BatchGetRepositoriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetRepositoriesInput.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetRepositoriesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetRepositoriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetRepositoriesCommand(input, context);
    };
    BatchGetRepositoriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetRepositoriesCommand(output, context);
    };
    return BatchGetRepositoriesCommand;
}($Command));
export { BatchGetRepositoriesCommand };
//# sourceMappingURL=BatchGetRepositoriesCommand.js.map