import { __extends } from "tslib";
import { DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteConditionalForwarderCommand, serializeAws_json1_1DeleteConditionalForwarderCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a conditional forwarder that has been set up for your AWS directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link DeleteConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConditionalForwarderCommand = /** @class */ (function (_super) {
    __extends(DeleteConditionalForwarderCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConditionalForwarderCommand(input) {
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
    DeleteConditionalForwarderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DeleteConditionalForwarderCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConditionalForwarderRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteConditionalForwarderResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConditionalForwarderCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConditionalForwarderCommand(input, context);
    };
    DeleteConditionalForwarderCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConditionalForwarderCommand(output, context);
    };
    return DeleteConditionalForwarderCommand;
}($Command));
export { DeleteConditionalForwarderCommand };
//# sourceMappingURL=DeleteConditionalForwarderCommand.js.map