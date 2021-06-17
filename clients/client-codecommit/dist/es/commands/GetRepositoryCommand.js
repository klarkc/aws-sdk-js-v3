import { __extends } from "tslib";
import { GetRepositoryInput, GetRepositoryOutput } from "../models/models_0";
import { deserializeAws_json1_1GetRepositoryCommand, serializeAws_json1_1GetRepositoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a repository.</p>
 *
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
 * import { CodeCommitClient, GetRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRepositoryCommand = /** @class */ (function (_super) {
    __extends(GetRepositoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRepositoryCommand(input) {
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
    GetRepositoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeCommitClient";
        var commandName = "GetRepositoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetRepositoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRepositoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRepositoryCommand(input, context);
    };
    GetRepositoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRepositoryCommand(output, context);
    };
    return GetRepositoryCommand;
}($Command));
export { GetRepositoryCommand };
//# sourceMappingURL=GetRepositoryCommand.js.map