import { __extends } from "tslib";
import { GetFolderPathRequest, GetFolderPathResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFolderPathCommand, serializeAws_restJson1GetFolderPathCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             specified folder.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested folder and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the parent folder
 *             names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetFolderPathCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetFolderPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetFolderPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFolderPathCommandInput} for command's `input` shape.
 * @see {@link GetFolderPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFolderPathCommand = /** @class */ (function (_super) {
    __extends(GetFolderPathCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFolderPathCommand(input) {
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
    GetFolderPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetFolderPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFolderPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFolderPathResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFolderPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFolderPathCommand(input, context);
    };
    GetFolderPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFolderPathCommand(output, context);
    };
    return GetFolderPathCommand;
}($Command));
export { GetFolderPathCommand };
//# sourceMappingURL=GetFolderPathCommand.js.map