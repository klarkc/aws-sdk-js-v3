import { __extends } from "tslib";
import { CreateWorkspacesRequest, CreateWorkspacesResult } from "../models/models_0";
import { deserializeAws_json1_1CreateWorkspacesCommand, serializeAws_json1_1CreateWorkspacesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates one or more WorkSpaces.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspacesCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkspacesCommand = /** @class */ (function (_super) {
    __extends(CreateWorkspacesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkspacesCommand(input) {
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
    CreateWorkspacesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkSpacesClient";
        var commandName = "CreateWorkspacesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkspacesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkspacesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkspacesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWorkspacesCommand(input, context);
    };
    CreateWorkspacesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWorkspacesCommand(output, context);
    };
    return CreateWorkspacesCommand;
}($Command));
export { CreateWorkspacesCommand };
//# sourceMappingURL=CreateWorkspacesCommand.js.map