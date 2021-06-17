import { __extends } from "tslib";
import { GetFolderRequest, GetFolderResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFolderCommand, serializeAws_restJson1GetFolderCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the metadata of the specified folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFolderCommandInput} for command's `input` shape.
 * @see {@link GetFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFolderCommand = /** @class */ (function (_super) {
    __extends(GetFolderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFolderCommand(input) {
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
    GetFolderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetFolderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFolderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFolderResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFolderCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFolderCommand(input, context);
    };
    GetFolderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFolderCommand(output, context);
    };
    return GetFolderCommand;
}($Command));
export { GetFolderCommand };
//# sourceMappingURL=GetFolderCommand.js.map