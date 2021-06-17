import { __extends } from "tslib";
import { ImportSourceCredentialsInput, ImportSourceCredentialsOutput } from "../models/models_0";
import { deserializeAws_json1_1ImportSourceCredentialsCommand, serializeAws_json1_1ImportSourceCredentialsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Imports the source repository credentials for an AWS CodeBuild project that has its
 *             source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ImportSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ImportSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ImportSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ImportSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportSourceCredentialsCommand = /** @class */ (function (_super) {
    __extends(ImportSourceCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportSourceCredentialsCommand(input) {
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
    ImportSourceCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ImportSourceCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportSourceCredentialsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ImportSourceCredentialsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportSourceCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ImportSourceCredentialsCommand(input, context);
    };
    ImportSourceCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ImportSourceCredentialsCommand(output, context);
    };
    return ImportSourceCredentialsCommand;
}($Command));
export { ImportSourceCredentialsCommand };
//# sourceMappingURL=ImportSourceCredentialsCommand.js.map