import { __extends } from "tslib";
import { CreateProjectRequest, CreateProjectResult } from "../models/models_0";
import { deserializeAws_json1_1CreateProjectCommand, serializeAws_json1_1CreateProjectCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a project, including project resources. This action creates a project based on
 *       a submitted project request. A set of source code files and a toolchain template file
 *       can be included with the project request. If these are not provided, an empty project is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, CreateProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, CreateProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProjectCommand = /** @class */ (function (_super) {
    __extends(CreateProjectCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProjectCommand(input) {
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
    CreateProjectCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeStarClient";
        var commandName = "CreateProjectCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProjectResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProjectCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProjectCommand(input, context);
    };
    CreateProjectCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProjectCommand(output, context);
    };
    return CreateProjectCommand;
}($Command));
export { CreateProjectCommand };
//# sourceMappingURL=CreateProjectCommand.js.map