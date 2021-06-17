import { __extends } from "tslib";
import { CreateLocationFsxWindowsRequest, CreateLocationFsxWindowsResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateLocationFsxWindowsCommand, serializeAws_json1_1CreateLocationFsxWindowsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an endpoint for an Amazon FSx for Windows File Server file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxWindowsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxWindowsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CreateLocationFsxWindowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLocationFsxWindowsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxWindowsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLocationFsxWindowsCommand = /** @class */ (function (_super) {
    __extends(CreateLocationFsxWindowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLocationFsxWindowsCommand(input) {
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
    CreateLocationFsxWindowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "CreateLocationFsxWindowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLocationFsxWindowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLocationFsxWindowsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLocationFsxWindowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateLocationFsxWindowsCommand(input, context);
    };
    CreateLocationFsxWindowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateLocationFsxWindowsCommand(output, context);
    };
    return CreateLocationFsxWindowsCommand;
}($Command));
export { CreateLocationFsxWindowsCommand };
//# sourceMappingURL=CreateLocationFsxWindowsCommand.js.map