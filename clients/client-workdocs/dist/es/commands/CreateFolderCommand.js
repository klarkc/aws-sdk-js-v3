import { __extends } from "tslib";
import { CreateFolderRequest, CreateFolderResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateFolderCommand, serializeAws_restJson1CreateFolderCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a folder with the specified name and parent folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFolderCommandInput} for command's `input` shape.
 * @see {@link CreateFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFolderCommand = /** @class */ (function (_super) {
    __extends(CreateFolderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFolderCommand(input) {
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
    CreateFolderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "CreateFolderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFolderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFolderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFolderCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateFolderCommand(input, context);
    };
    CreateFolderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateFolderCommand(output, context);
    };
    return CreateFolderCommand;
}($Command));
export { CreateFolderCommand };
//# sourceMappingURL=CreateFolderCommand.js.map